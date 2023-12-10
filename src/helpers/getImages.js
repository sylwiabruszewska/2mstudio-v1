import { fetchImages } from '../services/api';

export const getImages = async (posts, imgState, setImgState) => {
  if (!posts) {
    return;
  }

  try {
    for (const post of posts) {
      if (post.featured_media !== 0 && !imgState[post.featured_media]) {
        const mediaData = await fetchImages(post.featured_media);
        setImgState(prevState => ({
          ...prevState,
          [post.featured_media]: mediaData.source_url,
        }));
      }
    }
  } catch (error) {
    console.error('There was a problem fetching media:', error);
  }
};
