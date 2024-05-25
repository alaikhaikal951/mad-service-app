
"use client";

import { Footer } from "flowbite-react";
import logo from '../../public/img/MadServiceLogo2.png';
import ig from '../../public/img/icon-ig.png';
import linkedin from '../../public/img/icon-linkedin.png';
import fb from '../../public/img/icon-fb.png';
import phone from '../../public/img/phone.png';
import email from '../../public/img/email.png';

export function FooterComp() {
  return (
    <Footer className="bg-footer-color rounded-none" container>
      <div className="w-full text-center p-6">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between grid grid-cols-2">
          <div>
            <img src={logo.src} style={{ width: 250 }} alt="" />
            <p className="font-medium mt-4 ms-5">MadService melayani Anda kapanpun</p>
          </div>
          <div className="grid grid-cols-3 gap-20 text-left pt-10">
            <div>
              <h3 className="font-medium text-xl mb-5">Informasi</h3>
              <a href="#" className="text-sm">Detail Product</a>
            </div>
            <div >
              <h3 className="font-medium text-xl mb-5">Shop/Produk</h3>
              <a href="#" className="text-sm">Daftar Teknisi</a><br />
              <a href="#" className="text-sm">Daftar Peralatan</a><br />
              <a href="#" className="text-sm">Pemesanan</a><br />
              <a href="#" className="text-sm">Forum Diskusi</a>
            </div>
            <div>
              <h3 className="font-medium text-xl mb-5">Kontak Kami</h3>
              <div className="flex items-center">
                <img src={phone.src} style={{width: 20, height: 20}} alt="" />
                <p className="text-sm ms-2">+62 82275967281</p><br />
              </div>
              <div className="flex items-center mt-3">
                <img src={email.src} style={{width: 20, height: 15}} alt="" />
                <p className="text-sm ms-2">madserviceac@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex justify-between">
          <div className="flex">
            <img src={ig.src} alt="" className="mx-3"/>
            <img src={linkedin.src} alt="" className="mx-3"/>
            <img src={fb.src} alt="" className="mx-3"/>
          </div>
          <Footer.Copyright id="copyright" href="#" by="Mad Service. All right reserved" year={2024} />
        </div>
      </div>
    </Footer>
  );
}
