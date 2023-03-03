import { Container } from "@/components/Container";
import { Meta } from "@/components/Meta";
import { PostHeader } from "@/components/post-header";
import { Posts } from "@/components/posts";
import { getAllCategories, getAllPostsByCategory } from "@/lib/client";
import { eyecatchLocal } from "@/lib/Constant";
import { getPlaiceholder } from "plaiceholder";

export default function Category(props) {
  const { name, posts } = props;
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
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
  //1:getStaticPathsからパラメータ取得
  const categorySlug = context.params.slug;

  //2:全カテゴリーを取得
  const allCategories = await getAllCategories();

  //3:全カテゴリーのスラッグとパラメータのスラッグ名称が等しい場合にcategoryにオブジェクトを格納
  const category = allCategories.find(({ slug }) => slug === categorySlug);

  //4:3で取得したオブジェクトの中からidを取得して渡し記事を取得する
  const posts = await getAllPostsByCategory(category.id);

  //5:取得した記事の中に「eyecatch」が設定されていない場合はローカルのアイキャッチを読み込ませる
  //ベース64でエンコードした画像を渡す
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
