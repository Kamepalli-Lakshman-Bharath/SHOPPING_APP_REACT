import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./carousal.module.css";

export default function MyCarousel() {
  return (
    <div className={styles.carousal}>
      <Carousel
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src="https://imgur.com/96OnkX7.png" alt="Image 1" />
        </div>
        <div>
          <img src="https://imgur.com/KtGxwnN.png" alt="Image 2" />
        </div>
        <div>
          <img src="https://imgur.com/sfjg9R8.png" alt="Image 3" />
        </div>
        <div>
          <img src="https://imgur.com/p0wdadG.png" alt="image 4" />
        </div>
      </Carousel>
    </div>
  );
}
