const blogPostsServices = require('../services/blogPostsServices');

const getAllBlogPosts = async (_req, res) => {
  try {
    const blogposts = await blogPostsServices.getAllBlogPosts();
    return res.status(200).json(blogposts);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

const createBlogPosts = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blogposts = await blogPostsServices.createBlogPosts(title, content);
    return res.status(201).json(blogposts);
  } catch (e) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

module.exports = { createBlogPosts, getAllBlogPosts };
