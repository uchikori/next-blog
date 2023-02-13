import Link from "next/link"
import styles from '@/styles/Logo.module.css';

export const Logo = (props) => {
  const { boxOn = false } = props
  console.log(boxOn);

  return (
    <>
      <Link href="/" className={boxOn ? styles.box : styles.basic}>
        CUBE
      </Link>
    </>
  )
}