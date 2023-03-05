import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Meta } from "@/components/Meta";

export default function Custom404() {
  return (
    <Container>
      <Meta pageTitle="404 - Page not found" />
      <Hero title="404" subtitle="ページが見つかりません" />
    </Container>
  );
}
