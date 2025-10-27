import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className="fade-in flex flex-col md:flex-row justify-between bg-white border-2 border-lightText rounded-lg md:px-32 p-5 m-2">
        <div className="flex flex-col md:flex-row gap-5 font-medium p-1 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Anasayfa
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Hakkımızda
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Kurslar
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Yorumlar
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            İletişim
          </Link>
        </div>

        <div className=" mt-4 md:mt-0 fade-in">
          <Link
            to="home"
            className=" font-semibold text-2xl p-1 cursor-pointer fade-in"
          >
            Kocaeli Özel Ders
          </Link>
        </div>
      </div>

      <div className=" text-center mt-4">
        <p>
          @copyright
          <span className="text-brightGreen px-2">F.C.</span>| All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
