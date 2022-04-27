import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      {/* <FeaturedPosts /> */}
    </Fragment>
  );
}
