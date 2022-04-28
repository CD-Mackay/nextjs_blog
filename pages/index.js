import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/featuredPosts";
import { getFeaturedPosts  } from "../helpers/posts-util";

export default function Home(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
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
