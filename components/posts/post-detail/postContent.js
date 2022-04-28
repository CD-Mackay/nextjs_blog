import PostHeader from "./postHeader";
import classes from "./postContent.module.css";
import ReactMarkdown from 'react-markdown';
// const  ReactMarkdown  = require('react-markdown');

export default function PostContent({post}) {


  const imagePath = `/images/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
