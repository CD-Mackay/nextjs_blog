import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "content");

export function getPostsFiles() {
  return fs.readdirSync(postsPath);
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => {
    return getSinglePost(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getSinglePost(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes file extension
  const filePath = path.join(postsPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
