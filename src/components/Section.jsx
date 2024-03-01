import { Link } from "react-router-dom";

const Card = ({ image, title, subTitle, link }) => {
  return (
    <div className="bg-white rounded-tr-full">
      <div className=" ">
        <img
          src={image}
          alt="img"
          className="rounded-tr-[50px] w-full h-[350px] object-cover "
        />
        <div className="p-5 flex flex-col gap-1 ">
          <p className="text-green-700 font-semibold ">{title}</p>
          <p className="">{subTitle}</p>
          <Link to={link} className="text-green-600 font-bold mt-6">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <div className="bg-yellow-100 rounded-2xl p-4 w-full">
      <p>⭐⭐⭐⭐</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem,
        temporibus totam et hic doloremque dicta repellat placeat repellendus
        natus?
      </p>
      <div className="flex items-center gap-3 mt-5">
        <img
          src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
          alt=""
          className="w-8 h-8 rounded-full"
        />
        {/* userName */}
        <p className="capitalize">user name</p>
      </div>
    </div>
  );
};

function Section() {
  return (
    <div className="p-5 md:px-20 mx-auto bg-white overflow-x-hidden ">
      <div className="mx-auto max-w-7xl">
        {/* 1st section */}
        <section className="flex flex-col sm:flex-row justify-between gap-16">
          <div className="flex flex-col justify-between items-start h-full w-full gap-10">
            <div className="flex flex-col gap-4 items-start ">
              <h4 className="text-yellow-600">INSPIRING CHANGE.</h4>
              <h1 className="text-3xl sm:text-5xl font-bold capitalize text-green-700">
                Empowering futures through education
              </h1>
              <p className="">
                Join JanSeva Sankalp Foundation in fostering personal growth, women's empowerment
                and community welfare of a brighter future.
              </p>
            </div>

            <button className="font-semibold bg-green-500 text-white py-2 px-5 rounded-lg">
              Get Contribute
            </button>

            <div className="w-full flex justify-start ">
              <div className="pr-2 border-r-2 border-t-2 pt-2">
                <p className="font-bold text-green-700 ">25+</p>
                <p className="">Active Volunteer</p>
              </div>
              <div className="pr-4 pl-2 border-t-2 pt-2">
                <p className="font-bold text-green-700">20+</p>
                <p className="">Awareness Program</p>
              </div>
              <div className="border-l-2 pl-2 border-t-2 pt-2">
                <p className="font-bold text-green-700">4.9</p>
                <p className="">Ratings</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <img src="https://res.cloudinary.com/dwj3llorl/image/upload/v1703922043/Im_Engineer/ljlmyk0rrlnfylm7i70e.jpg" className="rounded-[20px] sm:rounded-r-[60px] object-contain"
              width={900}
              height={700}
            />
          </div>
        </section>

        {/* 2nd section */}
        <section className="bg-white my-16 flex flex-col-reverse sm:flex-row justify-center items-center py-16 gap-10">
          <div className="flex justify-center items-center ">
            <img
              src="https://res.cloudinary.com/dwj3llorl/image/upload/v1709304939/IMG_0678_ajxtgj.jpg"
              className="rounded-[20px] sm:rounded-l-[60px] object-contain"
              width={900}
              height={700}
            />
          </div>

          <div className="flex flex-col justify-between items-start h-full w-full gap-10">
            <div className="flex flex-col gap-4 items-start ">
              <h4 className="text-yellow-400">Our Story.</h4>
              <h2 className="text-2xl sm:text-3xl  font-bold capitalize text-green-700">
                Empowering Lives Through Education and Community Welfare
              </h2>
              <p>
                JanSeva Sankalp Foundation is a beacon of Hope Focusing on education Welfare and Women's empowerment.
                Our efforts enhance society's well-being and create positive change.
              </p>
            </div>

            <button className="font-semibold text-green-700 bg-white border-2 border-green-600 py-2 px-5 rounded-lg">
              Read More
            </button>
          </div>
        </section>

        {/* 3rd section */}
        <section className="my-16 flex flex-col justify-center items-center p-7 gap-10">
          <div className="">
            <h6 className="text-yellow-400">DIVERSE PROGRAMS.</h6>
            <h2 className="text-2xl sm:text-3xl  font-bold capitalize text-green-700">
              Exlore our transformational progress
            </h2>
          </div>
          {/* 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 ">
            <Card
              image="https://static.vecteezy.com/system/resources/previews/025/773/718/non_2x/ai-generated-portrait-of-a-fashion-man-photo.jpg"
              title="Education Empowerment"
              subTitle={
                "Transforming lives through quality education initiatives for all age groups"
              }
              link={"https://discord.com/"}
            />
            <Card
              image="https://eu-images.contentstack.com/v3/assets/bltcd74acc1d0a99f3a/blt7dc715fcd9324509/64b1609273ef23488c840278/exeter-ai.png"
              title="Women's Empowerment"
              subTitle={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
              }
              link={"google.com"}
            />
            <Card
              image="https://static.vecteezy.com/system/resources/previews/025/773/648/large_2x/ai-generated-portrait-of-a-fashion-man-photo.jpg"
              title="Community Welfare"
              subTitle={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
              }
              link={"google.com"}
            />
          </div>
        </section>

        {/* 4th section */}
        <section className="bg-white my-16 flex flex-col p-7 py-16 gap-10">
          <div className="">
            <h4 className="text-yellow-400">Lorem ipsum dolor sit amet.</h4>
            <h2 className="text-2xl sm:text-3xl mt-4 font-bold capitalize text-green-700">
              Exlore our transformational progress
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full ">
            <img
              src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="rounded-[60px] object-cover w-[350px] max-h-[500px]"
            />
            <img
              src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="rounded-[60px] object-contain w-[800px] max-h-[500px] "
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-10">
            <div className="">
              <p className="text-yellow-400">Lorem</p>
              <p className="text-xl font-bold capitalize text-green-700">
                transformational
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                maiores?
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">Lorem</p>
              <p className="text-xl font-bold capitalize text-green-700">
                transformational
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                maiores?
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">Lorem</p>
              <p className="text-xl font-bold capitalize text-green-700">
                transformational
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                maiores?
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">Lorem</p>
              <p className="text-xl font-bold capitalize text-green-700">
                transformational
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                maiores?
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">Lorem</p>
              <p className="text-xl font-bold capitalize text-green-700">
                transformational
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                maiores?
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">Lorem</p>
              <p className="text-xl font-bold capitalize text-green-700">
                transformational
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                maiores?
              </p>
            </div>
          </div>
        </section>

        {/* 5th section */}
        <section className="my-16 flex flex-col justify-center items-center p-7 gap-10">
          <div className="">
            <h4 className="text-yellow-400 sm:text-center ">
              Lorem ipsum dolor sit amet.
            </h4>
            <h2 className="text-2xl sm:text-3xl font-bold capitalize text-green-700  sm:text-center">
              Exlore our transformational progress
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full justify-between ">
            <img
              src="https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg"
              className="w-full sm:w-[350px] rounded-3xl"
            />
            <img
              src="https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg"
              className="w-full sm:w-[350px] rounded-3xl"
            />
            <img
              src="https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg"
              className="w-full sm:w-[350px] rounded-3xl"
            />
          </div>
        </section>

        {/* 5th section */}
        <section className="bg-white my-16 flex flex-col justify-center items-center p-7 py-16 gap-10">
          <div className="">
            <p className="text-yellow-400 sm:text-center ">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-2xl sm:text-3xl font-bold capitalize text-green-700  sm:text-center">
              Exlore our transformational progress
            </p>
          </div>
          {/* reviews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Section;
