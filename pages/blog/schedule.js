import { Container } from "@/components/Container";
import { ConvertBody } from "@/components/convert-body";
import { PostHeader } from "@/components/post-header";
import { PostBody } from "@/components/PostBody";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/TwoColumn";
import { getPostBySlug } from "@/lib/client";
import Image from "next/image";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { Contact } from "@/components/Contact";

export default function Schedule(props) {
  const { title, publish, content, eyecatch, categories } = props;
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="1152px, (max-width: 1152px) 100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  );
}

export const getStaticProps = async () => {
  const slug = "schedule";
  const post = await getPostBySlug(slug);

  const $ = load(post.content, null, false);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  post.content = $.html();

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
};

//Promise構文で記述した場合
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
//async await を使った場合
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
