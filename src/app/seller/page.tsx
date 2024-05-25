import HeaderSeller from "@/components/HeaderSeller";
import icon1 from "../../../public/img/seller-vector-1.png";
import icon2 from "../../../public/img/seller-vector-2.png";
import icon3 from "../../../public/img/seller-vector-3.png";
import image from "../../../public/img/image-8.png";
import topSeller from "../../../public/img/top-seller-1.png";
import dashboard from "../../../public/img/dashboard-icon.png";
import pesanan from "../../../public/img/pesanan.png";
import penghasilan from "../../../public/img/penghasilan.png";
import product from "../../../public/img/product.png";
import bestSeller from "../../../public/img/best-seller.png";
import topSellerIcon from "../../../public/img/top-seller.png";
import logout from "../../../public/img/logout.png";

export default function Seller() {
  return (
    <div className="bg-seller">
      <HeaderSeller />
      <div className="grid grid-cols-3 text-black">
        <div className="bg-white m-7 p-5 rounded-xl">
          <ul>
            <li className="font-semibold mb-3 bg-btn-login p-3 rounded-lg text-white flex"><img src={dashboard.src} alt="" /><a href="" className="ms-4">Dashboard</a></li>
            <li className="font-semibold mb-3 p-3 flex"><img src={pesanan.src} alt="" /><a href="" className="ms-4">Pesanan</a></li>
            <li className="font-semibold mb-3 p-3 flex"><img src={penghasilan.src} alt="" /><a href="" className="ms-4">Penghasilan</a></li>
            <li className="font-semibold mb-3 p-3 flex"><img src={product.src} alt="" /><a href="" className="ms-4">Product</a></li>
            <li className="font-semibold mb-3 p-3 flex"><img src={bestSeller.src} alt="" /><a href="" className="ms-4">Best Seller</a></li>
            <li className="font-semibold mb-3 p-3 flex"><img src={topSellerIcon.src} alt="" /><a href="" className="ms-4">Top Seller</a></li>
            <li className="font-semibold mb-3 p-3 flex"><img src={logout.src} alt="" /><a href="" className="ms-4">Logout</a></li>
          </ul>
        </div>
        <div className="bg-white m-7 p-10 rounded-xl col-span-2">
          <h2 className="font-semibold">Toko AC Lengkap & Murah - Dapatkan Solusi AC Anda di Sini!</h2>
          <div className="grid grid-cols-3 justify-around gap-3 text-center font-semibold mt-14 mb-10">
            <div className="hover:border-blue-400 hover: border-2 duration-200 p-5 rounded-lg">
              <img src={icon1.src} alt="" className="mx-auto mb-3" />
              <p>Product</p>
            </div>
            <div className="hover:border-blue-400 hover: border-2 duration-200 p-5 rounded-lg">
              <img src={icon2.src} alt="" className="mx-auto mb-3" style={{ width: 21 }} />
              <p>Penghasilan</p>
            </div>
            <div className="hover:border-blue-400 hover: border-2 duration-200 p-5 rounded-lg">
              <img src={icon3.src} alt="" className="mx-auto mb-3" style={{ width: 35 }} />
              <p>Best Seller</p>
            </div>

          </div>

          <h3>Status Pesanan</h3>
          <div className="grid grid-cols-4 mt-4 justify-center mb-10">
            <p className="p-2 mx-1 border-2 border-blue-400 rounded-lg text-center text-blue-400 font-semibold"><span className="text-3xl">1</span><br />Perlu Dikirim</p>
            <p className="p-2 mx-1 border-2 border-green-400 rounded-lg text-center text-green-400 font-semibold"><span className="text-3xl">0</span><br />Dikirim</p>
            <p className="p-2 mx-1 border-2 border-red-400 rounded-lg text-center text-red-400 font-semibold"><span className="text-3xl">0</span><br />Pembatalan</p>
            <p className="p-2 mx-1 border-2 border-yellow-400 rounded-lg text-center text-yellow-400 font-semibold"><span className="text-3xl">1</span><br />Selesai</p>
          </div>

          <h3>Top Seller</h3>
          <div className="mt-4">
            {/* top seller item */}
            <ol>
              <li className="w-full mb-2">
                {/* item card */}
                <div className="flex items-center">
                  <img src={topSeller.src} alt="" style={{ width: 50, height: 50 }} />
                  <div className="flex border-2 p-1 w-full ms-5">
                    <img src={image.src} alt="" style={{ height: 50 }} className="mx-2" />
                    <div>
                      <h3 className="font-medium mb-2">DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)</h3>
                      <p className="text-blue-400">Rp 4.299.000</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-full mb-2">
                {/* item card */}
                <div className="flex items-center">
                  <img src={topSeller.src} alt="" style={{ width: 50, height: 50 }} />
                  <div className="flex border-2 p-1 w-full ms-5">
                    <img src={image.src} alt="" style={{ height: 50 }} className="mx-2" />
                    <div>
                      <h3 className="font-medium mb-2">DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)</h3>
                      <p className="text-blue-400">Rp 4.299.000</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-full mb-2">
                {/* item card */}
                <div className="flex items-center">
                  <img src={topSeller.src} alt="" style={{ width: 50, height: 50 }} />
                  <div className="flex border-2 p-1 w-full ms-5">
                    <img src={image.src} alt="" style={{ height: 50 }} className="mx-2" />
                    <div>
                      <h3 className="font-medium mb-2">DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)</h3>
                      <p className="text-blue-400">Rp 4.299.000</p>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
