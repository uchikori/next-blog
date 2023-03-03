import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Meta } from "@/components/Meta";
import { getAllPosts } from "@/lib/client";
import { Posts } from "@/components/posts";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "@/lib/Constant";
import { Pagination } from "@/components/Pagination";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { posts } = props;
  return (
    <>
      <Container>
        <Meta />
        <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
        <Posts posts={posts} />
        <Pagination nextUrl={"/blog"} nextText={"More Ppsts"} />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts(4);

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
