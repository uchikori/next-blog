import { Container } from "@/components/Container";
import { ConvertBody } from "@/components/convert-body";
import { PostHeader } from "@/components/post-header";
import { PostBody } from "@/components/PostBody";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/TwoColumn";
import { getAllSlugs, getPostBySlug } from "@/lib/client";
import Image from "next/image";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { PostCategories } from "@/components/post-categories";
import { extractText } from "@/lib/extract-text";
import { Meta } from "@/components/Meta";
import imgixLoader, { eyecatchLocal } from "@/lib/Constant";
import { getPlaiceholder } from "plaiceholder";
import { prevNextPost } from "@/lib/prev-next-post";
import { Pagination } from "@/components/Pagination";

export default function Post(props) {
  const {
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
    prevPost,
    nextPost,
  } = props;

  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
            loader={imgixLoader}
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            style={{ width: "100%", height: "auto" }}
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
            quality={80}
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
}
/********************************************
 * ???????????????????????????????????????
 ********************************************/
export const getStaticPaths = async () => {
  const allSlugs = await getAllSlugs(); //lib/client.jsx
  return {
    paths: allSlugs.map(({ slug }) => {
      return `/blog/${slug}`;
    }),
    fallback: false,
  };
};
/********************************************
 * getStaticPaths??????????????????context????????????
 * ?????????????????????????????????????????????
 ********************************************/
export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug); //lib/client.jsx

  //???????????????????????????????????????notFound
  if (!post) {
    return { notFound: true };
  } else {
    const description = extractText(post.content); //lib/extraxt-text.jsx
    const eyecatch = post.eyecatch ?? eyecatchLocal;

    const { base64 } = await getPlaiceholder(eyecatch.url);
    eyecatch.blurDataURL = base64;

    const allSlugs = await getAllSlugs(); //lib/client.jsx
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug); //lib/prev-next-post.jsx

    //?????????????????????????????????????????????????????????????????????????????????hiright.js????????????????????????
    const $ = load(post.content, null, false);
    $("pre code").each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass("hljs");
    });
    //html?????????????????????
    post.content = $.html();

    return {
      props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    };
  }
};

//Promise???????????????????????????
// export const getStaticProps = async () => {
//   const resPromise = client.get({
//     endpoint: "blogs",
//   });
//   console.log(resPromise);

//   resPromise
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   return {
//     props: {},
//   };
// };
//async await ??????????????????
// export const getStaticProps = async () => {
//   const resPromise = await client.get({
//     endpoint: "blogs",
//   });

//   try {
//     const res = await resPromise;
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }

//   return {
//     props: {},
//   };
// };
