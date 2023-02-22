import { Container } from "@/components/Container";
import { useRouter } from "next/router";

export default function Page(props){

  const { category } = props;

  return (
    <Container>
      <h1>{ category }</h1>
    </Container>
    
  )
}

export async function getStaticPaths(){
  return {
    paths:[
      {params:{ slug: 'schedule' }},
      {params:{ slug: 'music' }},
    ],
    fallback: false,
  }
}
export async function getStaticProps(context){
// export async function getServerSideProps(context){
  const pageSlug = context.params.slug
  return {
    props: { category: pageSlug }
  }
}