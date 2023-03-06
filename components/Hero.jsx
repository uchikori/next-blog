import imgixLoader from "@/lib/Constant";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";
// import cube from "@/images/cube.jpg";

const cube = {
  src: "https://images.microcms-assets.io/assets/846561520a4c478391bf0f4595b7300e/55243e68183a469db18e4293db367963/cube.jpg",
  height: "1300",
  width: "1500",
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ANetn6Crq4mbj4ZwWgDYz7Q5eGipwK3/+dYATUc5AA0AIyUcYlNDmFMRq46eii0AAAAASUVORK5CYII=",
};

export const Hero = (props) => {
  const { title, subtitle, imageOn = false } = props;

  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {imageOn && (
          <figure>
            <Image
              loader={imgixLoader}
              src={cube.src}
              alt=""
              width={cube.width}
              height={cube.height}
              sizes="576px, (max-width: 1152px) 50vw, (max-width: 768px) 100vw"
              style={{ width: "100%", height: "auto" }}
              priority
              quality={80}
              blurDataURL={cube.blurDataURL}
              placeholder="blur"
            />
          </figure>
        )}
      </div>
    </>
  );
};
