import {
  Carousel,
  CustomFlowbiteTheme,
  FlowbiteCarouselTheme,
} from "flowbite-react";
import { headerImages } from "../data/headerImages";

export default function Header() {
  const customTheme: CustomFlowbiteTheme["carousel"] = {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
  };

  return (
    <header>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px] grayscale">
        <Carousel slideInterval={3000} theme={customTheme}>
          {headerImages.map((image, i) => (
            <img key={i} src={image.image} alt={`Header-foto-${i + 1}`} />
          ))}
        </Carousel>
      </div>
    </header>
  );
}
