import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Meta } from "@/components/Meta";
import { Posts } from "@/components/posts";
import { getAllPosts } from "@/lib/client";
import { eyecatchLocal } from "@/lib/Constant";
import { getPlaiceholder } from "plaiceholder";

export default function Blog(props) {
  const { posts } = props;
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログ記事の一覧" />
      <Hero title="Blog" subtitle="Recent Posts" imageOn />
      <Posts posts={posts} />
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: { posts: posts },
  };
};
