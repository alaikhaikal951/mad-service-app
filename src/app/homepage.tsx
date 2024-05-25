"use client";

import { Header } from "@/components/Header";
import { Collection } from "@/components/Collection";
import { Button } from "flowbite-react";
import { FooterComp } from "@/components/Footer";
import image2 from "../../public/img/image-2.png";
import image1 from "../../public/img/image-1.png";
import image3 from "../../public/img/image-3.png";
import image4 from "../../public/img/image-4.png";
import image6 from "../../public/img/image-6.png";
import image7 from "../../public/img/image-7.png";
import line from "../../public/img/line.png";
import lineWhite from "../../public/img/line-white.png";
import icon1 from "../../public/img/icon-1.png";
import icon2 from "../../public/img/icon-2.png";
import icon3 from "../../public/img/icon-3.png";
import icon4 from "../../public/img/icon-4.png";
import icon5 from "../../public/img/icon-5.png";
import icon6 from "../../public/img/icon-6.png";
import icon7 from "../../public/img/icon-7.png";
import icon8 from "../../public/img/icon-8.png";

import Link from "next/link";

export default function Homepage() {
  return (
    <div className="bg-white">
      <Header />
      <div>
        <div className="h-screen pt-10" style={{ backgroundImage: `url(${image1.src})` }}>
          <div className="container mx-auto pt-40">
            <h1 className="text-5xl font-semibold mb-5">Air Conditioners <br /> Maintenance and Diagnostics</h1>
            <p className="mb-10">Apakah AC Anda tidak lagi dingin? Atau apakah AC Anda <br />
              mengeluarkan suara bising yang mengganggu? Jika ya, maka Anda<br />
              membutuhkan jasa servis AC terpercaya.</p>
            <div className="flex">
              <Link href="/login">
                <Button color="warning" className="me-3 w-32 text-black static">Log-in</Button>
              </Link>
              <Button color="light" className="mx-3 w-32 static">Sign-up</Button>
            </div>
          </div>
          {/* logo */}
          <img src={image2.src} style={{ width: 800 }} className="my-16 mx-auto" alt="" />
        </div>

        {/* welcome to mad service */}
        <div className="container mt-40 mb-20 mx-auto grid grid-cols-2 gap-4">
          <img src={image3.src} style={{ width: 400 }} alt="image 3" />
          <div>
            <div className="flex">
              <img src={line.src} className="mt-3" style={{ height: 2 }} alt="line" />
              <h3 className="text-blue-800 mb-11 ml-3">Welcome to MadService</h3>
            </div>
            <h2 className="text-blue-800 text-2xl font-medium mb-5">Servis AC cepat, tepat, dan hemat biaya</h2>
            <p className="text-black">Kami menyediakan layanan servis AC terbaik dengan teknisi yang profesional dan berpengalaman dalam menangani berbagai macam masalah AC.</p>
            <div className="grid grid-cols-2 gap-7">
              <div className="text-black text-center mt-9">
                <img src={icon1.src} className="mx-auto" alt="" />
                <h3 className="font-medium my-3">Professional Team</h3>
                <p>Kelompok teknisi yang memiliki keahlian khusus dalam perbaikan, perawatan, pemasangan sistem pendingin udara (AC)</p>
              </div>
              <div className="text-black text-center mt-9">
                <img src={icon2.src} className="mx-auto" alt="" />
                <h3 className="font-medium my-3">24/7 Availability</h3>
                <p>Siap memberikan layanan kapan pun dibutuhkan oleh pelanggan</p>
              </div>
            </div>
          </div>
        </div>

        {/* our service */}
        <div className="px-28 pt-14 pb-24" style={{ backgroundImage: `url(${image4.src})` }}>
          <div className="flex justify-center">
            <img src={lineWhite.src} className="mt-3" style={{ height: 2 }} alt="line" />
            <h3 className="mb-8 text-center ml-3">Our Service</h3>
          </div>
          <h2 className="text-2xl font-medium mb-14 text-center">What Services We Offer</h2>
          <div className="grid grid-cols-3 gap-4 justify-between">
            <div className="flex">
              <img src={icon3.src} style={{ width: 80 }} alt="" />
              <div className="mx-5">
                <h3 className="font-medium">Cuci AC</h3>
                <p className="text-sm">Membersihkan filter, evaporator, dan kondensor AC secara menyeluruh. </p>
              </div>
            </div>
            <div className="flex">
              <img src={icon4.src} style={{ width: 80 }} alt="" />
              <div className="mx-5">
                <h3 className="font-medium">Pasang AC</h3>
                <p className="text-sm">Memasang AC baru dengan tepat dan aman. </p>
              </div>
            </div>
            <div className="flex">
              <img src={icon5.src} style={{ width: 80 }} alt="" />
              <div className="mx-5">
                <h3 className="font-medium">Perbaikan AC</h3>
                <p className="text-sm">Mendiagnosis kerusakan AC secara akurat.</p>
              </div>
            </div>
            <div className="flex mt-5">
              <img src={icon6.src} style={{ width: 80 }} alt="" />
              <div className="mx-5">
                <h3 className="font-medium">Pengecekan</h3>
                <p className="text-sm">Memeriksa kondisi AC secara menyeluruh.</p>
              </div>
            </div>
            <div className="flex mt-5">
              <img src={icon7.src} style={{ width: 80 }} alt="" />
              <div className="mx-5">
                <h3 className="font-medium">Isi Freon</h3>
                <p className="text-sm">Menambahkan freon ke dalam AC sesuai dengan kebutuhan.</p>
              </div>
            </div>
            <div className="flex mt-5">
              <img src={icon8.src} style={{ width: 80 }} alt="" />
              <div className="mx-5">
                <h3 className="font-medium">Service Besar</h3>
                <p className="text-sm">Melakukan kombinasi dari beberapa layanan servis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Collection />

      {/* contact */}
      <div className="grid grid-cols-2 gap-9 py-12 px-28 justify-items-end" style={{ backgroundImage: `url(${image6.src})` }}>
        <div>
          <h2 className="font-semibold text-3xl">We are to help you. If you have any question, Let us now!</h2>
          <form action="" className="flex flex-col text-black">
            <input className="mt-10" type="text" placeholder="Name" />
            <input className="mt-5" type="email" placeholder="Email" />
            <textarea className="mt-5" name="" id="message" cols={30} rows={10} placeholder="Message"></textarea>
          </form>
          <Button color="warning" type="submit" className="mt-5">Sent Message</Button>
        </div>
        <img src={image7.src} style={{ height: 500 }} alt="" className="content-end" />
      </div>

      <FooterComp />
    </div>
  );
}
