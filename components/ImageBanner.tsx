import styles from "./ImageBanner.module.css";
import Image from "next/image";

interface ImageBannerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImageBanner({ src, alt, width, height }: ImageBannerProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <Image 
            src={src} 
            alt={alt} 
            width={width}
            height={height}
            className={styles.bannerImage}
          />
        </div>
      </div>
    </section>
  );
}
