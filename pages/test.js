import { Container } from "@/components/Container";

export default function Test(props){
  console.log('test.js:', props);

  return (
    <Container>
      <h1>Test</h1>
    </Container>
    
  )
}

export async function getStaticProps(){
  return {
    props: {
      message: "データの流れ",
    }
  }
}