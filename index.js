const express = require("express"); //ou import express from "express"
const mongoose = require("mongoose");
const Blog = require("./BlogModel");
const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://****@cluster0.raum0.mongodb.net/blobDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

async function createBlog(titre, post) {
  try {
    let blog = await Blog.create({ titre, post });
    console.log(blog);
  } catch (err) {
    console.log(err);
  }
}
//createBlog("coucou", "hello");
//createBlog("coucou2", "hello2");

async function getAllBlogs() {
  try {
    let blogs = await Blog.find();
    console.log(blogs);
  } catch (err) {
    console.log(err);
  }
}
//getAllBlogs();

async function getBlogID(id) {
  try {
    let blog = await Blog.findById(id);
    console.log(blog);
  } catch (err) {
    console.log(err);
  }
}
//getBlogID("61b8b77e2287ef82207c9767");

async function updateBlogTitle(id, newTitre) {
  try {
    // findById retourne un document et pas un tableau de documents
    let blog = await Blog.findById(id);
    blog.titre = newTitre;
    await blog.save();
    console.log(blog);
  } catch (err) {
    console.log(err);
  }
}
//updateBlogTitle("61b8b77e2287ef82207c9767", "titremodifier");

async function updateBlogPost(id, newPost) {
  try {
    // findById retourne un document et pas un tableau de documents
    let blog = await Blog.findById(id);
    blog.post = newPost;
    await blog.save();
    console.log(blog);
  } catch (err) {
    console.log(err);
  }
}
//updateBlogPost("61b8b77e2287ef82207c9767", "postmodifier");

async function deleteBlog(id) {
  try {
    let blog = await Blog.findById(id);
    await blog.delete();
    console.log(blog);
  } catch (err) {
    console.log(err);
  }
}
//deleteBlog("61b8b77e2287ef82207c9767");

app.listen(port, () => console.log(`serveur running on port: ${port}`));
