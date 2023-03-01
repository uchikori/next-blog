import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

/********************************************
 * スラッグを指定した記事データの取得
 ********************************************/
export const getPostBySlug = async (slug) => {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (error) {
    console.log("--getPostBySlug--");
    console.log(error);
  }

  // const post = await client.get({
  //   endpoint: "blogs",
  //   queries: { filters: `slug[equals]${slug}` },
  // });
  // try {
  //   return post.contents[0];
  // } catch (error) {
  //   console.log("--getPostBySlug--");
  //   console.log(error);
  // }
};

/********************************************
 * 全ての記事のスラッグとタイトル取得
 ********************************************/
export const getAllSlugs = async () => {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { limit: 100, fields: "title,slug", orders: "-publishDate" },
    });
    return slugs.contents;
  } catch (error) {
    console.log("--getAllSlugs--");
    console.log(error);
  }
};
