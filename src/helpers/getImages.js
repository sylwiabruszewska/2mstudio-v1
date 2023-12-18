import { fetchImages } from '../services/api';
import defaultImage from '../assets/images/photo-home.jpg';

export const getImages = async (posts, imgState, setImgState) => {
  if (!posts) {
    return;
  }

  try {
    const updatedImgState = { ...imgState };

    for (const post of posts) {
      if (
        post.featured_media !== null &&
        !updatedImgState[post.featured_media]
      ) {
        try {
          const mediaData = await fetchImages(post.featured_media);
          updatedImgState[post.featured_media] = mediaData.source_url;
        } catch (error) {
          console.error(
            'There was a problem fetching media for post:',
            post.id,
            error
          );
          updatedImgState[post.featured_media] = defaultImage;
        }
      } else if (
        post.featured_media !== null &&
        !updatedImgState[post.featured_media]
      ) {
        updatedImgState[post.featured_media] = defaultImage;
      }
    }

    setImgState(updatedImgState);
  } catch (error) {
    console.error('There was a problem updating images state:', error);
  }
};
