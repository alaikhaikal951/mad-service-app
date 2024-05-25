
import logo from "../../public/img/MadServiceLogo.png";
import profile from "../../public/img/profile-icon.png";

export default function HeaderSeller() {
  return (
    <div className="w-full bg-white flex justify-between px-5 h-16 items-center drop-shadow-lg">
      <img src={logo.src} style={{ height: 40 }} alt="Mad Service Logo" />
      <img src={profile.src} style={{height: 40}} alt="" />
    </div>
  )
}
