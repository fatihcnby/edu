import img from "../assets/contact.svg";
import Heading from "../layout/Heading";
import Button from "../layout/Button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10 fade-in">
      <Heading title1="Bize" title2="Ulaşın" />

      <div className="flex flex-col md:flex-row justify-between w-full">
        <form
          className="w-full md:w-2/5 space-y-5 pt-20"
          action="https://formspree.io/f/xjkpgwvd"
          method="POST"
        >
          <div className="flex flex-col">
            <label htmlFor="userName">Adınız Soyadınız</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              required
              placeholder="ad ve soyadınızı yazın"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="userEmail">E-Posta Adresiniz</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              required
              placeholder="e-posta adresi girin"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="userMessage">Mesajınız</label>
            <textarea
              className="py-4 px-3 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all resize-none h-40 md:h-48"
              name="userMessage"
              id="userMessage"
              placeholder="mesajınızı yazın"
              required
            />
          </div>

          <input
            type="hidden"
            name="_redirect"
            value="https://seninsiten.com/tesekkurler.html"
          />

          <div className="flex flex-row justify-center !mb-16">
            <Button className="" title="Mesaj Gönder" />
          </div>
        </form>

        <div className="w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
