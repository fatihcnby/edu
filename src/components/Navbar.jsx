/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleChange = () => {
    setMenu(!menu);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true); //
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50 transition-transform duration-300 fade-in ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row justify-between p-5 px-5 md:px-32">
        <div>
          <Link to="home" className="font-semibold text-2xl p-1 cursor-pointer">
            Kocaeli Özel Ders
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
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
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
          onClick={() => setMenu(false)}
        >
          Anasayfa
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
          onClick={() => setMenu(false)}
        >
          Hakkımızda
        </Link>
        <Link
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
          onClick={() => setMenu(false)}
        >
          Kurslar
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
          onClick={() => setMenu(false)}
        >
          Yorumlar
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
          onClick={() => setMenu(false)}
        >
          İletişim
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
