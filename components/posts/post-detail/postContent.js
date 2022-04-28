import PostHeader from "./postHeader";
import classes from './postContent.module.css';

export default function PostContent() {

  const dummy_post = 
    {
      title: "A Crickets Tale",
      image: "ongo-gablogian.jpg",
      date: "2021-03-03",
      slug: "a-crickets-tale",
      content: "# This is the tale of Cricket"
    };

    const imagePath = `/images/${dummy_post.image}`
  
return (
  <article className={classes.content}>
    <PostHeader title={dummy_post.title} image={imagePath} />
    {dummy_post.content}
  </article>
)
};