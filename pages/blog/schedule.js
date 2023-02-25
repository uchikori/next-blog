import { Container } from "@/components/Container";
import { getPostBySlug } from "@/lib/client";

export default function Schedule(props) {
  const { title, publish, content, eyecatch, categories } = props;
  console.log(props);

  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

export const getStaticProps = async () => {
  const slug = "schedule";

  const post = await getPostBySlug(slug);

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
