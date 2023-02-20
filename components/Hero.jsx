import styles from '@/styles/Hero.module.css';
import Image from 'next/image';
import cube from '@/images/cube.jpg';

export const Hero = (props) => {
  const { title, subtitle, imageOn = false } = props;

  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {imageOn && 
        <figure>
          <Image
          src={ cube }
          alt=""
          // sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
          sizes="576px, (max-width: 1152px) 50vw, (max-width: 768px) 100vw"
          style={{ width: '100%', height: 'auto' }}
          priority
          placeholder='blur'
          />
        </figure>}
      </div>
    </>
  )
}