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
export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { limit: limit, fields: "title,slug", orders: "-publishDate" },
    });
    return slugs.contents;
  } catch (error) {
    console.log("--getAllSlugs--");
    console.log(error);
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        limit: limit,
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
      },
    });
    return posts.contents;
  } catch (error) {
    console.log("--getAllPosts--");
    console.log(error);
  }
}
