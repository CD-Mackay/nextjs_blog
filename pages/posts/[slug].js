import PostContent from "../../components/posts/post-detail/postContent";
import { getSinglePost, getPostsFiles } from "../../helpers/posts-util";
import Head from "next/head";
import { Fragment } from "react";

export default function SingleBlog(props) {
  const { post } = props;

  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = getSinglePost(slug);
  return {
    props: {
      post,
    },
    revalidate: 720,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug },
    })),
    fallback: false,
  };
}
