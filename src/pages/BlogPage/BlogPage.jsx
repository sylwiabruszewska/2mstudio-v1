import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './BlogPage.module.scss';
import { Section, Container } from 'components';
import { getImages } from '../../helpers/getImages';
import { getBlogPosts } from '../../services/api';
import { setIsLoading } from '../../redux/global/globalSlice';

const BlogPage = () => {
  const [posts, setPosts] = useState();
  const [featuredImages, setFeaturedImages] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const fetchData = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    getImages(posts, featuredImages, setFeaturedImages, getImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <>
      <Helmet>
        <title>2m Studio Pracownia Projektowa - Portfolio - Blog</title>
      </Helmet>

      <Section>
        <Container>
          <div className={styles['blog-list']}>
            {posts &&
              posts.map(post => (
                <article key={post.id} className={styles['blog-card']}>
                  <div className={styles['blog-post']}>
                    <Link to={`/${post.id}`}>
                      <p className={styles['blog-date']}>
                        {new Date(post.date).toLocaleDateString('pl-PL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <h2 className={styles['blog-title']}>
                        {post.title.rendered}
                      </h2>
                      <p
                        className="blog-excerpt"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                    </Link>
                  </div>
                  <div className={styles['overlay']}>
                    <Link to={`/${post.id}`}>
                      {post.featured_media !== 0 &&
                        featuredImages[post.featured_media] && (
                          <div>
                            <img
                              src={featuredImages[post.featured_media]}
                              alt={post.title.rendered}
                              className={styles['post-img']}
                            />

                            <div className={styles['box']}>zobacz post</div>
                          </div>
                        )}
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BlogPage;
