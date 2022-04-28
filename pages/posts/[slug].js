import PostContent from "../../components/posts/post-detail/postContent";
import { getSinglePost, getPostsFiles } from "../../helpers/posts-util";

export default function SingleBlog(props) {
  const { post } = props;

  return <PostContent post={post} />;
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
