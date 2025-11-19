import img from "../assets/about.svg";
import Accordion from "../layout/Accordion";

import Heading from "../layout/Heading";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14 fade-in">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="Biz" title2="Kimiz?" />
        <p className=" text-lightText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus.
        </p>
        <div className="w-full  px-2">
          <h2 className=" text-brightGreen mb-4 text-xl">
            <span className="text-black ">Sizlere Neler</span> Sunuyoruz
          </h2>
          <Accordion
            title="Yirmi Yıllık Tecrübe İle Özel Ders"
            answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus."
          />
          <Accordion
            title="İster Online İster Yüz Yüze Eğitim"
            answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus."
          />
          <Accordion
            title="Sınav Müfredatına Uygun İçerik"
            answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus."
          />
          <Accordion
            title="İlköğretimden KPSS'ye Kadar Her Seviye"
            answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
