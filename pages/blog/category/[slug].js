import { Container } from "@/components/Container";
import { PostHeader } from "@/components/post-header";
import { Posts } from "@/components/posts";
import { getAllCategories, getAllPostsByCategory } from "@/lib/client";
import { eyecatchLocal } from "@/lib/Constant";
import { getPlaiceholder } from "plaiceholder";

export default function Category(props) {
  const { name, posts } = props;
  console.log(posts);
  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories();
  return {
    paths: allCategories.map(({ slug }) => {
      return `/blog/category/${slug}`;
    }),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const categorySlug = context.params.slug;
  const allCategories = await getAllCategories();

  const category = allCategories.find(({ slug }) => slug === categorySlug);

  const posts = await getAllPostsByCategory(category.id);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      name: category.name,
      posts: posts,
    },
  };
}
