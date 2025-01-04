import { Carousel } from "flowbite-react";
import { headerImages } from "../data/headerImages";

export default function Header() {
  return (
    <header>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
        <Carousel slideInterval={3000}>
          {headerImages.map((image, i) => (
            <img key={i} src={image.image} alt={`Header-foto-${i + 1}`} />
          ))}
        </Carousel>
      </div>
    </header>
  );
}
