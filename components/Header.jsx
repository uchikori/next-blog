import { Logo } from "./Logo"
import { Nav } from "./Nav"
import styles from '@/styles/Header.module.css';
import { Container } from "./Container";

export const Header = () => {
  return (
    <>
      <header>
        <Container large>
          <div className={styles.flexContainer}>
            <Logo boxOn />
            <Nav />
          </div>
        </Container>
      </header>
    </>
  )
}