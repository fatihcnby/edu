import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import img1 from "../assets/images/undraw_female-avatar_7t6k.svg";
import img2 from "../assets/images/undraw_pic-profile_nr49.svg";
import img3 from "../assets/images/undraw_profile-pic_fatv.svg";

const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5 fade-in">
      <Heading title1="Öğrenci" title2="Yorumları" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} />
        <ReviewCard img={img2} />
        <ReviewCard img={img3} />
      </div>
    </div>
  );
};

export default Reviews;
