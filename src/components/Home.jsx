import img from "../assets/hero.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Home = () => {
  const [offsetValue, setOffsetValue] = useState(-100);

  // Responsive offset ayarı
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOffsetValue(-100); // Desktop navbar yüksekliği
      } else {
        setOffsetValue(-120); // Mobil navbar yüksekliği ve biraz ekstra boşluk
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-[120px] md:mt-[100px] fade-in"
    >
      <div className="md:w-2/4 text-center md:text-left">
        <h2 className="text-5xl font-semibold leading-tight">
          Kocaeli Özel Ders
          <span className="text-brightGreen"> ile Başarı Çok Yakın</span>
        </h2>
        <p className="text-lightText mt-5 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          qui quo labore ut amet similique error, rerum sint omnis! Vero nihil
          qui quo labore ut amet similique error, rerum sint omnis!
        </p>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={offsetValue}
        >
          <Button title="Bize Ulaşın" />
        </Link>
      </div>

      <div className="w-full md:w-2/4 mt-10 md:mt-0">
        <img src={img} alt="hero" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Home;
