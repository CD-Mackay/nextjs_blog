import PostHeader from "./postHeader";
import classes from "./postContent.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
// const  ReactMarkdown  = require('react-markdown');

export default function PostContent({ post }) {
  const imagePath = `/images/${post.slug}/${post.image}`;

  const customRenderers = {
    image(image) {
      return (
        <Image
          src={`/images/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
