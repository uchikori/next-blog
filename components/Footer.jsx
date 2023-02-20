import { Logo } from "./Logo";
import styles from '@/styles/Footer.module.css';
import { Container } from "./Container";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <>
      <footer className={styles.wrapper}>
        <Container>
          <div className={styles.flexContainer}>
            <Logo />
            <Social />
          </div>
        </Container>
      </footer>
    </>
  )
}