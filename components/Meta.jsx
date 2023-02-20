import Head from "next/head"
import { siteMeta } from "@/lib/Constant"
import { useRouter } from "next/router";
//汎用OGPイメージ
import siteImg from '@/images/ogp.jpg';

const { siteTitle, siteDesc,  siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;

export const Meta = (props) => {

  const { pageTitle, pageDesc, pageImg, pageImgW, pageImgH } = props;
  //ページタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  //ページディスクリプション
  const desc = pageDesc ?? siteDesc
  //ページのURL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`
  //ページのOGP
  const img = pageImg || siteImg.src;
  const imgW = pageImgW || siteImg.width;
  const imgH = pageImgH || siteImg.height;
  const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <link rel="icon" href={ siteIcon } />
      <link rel="apple-touch-icon" href={ siteIcon } />
      <meta property="og:title" content={ title } />
      <meta name="description" content={ desc } />
      <meta property="og:description" content={ desc }/>
      <meta property="og:type" content={ siteType }/>
      <meta property="og:url" content={ url } />
      <meta property="og:image" content={ imgUrl }/>
      <meta property="og:image:width" content={ imgW }/>
      <meta property="og:image:height" content={ imgH }/>
      <meta name="teitter:card" content="summary_large_image" />
    </Head>
  )
}