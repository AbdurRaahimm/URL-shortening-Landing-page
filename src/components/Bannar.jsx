import Button from "./Button";
import BannarImg from "/images/illustration-working.svg";

export default function Bannar() {
  const goShortenForm = () => {
    document.getElementById('shorten').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="flex justify-between items-center px-2 md:pl-16  flex-col-reverse md:flex-col-reverse lg:flex-row gap-1 pb-24">
      <div className="space-y-5">
        <h1 className="leading-9 sm:leading-[1rem] lg:leading-tight text-[#35323e] text-4xl font-extrabold  md:text-6xl lg:text-7xl text-center  md:text-center lg:text-left">More than just shorter links</h1>
        <p className="text-sm md:text-2xl lg:text-md text-center md:text-center lg:text-left text-[hsl(0,0%,75%)] ">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
       <div  onClick={goShortenForm} className="flex justify-center md:flex md:justify-center lg:flex lg:justify-start"> <Button  >Get Started</Button></div>
      </div>
      <img className="sm:w-6/6 md:w-9/12 lg:w-6/12 " src={BannarImg} loading="lazy" alt="Bannar" />
      {/* <div className="bg-[url('/images/illustration-working.svg')] bg-cover"></div> */}
    </section>
  )
}
