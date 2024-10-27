import Navbar from "../components/NavBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProdutCategoryImages from "../data/categary.carosel";
import AccordionItem from "../components/Accordion";
import faqData from "../data/FAQ";
function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 0,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-[#00453e] to-[#e7e9e8] px-12 py-3 ">
        <Navbar />
        {/* hero section */}
        <img
          className="rounded-lg my-10"
          src="https://www.plug.tech/cdn/shop/files/Android_Web_Banners-Desktop.webp?v=1715913002&%3Bwidth=2000&em-format=avif&em-width=2000"
        />
      </div>
      <div className="bg-[#f2f2f2] px-12">
        <h1>View All Tech</h1>
        <Carousel responsive={responsive}>
          {ProdutCategoryImages.map((img) => (
            <div className="w-[200px] p-4">
              <img className="rounded-lg" src={img.url} />
            </div>
          ))}
        </Carousel>

        <div className="relative rounded-xl my-10">
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <div className="absolute w-full text-white  flex flex-col items-center gap-5 justify-center">
            <h1 className="font-Exo2 text-5xl font-black text-center mt-20">
              Welcome to Plug®
            </h1>
            <p className="font-bold text-xl text-white">
              Your connection to reliable, Certified Pre-Owned devices.
            </p>
            <p className="text-md max-w-[750px] text-center">
              We strongly believe the only difference between purchasing a new
              or Certified Pre-Owned device should be price. That’s why we
              rigorously hand test, clean, sanitize, and certify every device we
              sell. You’ll have peace of mind knowing your purchase is backed by
              our unmatched 1-year warranty and 30-day love-it-or-return-it
              guarantee.
            </p>
            <button className="py-3 px-6 bg-[#f18721] font-bold rounded-full">
              Learn More
            </button>
          </div>
          <img
            className="w-full h-[450px] object-cover rounded-xl"
            src="https://www.plug.tech/cdn/shop/files/Untitled_design_41.webp?v=1728314059&%3Bwidth=1800&em-format=avif&em-width=1800"
          />
        </div>

        <h1 className="text-5xl font-black font-Exo2 text-green">
          Featured deals
        </h1>
        <Carousel responsive={responsive}>
          <div>Deal</div>
          <div>Deal</div>
          <div>Deal</div>
          <div>Deal</div>
          <div>Deal</div>
        </Carousel>

        <div className="relative text-white flex mt-20">
          <div className="absolute w-full h-full text-white  flex  items-center justify-center">
            <h1 className=" font-Exo2 text-5xl font-black text-center max-w-[800px]">
              Plug has saved 1,000,000+ pounds of e-waste from reaching the
              landfills.
            </h1>
          </div>

          <img
            className="h-[400px] w-full object-cover rounded-xl"
            src="https://www.plug.tech/cdn/shop/files/earth-desktop.webp?v=1709567365&%3Bwidth=1600&em-format=avif&em-width=1600"
          />
        </div>
        <div className="flex mt-20 justify-between">
          <h1 className=" font-Exo2 text-4xl  font-black text-green">
            Frequently Asked Questions
          </h1>
          <div className="bg-[#e7e9e8] p-10 rounded-lg font-Exo2 text-green gap-10  max-w-[700px]">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                title={faq.title}
                content={faq.content}
              />
            ))}
          </div>
        </div>

        <h1 className="text-5xl font-black font-Exo2 text-green my-10">
          Plug Press Room
        </h1>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <img
              className="rounded-lg"
              src="https://www.plug.tech/cdn/shop/articles/Copy_of_Blog_Cover_Photo_3_1.png?v=1728318666&%3Bwidth=600&em-format=avif&em-width=600"
            />
            <h2 className="text-3xl font-black font-Exo2 text-green">
              Plug Celebrates Three Years of Revolutionizing the Tech Industry
            </h2>
            <p>
              St. Louis, MO – October 6, 2024 – Plug, a leading provider of
              Certified Pre-Owned technology, is proud to celebrate its third
              anniversary. In just three years, Plug has grown rapidly, offering
              hig...
            </p>
            <p>Oct 7, 2024</p>
          </div>
          <div className="flex flex-col gap-3">
            <img
              className="rounded-lg"
              src="https://www.plug.tech/cdn/shop/articles/Copy_of_Blog_Cover_Photo_3_1.png?v=1728318666&%3Bwidth=600&em-format=avif&em-width=600"
            />
            <h2 className="text-3xl font-black font-Exo2 text-green">
              Plug Celebrates Three Years of Revolutionizing the Tech Industry
            </h2>
            <p>
              St. Louis, MO – October 6, 2024 – Plug, a leading provider of
              Certified Pre-Owned technology, is proud to celebrate its third
              anniversary. In just three years, Plug has grown rapidly, offering
              hig...
            </p>
            <p>Oct 7, 2024</p>
          </div>
          <div className="flex flex-col gap-2">
            <img
              className="rounded-lg"
              src="https://www.plug.tech/cdn/shop/articles/Copy_of_Blog_Cover_Photo_3_1.png?v=1728318666&%3Bwidth=600&em-format=avif&em-width=600"
            />
            <h2 className="text-3xl font-black font-Exo2 text-green">
              Plug Celebrates Three Years of Revolutionizing the Tech Industry
            </h2>
            <p>
              St. Louis, MO – October 6, 2024 – Plug, a leading provider of
              Certified Pre-Owned technology, is proud to celebrate its third
              anniversary. In just three years, Plug has grown rapidly, offering
              hig...
            </p>
            <p>Oct 7, 2024</p>
          </div>
        </div>
        <div className="flex justify-around my-20 gap-20 text-green">
          <div className="flex flex-col items-center gap-3">
            <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20role%3D%22presentation%22%20fill%3D%22none%22%20focusable%3D%22false%22%20stroke-width%3D%222%22%20width%3D%2236%22%20height%3D%2236%22%20class%3D%22sm%3Ahidden%20icon%20icon-picto-happy%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2022.714a10.714%2010.714%200%201%200%200-21.429%2010.714%2010.714%200%200%200%200%2021.43v0Z%22%20fill%3D%22currentColor%22%20fill-opacity%3D%22.12%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M6.56%2013.647c.823%202.968%204.122%204.782%207.09%203.957%201.811-.66%203.296-2.143%203.79-3.957M16.368%209.528a.412.412%200%201%201%200-.825M16.368%209.528a.412.412%200%200%200%200-.825M7.632%209.528a.412.412%200%201%201%200-.825M7.632%209.528a.412.412%200%201%200%200-.825%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E" />
            <h1 className="text-xl font-black font-Exo2 text-green">
              Worry-Free Exeperience
            </h1>
            <p className="text-center">
              Shop with confidence. Plug provides an unmatched 12-month warranty
              on all purchases.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20role%3D%22presentation%22%20fill%3D%22none%22%20focusable%3D%22false%22%20stroke-width%3D%222%22%20width%3D%2236%22%20height%3D%2236%22%20class%3D%22sm%3Ahidden%20icon%20icon-picto-happy%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2022.714a10.714%2010.714%200%201%200%200-21.429%2010.714%2010.714%200%200%200%200%2021.43v0Z%22%20fill%3D%22currentColor%22%20fill-opacity%3D%22.12%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M6.56%2013.647c.823%202.968%204.122%204.782%207.09%203.957%201.811-.66%203.296-2.143%203.79-3.957M16.368%209.528a.412.412%200%201%201%200-.825M16.368%209.528a.412.412%200%200%200%200-.825M7.632%209.528a.412.412%200%201%201%200-.825M7.632%209.528a.412.412%200%201%200%200-.825%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E" />
            <h1 className="text-xl font-black font-Exo2 text-green">
              Worry-Free Exeperience
            </h1>
            <p className="text-center">
              Shop with confidence. Plug provides an unmatched 12-month warranty
              on all purchases.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20role%3D%22presentation%22%20fill%3D%22none%22%20focusable%3D%22false%22%20stroke-width%3D%222%22%20width%3D%2236%22%20height%3D%2236%22%20class%3D%22sm%3Ahidden%20icon%20icon-picto-happy%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2022.714a10.714%2010.714%200%201%200%200-21.429%2010.714%2010.714%200%200%200%200%2021.43v0Z%22%20fill%3D%22currentColor%22%20fill-opacity%3D%22.12%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M6.56%2013.647c.823%202.968%204.122%204.782%207.09%203.957%201.811-.66%203.296-2.143%203.79-3.957M16.368%209.528a.412.412%200%201%201%200-.825M16.368%209.528a.412.412%200%200%200%200-.825M7.632%209.528a.412.412%200%201%201%200-.825M7.632%209.528a.412.412%200%201%200%200-.825%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E" />
            <h1 className="text-xl font-black font-Exo2 text-green">
              Worry-Free Exeperience
            </h1>
            <p className="text-center">
              Shop with confidence. Plug provides an unmatched 12-month warranty
              on all purchases.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20role%3D%22presentation%22%20fill%3D%22none%22%20focusable%3D%22false%22%20stroke-width%3D%222%22%20width%3D%2236%22%20height%3D%2236%22%20class%3D%22sm%3Ahidden%20icon%20icon-picto-happy%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2022.714a10.714%2010.714%200%201%200%200-21.429%2010.714%2010.714%200%200%200%200%2021.43v0Z%22%20fill%3D%22currentColor%22%20fill-opacity%3D%22.12%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M6.56%2013.647c.823%202.968%204.122%204.782%207.09%203.957%201.811-.66%203.296-2.143%203.79-3.957M16.368%209.528a.412.412%200%201%201%200-.825M16.368%209.528a.412.412%200%200%200%200-.825M7.632%209.528a.412.412%200%201%201%200-.825M7.632%209.528a.412.412%200%201%200%200-.825%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E" />
            <h1 className="text-xl font-black font-Exo2 text-green">
              Worry-Free Exeperience
            </h1>
            <p className="text-center">
              Shop with confidence. Plug provides an unmatched 12-month warranty
              on all purchases.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-white px-12 py-3 text-[#7c8e8b] ">
        <div className="flex gap-20">
          <div className="max-w-[400px]">
            <h1 className="text-green font-bold">About Plug</h1>
            <p>
              We are a consumer electronics provider that connects people to
              reliable, Certified Pre-Owned Devices. We make it affordable and
              easy for you to get the most out of your personal technology
              purchases. Plug® is certified to R2v3, the most widely adopted
              global standard and certification program in the industry for the
              Responsible Recycling of electronics.
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <h1 className="text-green font-bold">Quick Link</h1>
            <p className="hover:text-green">Download our App</p>
            <p className="hover:text-green">Apple</p>
            <p className="hover:text-green">About Us</p>
            <p className="hover:text-green">Sale</p>
            <p className="hover:text-green">iPhones</p>
            <p className="hover:text-green">Androids</p>
            <p className="hover:text-green">Headphones</p>
            <p className="hover:text-green">Policies</p>
          </div>
          <div className=" flex flex-col gap-10">
            <h1 className="text-green font-Exo2 text-3xl font-black">
              Subscribe to keep up with our great deals.
            </h1>
            <input
              placeholder="Email"
              className="p-5 w-full rounded-lg border border-gray-200"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
