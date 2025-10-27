import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/web-dev.svg";
import appImg from "../assets/App-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";

const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10 fade-in">
      <Heading title1="Kurs" title2="Seçeneklerimiz" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard img={webImg} title="Osmanlı Tarihi" />
        <CoursesCard img={appImg} title="İnkilap Tarihi" />
        <CoursesCard img={graphicImg} title="Vatandaşlık" />
        <CoursesCard img={digitalImg} title="Sosyal Bilgiler" />
      </div>
    </div>
  );
};

export default Courses;
