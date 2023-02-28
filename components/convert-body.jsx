import parse from "html-react-parser";
import Image from "next/image";
import { load } from "cheerio";
import hljs from "highlight.js";

export const ConvertBody = (props) => {
  const { contentHTML } = props;
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes="768px, (max-width: 768px) 100vw"
            style={{ width: "100%", height: "auto" }}
          />
        );
      }
      // if (node.name === "pre") {
      //   const $ = load(contentHTML);
      //   $("pre code").each((_, elm) => {
      //     const result = hljs.highlightAuto($("pre code").text());
      //     $(elm).html(result.value);
      //     $(elm).addClass("hljs");
      //   });
      //   return <pre>{$(elm)}</pre>;
      // }
    },
  });
  return <>{contentReact}</>;
};
