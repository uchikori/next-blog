import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Meta } from '@/components/Meta'

const inter = Inter({ subsets: ['latin'] })

export default function Home(){
  return (
    <>
      <Container>
        
        <Meta />
        <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      </Container>
    </>
  )
} 