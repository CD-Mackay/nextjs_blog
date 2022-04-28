import classes from "./allPosts.module.css";
import PostGrid from "./postGrid";

export default function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
