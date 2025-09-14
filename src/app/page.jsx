"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" h-auto">
      <section className="w-full relative md:px-12 px-4 md:mt-12 mt-6 md:pb-60">
        <div className=" relative">
          {/* Background Image 1 and header */}
          <div className="flex items-center text-center flex-col space-y-2 ">
            <h1 className="mb-4 xl:mb-8 md:mb-6">
              Surebloom International School
            </h1>
            <h2 className="text-3xl md:text-6xl">
              {" "}
              Committed to{" "}
              <span className="block mt-2">Academic Excellence</span>{" "}
            </h2>
            {/* Image One */}
            <Image
              src={"/main-1.jpg"}
              width={1400}
              height={1000}
              alt="Student"
              className="mt-8"
            ></Image>
          </div>
          <div className="md:flex md:flex-row mx-auto md:max-w-4xl xl:max-w-5xl xl:space-x-110 md:space-x-50 px-4 md:mt-10 xl:mt-15 mt-6">
            <h3 className="whitespace-nowrap sm:font-normal text-xl md:text-base font-bold xl:font-normal">
              ABOUT SUREBLOOM
            </h3>
            <div>
              <h3 className="md:mt-0 mt-2">
                Surebloom International School provides a nurturing environment
                where students and pupils achieve both academic excellence and
                holistic growth. Since our establishment in September 2011, we
                have focused on developing well-rounded learners by addressing
                the cognitive, affective, and psychomotor domains of education.
              </h3>
              <div className="flex space-x-8 md:mt-8 md:mb-8 mt-6 mb-6">
                <div>
                  <h3 className="text-5xl text-[#3697B8]">15k+</h3>
                  <p className="text-neutral-600 text-sm">Years Operation</p>
                </div>

                <div>
                  <h3 className="text-5xl  text-[#3697B8]">3k</h3>
                  <p className="text-neutral-600 text-sm">Admissions</p>
                </div>
                <div>
                  <h3 className="text-5xl  text-[#3697B8]">20+ </h3>
                  <p className="text-neutral-600 text-sm">Awards</p>
                </div>
              </div>
              <div>
                <button className="bg-[#3697B8] hover:bg-cyan-800 text-white px-4 py-2 rounded flex items-center transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="xl:p-40 md:p-20 p-12 max-w-7xl  bg-[#DBF2E6] rounded-2xl  mx-auto flex items-center justify-center mt-20">
            <Image
              src={"/main-2.jpg"}
              width={800}
              height={600}
              alt="Student"
              className=" h-auto w-full object-contain "
            ></Image>
          </div>
          <div className="md:flex md:flex-row mx-auto md:max-w-4xl xl:max-w-5xl xl:space-x-110 md:space-x-50  px-4 md:mt-25 xl:mt-35 mt-15">
            <h3 className="text-2xl md:text-6xl">
              One School, <span className="md:block mt-2">Many Stories</span>{" "}
            </h3>
          </div>
          <hr className="md:flex md:flex-row mx-auto md:max-w-4xl xl:max-w-5xl xl:space-x-110 md:space-x-50 px-4 md:mt-10 xl:mt-15 mt-6" />

          <div className="md:flex md:flex-row mx-auto md:max-w-4xl xl:max-w-5xl xl:space-x-110 md:space-x-50 px-4 md:mt-10 xl:mt-15 mt-6">
            <h3 className="whitespace-nowrap sm:font-normal text-xl md:text-base font-bold xl:font-normal ">
              PRESCHOOL - A LEVELS
            </h3>
            <div>
              <h3 className="md:mt-0 mt-2">
                At Surebloom International School, every learner’s journey
                begins with us and grows through each stage. From daycare and
                preschool to high school and A Levels, we provide a continuous
                path of learning and development. Our students progress within a
                supportive environment that nurtures curiosity, builds
                character, and prepares them for future success.
              </h3>
            </div>
          </div>
          <div className="mx-auto md:max-w-4xl xl:max-w-5xl px-4 ">
            <div className="md:grid md:grid-cols-2 gap-16 mt-10 md:mt-16">
              <div className=" h-80 md:h-100 lg:h-150 bg-[#DBF2E6] rounded-xl relative md:mb-0 mb-20">
                <Image
                  src={"/main-3.jpg"}
                  width={800}
                  height={600}
                  alt="Student"
                  className=" h-full w-full object-cover rounded-xl "
                ></Image>
                <Link
                  href={"/"}
                  className=" flex justify-center  mt-2 hover:text-cyan-500 font-bold transition-all "
                >
                  {" "}
                  Early ChildhoodPreschool to Pre-Kindergarten (Ages 3 - 4)
                </Link>
              </div>

              <div className=" h-80 md:h-100 lg:h-150 bg-[#DBF2E6] rounded-lg relative md:translate-y-40 md:mb-0 mb-20">
                <Image
                  src={"/main-4.jpg"}
                  width={800}
                  height={600}
                  alt="Student"
                  className=" h-full w-full object-cover rounded-xl "
                ></Image>
                <Link
                  href={"/"}
                  className=" flex justify-center  mt-2 hover:text-cyan-500 font-bold transition-all "
                >
                  Primary SchoolKindergarten to 5th Grade (Ages 5 - 10)
                </Link>
              </div>

              <div className=" h-80 md:h-100 lg:h-150 bg-[#DBF2E6] rounded-lg relative md:mb-0 mb-20">
                <Image
                  src={"/main-5.jpg"}
                  width={800}
                  height={600}
                  alt="Student"
                  className=" h-full w-full object-cover rounded-xl "
                ></Image>
                <Link
                  href={"/"}
                  className=" flex justify-center  mt-2 hover:text-cyan-500 font-bold transition-all "
                >
                  Early ChildhoodPreschool to Pre-Kindergarten (Ages 3 - 4)
                </Link>
              </div>

              <div className=" h-80 md:h-100 lg:h-150 bg-[#DBF2E6] rounded-lg relative md:translate-y-40 md:mb-0 mb-20">
                <Image
                  src={"/main-6.jpg"}
                  width={800}
                  height={600}
                  alt="Student"
                  className=" h-full w-full object-cover rounded-xl "
                ></Image>
                <Link
                  href={"/"}
                  className=" flex justify-center  mt-2 hover:text-cyan-500 font-bold transition-all "
                >
                  High School
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative md:px-12 px-4 md:mt-12 mt-6 ">
        <div className="md:flex md:flex-row mx-auto md:max-w-4xl xl:max-w-5xl xl:space-x-110 md:space-x-50  px-4 md:mt-10 xl:mt-15 mt-6">
          <h3 className="text-2xl md:text-6xl">
            Nurturing Mind
            <span className="md:block mt-2"> & Heart </span>{" "}
          </h3>
        </div>
        <hr className="md:flex md:flex-row mx-auto md:max-w-4xl xl:max-w-5xl xl:space-x-110 md:space-x-50 px-4 md:mt-10 xl:mt-15 mt-6" />

        <div className="md:flex md:flex-row mx-auto md:max-w-4xl xl:max-w-5xl xl:space-x-110 md:space-x-50 px-4 md:mt-10 xl:mt-15 mt-6">
          <h3 className="whitespace-nowrap sm:font-normal text-xl md:text-base font-bold xl:font-normal ">
            PRESCHOOL - A LEVELS
          </h3>
          <div>
            <h3 className="md:mt-0 mt-2">
              At Surebloom International School, every learner’s journey begins
              with us and grows through each stage. From daycare and preschool
              to high school and A Levels, we provide a continuous path of
              learning and development. Our students progress within a
              supportive environment that nurtures curiosity, builds character,
              and prepares them for future success.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
