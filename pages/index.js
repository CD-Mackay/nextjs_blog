import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/featuredPosts";

export default function Home() {
const dummy_posts = [
  {
    title: "A Crickets Tale",
    image: "ongo-gablogian.jpg",
    excerpt: "The tale of Cricket",
    date: "2021-03-03",
    slug: "a-crickets-tale"
  },
  {
    title: "The Gang Learns NextJS",
    image: "ongo-gablogian.jpg",
    excerpt: "The tale of Cricket",
    date: "2021-03-03",
    slug: "the-gang-learns-nextjs"
  },
  {
    title: "Mac and Charlie: Web Devs",
    image: "ongo-gablogian.jpg",
    excerpt: "The tale of Cricket",
    date: "2021-03-03",
    slug: "mac-and-charlie-web-devs"
  },
  {
    title: "Franks Back in Tech",
    image: "ongo-gablogian.jpg",
    excerpt: "The tale of Cricket",
    date: "2021-03-03",
    slug: "franks-back-in-tech"
  },

]
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={dummy_posts} />
    </Fragment>
  );
}
