import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/featuredPosts";
import { getFeaturedPosts  } from "../helpers/posts-util";
import Head from 'next/head';

export default function Home(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>The ARt Blog</title>
        <meta name="description" content="Ongos art blog" />
      </Head>
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
