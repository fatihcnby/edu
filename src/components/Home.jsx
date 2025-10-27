import img from "../assets/hero.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10 fade-in">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
          Kocaeli Özel Ders
          <span className="text-brightGreen"> ile Başarı Çok Yakın</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          qui quo labore ut amet similique error, rerum sint omnis!Vero nihil
          qui quo labore ut amet similique error, rerum sint omnis!
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Bize Ulaşın" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
