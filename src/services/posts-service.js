import { Post } from "../models/Post.js";

const getAllPosts = async () => {
  return await Post.find({});
};

const getPostById = async (id) => {
  return "Needs implementation";
};

const createPost = async (postData) => {
  return "Needs implementation";
};

const updatePost = async (id, postData) => {
  return "Needs implementation";
};

const deletePost = async (id) => {
  return "Needs implementation";
};

const getPostBySender = async (sender) => {
  return "Needs implementation";
};

export default {
  getAllPosts,
  getPostById,
  getPostBySender,
  createPost,
  updatePost,
  deletePost,
};