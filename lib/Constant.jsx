/*******************************************************************
 * サイトのデフォルトメタデータを用意
 *******************************************************************/
export const siteMeta = {
  siteTitle: "CUBE",
  siteDesc: "アウトプットしていくサイト",
  siteUrl: "https://next-blog-kohl-two.vercel.app",
  siteLang: "ja",
  siteLocale: "ja_JP",
  siteType: "website",
  siteIcon: "@/public/favicon.png",
};

/*******************************************************************
 * microCMS側でアイキャッチが無い場合のデフォルト画像
 *******************************************************************/
export const eyecatchLocal = {
  url: "https://images.microcms-assets.io/assets/846561520a4c478391bf0f4595b7300e/46b65e1c70b24c6e920a2b6dc43f0d2d/eyecatch.jpg",
  width: 1920,
  height: 1280,
};

/*******************************************************************
 * next export するための画像ローダーAPI
 *******************************************************************/
export default function imgixLoader({ src, width, quality }) {
  const url = new URL(`${src}`);
  const params = url.searchParams;
  params.set("auto", params.getAll("auto").join(",") || "format");
  params.set("fit", params.get("fit") || "max");
  params.set("w", params.get("w") || width.toString());
  params.set("q", quality.toString() || "50");
  return url.href;
}
