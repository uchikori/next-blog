import Head from "next/head"

import { siteMeta } from "@/lib/Constant"
const { siteTitle, siteDesc,  siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;

export const Meta = (props) => {

  const { pageTitle, pageDesc } = props;

  //ページタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  //ページディスクリプション
  const desc = pageDesc ?? siteDesc

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={ title } />
      <meta name="description" content={ desc } />
      <meta property="og:description" content={ desc }/>
    </Head>
  )
}