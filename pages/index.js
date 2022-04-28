import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/featuredPosts";
import { getFeaturedPosts  } from "../helpers/posts-util";

export default function Home() {

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={dummy_posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
};
