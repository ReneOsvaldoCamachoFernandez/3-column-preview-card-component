import Head from "next/head";
import Image from "next/image";
import SedanIco from "/public/images/icon-sedans.svg";
import SuvsIco from "/public/images/icon-suvs.svg";
import LuxuryIco from "/public/images/icon-luxury.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon-32x32.png" />
      </Head>
      <main className="h-full bg-[#F2F2F2] px-[24px] py-[88px] xl:px-[260px] xl:py-[170px]">
        <div className="flex flex-col xl:flex-row font-lex">
          <div className="w-full bg-[#E38826] p-[50px] ">
            <Image src={SedanIco} alt="ico" className="mb-11"></Image>
            <h1 className="text-[#F2F2F2] uppercase font-bold mb-[33px] xl:mb-[36px] text-4xl font-big">
              Sedans
            </h1>
            <p className="text-[#FFFFFF]/75 font-normal mb-[33px] xl:mb-[90px]">
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <button className="bg-[#F2F2F2] rounded-full font-bold text-[#E38826] px-8 py-3 hover:text-[#FFFFFF] hover:bg-[#E38826] hover:ring-2 hover:ring-[#FFFFFF]">
              Learn More
            </button>
          </div>
          <div className="w-full bg-[#006970] p-[50px] ">
            <Image src={SuvsIco} alt="ico" className="mb-11"></Image>
            <h1 className="text-[#F2F2F2] uppercase font-bold mb-[33px] xl:mb-[36px]  text-4xl font-big">
              SUVs
            </h1>
            <p className="text-[#FFFFFF]/75 font-normal mb-[33px] xl:mb-[90px]">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <button className="bg-[#F2F2F2] rounded-full font-bold text-[#006970] px-8 py-3 hover:text-[#FFFFFF] hover:bg-[#006970] hover:ring-2 hover:ring-[#FFFFFF]">
              Learn More
            </button>
          </div>
          <div className="w-full bg-[#004241] p-[50px] ">
            <Image src={LuxuryIco} alt="ico" className="mb-11"></Image>
            <h1 className="text-[#F2F2F2] uppercase font-bold mb-[33px] xl:mb-[36px]  text-4xl font-big">
              Luxury
            </h1>
            <p className="text-[#FFFFFF]/75 font-normal mb-[33px] xl:mb-[90px]">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <button className="bg-[#F2F2F2] rounded-full font-bold text-[#004241] px-8 py-3 hover:text-[#FFFFFF] hover:bg-[#004241] hover:ring-2 hover:ring-[#FFFFFF]">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
