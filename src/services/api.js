import axios from 'axios';
import { BASE_URL, API_PATHS } from '../config.js';

axios.defaults.baseURL = BASE_URL;

export const fetchData = async path => {
  try {
    const response = await axios.get(`${BASE_URL}${path}`, {
      headers: {
        accept: 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    throw error;
  }
};

export const getPost = async postId => {
  const post = await fetchData(`${API_PATHS.post}/${postId}`);
  return post;
};

export const getBlogPosts = async () => {
  const posts = await fetchData(API_PATHS.blog);
  return posts;
};

export const getPortfolioInterior = async () => {
  const projects = await fetchData(API_PATHS.portfolioInterior);
  return projects;
};

export const getPortoflioBuildingsResidential = async () => {
  const projects = await fetchData(API_PATHS.portoflioBuildingsResidential);
  return projects;
};

export const getPortoflioBuildingsIndustrial = async () => {
  const projects = await fetchData(API_PATHS.portoflioBuildingsIndustrial);
  return projects;
};

export const getPortoflioBuildingsCommercial = async () => {
  const projects = await fetchData(API_PATHS.portoflioBuildingsCommercial);
  return projects;
};

export const getAboutUsInfo = async () => {
  const data = await fetchData(API_PATHS.aboutUs);
  return data;
};

export const fetchImages = async mediaId => {
  try {
    const response = await axios.get(`${API_PATHS.media}${mediaId}`);

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    const images = response.data;
    return images;
  } catch (error) {
    console.error('There was a problem fetching the media:', error);
    throw error;
  }
};
