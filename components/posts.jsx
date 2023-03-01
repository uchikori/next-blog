import styles from "@/styles/posts.module.css";
import Image from "next/image";
import Link from "next/link";
export const Posts = (props) => {
  const { posts } = props;
  console.log(posts[0].eyecatch.url);
  return (
    <div className={styles.gridContainer}>
      {posts.map((post) => {
        return (
          <article className={styles.eachPost} key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <figure>
                <Image
                  src={post.eyecatch.url}
                  alt=""
                  fill
                  sizes="(min-width: 1152px) 576px, 50vw"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL={post.eyecatch.blurDataURL}
                />
              </figure>
            </Link>
          </article>
        );
      })}
    </div>
  );
};
