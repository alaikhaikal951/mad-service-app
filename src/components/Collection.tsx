
"use client";

import { Carousel } from "flowbite-react";
import line from '../../public/img/line.png';
import image from '../../public/img/image-5.png';

export function Collection() {
  return (
    <div className="rounded-none text-black my-16">
      <div className="flex justify-center">
        <img src={line.src} className="mt-3" style={{ height: 2 }} alt="line" />
        <h3 className="mb-8 text-center text-blue-800 ml-3">Our Collection</h3>
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-center">What AC is best for you</h2>
      <Carousel className="h-96" slide={false}>
        <img src={image.src} style={{width: 800}} alt="..." />
        <img src={image.src} style={{width: 800}} alt="..." />
        <img src={image.src} style={{width: 800}} alt="..." />
        <img src={image.src} style={{width: 800}} alt="..." />
      </Carousel>
    </div>
  );
}
