import { Contact } from "@/components/Contact"
import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { PostBody } from "@/components/POstBody"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/TwoColumn"
import Image from "next/image"
import eyecatch from "@/images/about.jpg";
import { useState, useEffect } from "react"
import { Meta } from "@/components/Meta"


export default function About(){

  const [width, setWidth] = useState(0);
  console.log(width);
  useEffect(() => {
    setWidth(window.devicePixelRatio);
  }, [width]);
  
  return (
    <Container>

      <Meta 
      pageTitle="アバウト"
      pageDesc="About development activities"
      pageImg={eyecatch.src}
      pageImgW={eyecatch.width}
      pageImgH={eyecatch.height}
      />

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
        src={ eyecatch }
        alt=""
        width={1152}
        height={576}
        sizes="(min-width: 1152px) 1152px, 100vw"
        style={{ width: '100%', height:'auto'}}
        priority
        placeholder="blur"
        />
      </figure>

      <TwoColumn>

        <TwoColumnMain>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>

      </TwoColumn>

    </Container>
  )
}