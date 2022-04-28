import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "content");

function getAllPosts() {
  const postFiles = fs.readdirSync(postsPath);
  const allPosts = postFiles.map((postFile) => {
    return getSinglePost(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

function getSinglePost(fileName) {
  const filePath = path.join(postsPath, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ""); // removes file extension
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
