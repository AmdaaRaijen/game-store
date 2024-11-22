"use client";
import React, { useState, useEffect, useRef, UIEvent } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-slide effect
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (sliderRef.current) {
        const nextIndex = (currentIndex + 1) % images.length;
        sliderRef.current.scrollTo({
          left: nextIndex * sliderRef.current.clientWidth,
          behavior: "smooth",
        });
        setCurrentIndex(nextIndex);
      }
    }, 10000);

    return () => clearInterval(autoSlideInterval);
  }, [images, currentIndex]);

  // Handle scroll and snap
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const scrollLeft = e.currentTarget.scrollLeft;
      const slideWidth = sliderRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div
      ref={sliderRef}
      onScroll={handleScroll}
      className="w-1/2 flex overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar rounded-md border border-zinc-200 shadow-sm"
      style={{
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {images.map((src, index) => (
        <div key={index} className="flex-shrink-0 w-full snap-center h-full">
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            width={1000}
            height={600}
            className="w-full rounded-md object-fill"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
