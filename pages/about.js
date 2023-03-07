import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PostBody } from "@/components/PostBody";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/TwoColumn";
import Image from "next/image";
// import eyecatch from "@/images/about.jpg";
import { Meta } from "@/components/Meta";
import { Accordion } from "@/components/accordion";
import imgixLoader from "@/lib/Constant";
import { BlueFrame } from "@/components/BlueFrame";

const eyecatch = {
  src: "https://images.microcms-assets.io/assets/846561520a4c478391bf0f4595b7300e/ffe615d22c48481c9de9c43a8cf2d631/about.jpg",
  height: "960",
  width: "1920",
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ANetn6Crq4mbj4ZwWgDYz7Q5eGipwK3/+dYATUc5AA0AIyUcYlNDmFMRq46eii0AAAAASUVORK5CYII=",
};

export default function About() {
  // const [width, setWidth] = useState(0);
  // console.log(width);
  // useEffect(() => {
  //   setWidth(window.devicePixelRatio);
  // }, [width]);

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
          loader={imgixLoader}
          src={eyecatch.src}
          alt=""
          width={1152}
          height={576}
          sizes="(min-width: 1152px) 1152px, 100vw"
          style={{ width: "100%", height: "auto" }}
          priority
          quality={80}
          placeholder="blur"
          blurDataURL={eyecatch.blurDataURL}
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
            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってざまざまな課題を設定していきながら、プログラムを作って行きます。
              </p>
            </Accordion>
            <Accordion heading="古代語の解読について">
              <p>
                古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や思考方法、それらを読み取ってこそ古代の世界観が理解できます。
              </p>
            </Accordion>
            <Accordion heading="公開リポジトリの活用について">
              <p>
                公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。{" "}
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

About.getLayout = function getLayout(page) {
  return <BlueFrame>{page}</BlueFrame>;
};
