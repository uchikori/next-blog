import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"

export default function About(){
  return (
    <Container>
      <Hero title="About" subtitle="About development activities" />
      <p>
        Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
      </p>
    </Container>
  )
}