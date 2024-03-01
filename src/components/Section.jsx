import { Link } from "react-router-dom";

const Card = ({ image, title, subTitle, link }) => {
  return (
    <div className="bg-white rounded-tr-full">
      <div className=" border rounded-tr-[50px]">
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

const Review = ({stars, msg, name, img}) => {
  return (
    <div className="bg-[#FFFEEA] rounded-2xl p-4 w-full border">
      <p>{stars}</p>
      <p>
        {msg}
      </p>
      <div className="flex items-center gap-3 mt-5">
        <img
          src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
          alt=""
          className="w-8 h-8 rounded-full"
        />
        {/* userName */}
        <p className="capitalize">{name}</p>
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
              image="https://img.freepik.com/free-vector/empowering-education_3446-308.jpg?t=st=1709319433~exp=1709323033~hmac=ed844009dca4e91114814e99e1ec91b7f7f517aa965739db51b98149dd212d9e&w=740"
              title="Education Empowerment"
              subTitle={
                "Transforming lives through quality education initiatives for all age groups"
              }
              link={"#"}
            />
            <Card
              image="https://img.freepik.com/free-photo/front-view-women-teaming-up-new-project_23-2148416410.jpg?w=1380&t=st=1709319487~exp=1709320087~hmac=b37246c630b3d91c08e29cfea72bdb59d8fe335b6d386dd0ba6249542328e5f9"
              title="Women's Empowerment"
              subTitle={
                "Empowering women through skill building and mentoring programs"
              }
              link={"#"}
            />
            <Card
              image="https://img.freepik.com/free-photo/high-angle-friends-showing-hands-camera_23-2148308690.jpg?t=st=1709319692~exp=1709323292~hmac=0cca8c328f1565930aae828f8488838e614860b37c0003faee108cfd9b13ffe4&w=1380"
              title="Community Welfare"
              subTitle={
                "Enhanching society through community driven welfare initiatives."
              }
              link={"#"}
            />
          </div>
        </section>

        {/* 4th section */}
        <section className="bg-white my-16 flex flex-col p-7 py-16 gap-10">
          <div className="">
            <h4 className="text-yellow-400">WHY SHOULD YOU SUPPORT US</h4>
            <h2 className="text-2xl sm:text-3xl mt-4 font-bold capitalize text-green-700">
              Discover Our Unique Value Propositions
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full ">
            <img
              src="https://img.freepik.com/free-photo/tourists-go-up-hill-sunrise_1150-19692.jpg?t=st=1709319753~exp=1709323353~hmac=2e2b8979edad305e9e899bf77fa7434352a27b07331acf4f83a2d9f12d543bc2&w=1380"
              className="rounded-[30px] md:rounded-[60px] object-cover w-[350px] max-h-[500px]"
            />
            <img
              src="https://img.freepik.com/free-photo/helping-hands-volunteer-support-community-service-graphic_53876-64955.jpg?t=st=1709319780~exp=1709323380~hmac=36810f2c3a23460a0734bcea2af4090b9402f9d0033ab5d3d9b88ee9a024da12&w=1380"
              className="rounded-[30px] md:rounded-[60px] object-contain w-[800px] max-h-[500px] "
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-10">
            <div className="">
              <p className="text-yellow-400">01</p>
              <p className="text-xl font-bold capitalize text-green-700">
              Personal Growth
              </p>
              <p className="">
                Empowering individuals to achieve personal growth and success in their endeavors.
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">01</p>
              <p className="text-xl font-bold capitalize text-green-700">
                Community Impact
              </p>
              <p className="">
                Driving positive change through community welfare initiatives and programs
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">03</p>
              <p className="text-xl font-bold capitalize text-green-700">
                Innovation in Education
              </p>
              <p className="">
                Offering innovative education programs that nurture skills and knowledge
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">04</p>
              <p className="text-xl font-bold capitalize text-green-700">
                Women's Empowerment
              </p>
              <p className="">
                Dedicated to fostering growth and oppurtunities for women in all aspects of life.
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">05</p>
              <p className="text-xl font-bold capitalize text-green-700">
                Inclusivity & Diversity
              </p>
              <p className="">
                Promoting inclusivity and diversity in all our programs and initiatives
              </p>
            </div>
            <div className="">
              <p className="text-yellow-400">06</p>
              <p className="text-xl font-bold capitalize text-green-700">
                Societal Well-bing
              </p>
              <p className="">
                Enhancing society's quality of life through our welfare efforts and programs.
              </p>
            </div>
          </div>
        </section>

        {/* 5th section */}
        <section className="my-16 flex flex-col justify-center items-center p-7 gap-10">
          <div className="">
            <h4 className="text-yellow-400 sm:text-center ">
              JOURNEY IN IMAGES
            </h4>
            <h2 className="text-2xl sm:text-3xl font-bold capitalize text-green-700  sm:text-center">
              Explore Our Impactful Journey Though Images
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full justify-between ">
            <img
              src="https://res.cloudinary.com/dwj3llorl/image/upload/v1709320168/workshop/WhatsApp_Image_2023-09-04_at_21.39.45_1_ucuqmo.jpg"
              className="w-full sm:w-[350px] rounded-3xl"
            />
            <img
              src="https://res.cloudinary.com/dwj3llorl/image/upload/v1709320167/workshop/WhatsApp_Image_2023-08-25_at_16.55.20_1_on7nwc.jpg"
              className="w-full sm:w-[350px] rounded-3xl"
            />
            <img
              src="https://res.cloudinary.com/dwj3llorl/image/upload/v1709320168/workshop/WhatsApp_Image_2023-09-04_at_21.20.54_1_mgyk6t.jpg"
              className="w-full sm:w-[350px] rounded-3xl"
            />
          </div>
        </section>

        {/* 5th section */}
        <section className="bg-white my-16 flex flex-col justify-center items-center p-7 py-16 gap-10">
          <div className="">
            <p className="text-yellow-400 sm:text-center ">
              Peoples Thoughts
            </p>
            <p className="text-2xl sm:text-3xl font-bold capitalize text-green-700  sm:text-center">
              What Our Supporters Say
            </p>
          </div>
          {/* reviews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <Review 
            stars="⭐⭐⭐⭐⭐" 
            msg="JanSeva Sankalp Foudation has transformed my life, providing education opportunities that I never thought possible" 
            name="Vaibhav" 
            img=""/>

            <Review 
            stars="⭐⭐⭐⭐⭐"
            msg="The commitment of the foundetion to women's empowerment is truly inspiring and has made a significant impact on many lives"
            name="Sima Thakur"
            img=""
            />

            <Review 
            stars="⭐⭐⭐⭐⭐"
            msg="JanSeva Sankalp Foundation's dedication to community welfare is commendable, creating a positive change in society"
            name="Nirmal"
            img=""/>

            <Review 
            stars="⭐⭐⭐⭐⭐"
            msg="Joing JanSeva Sankalp Foundation was profound decision, as i have withnessed firsthand the positive impact on society."
            name="Kunal Gajapure"
            img=""/>

            <Review 
            stars="⭐⭐⭐⭐⭐"
            msg="The inclusive environment created by the foundation has help nurture growth and opportunities for all, promoting diversity."
            name="Dipak Raut"
            img=""/>

            <Review 
            stars="⭐⭐⭐⭐⭐"
            msg="I applaud the foundation's efforts in driving innovation in education and skill development, truly making a difference"
            name="Saurabh Bisen"
            img=""/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Section;
