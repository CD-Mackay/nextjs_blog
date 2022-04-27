import classes from "./postGrid.module.css";

export default function PostGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => {
        return <PostItem />;
      })}
    </ul>
  );
}
