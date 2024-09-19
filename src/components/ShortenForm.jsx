import { useState } from "react";
import ShortenList from "./ShortenList";

export default function ShortenForm() {
  const [errorMsg, setErrorMsg] = useState('');

  const handleShortenLink = async (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    if (!url) {
      setErrorMsg('Please add a link');
      e.target.url.classList.add(`border-2`, `border-red-400`, `placeholder:text-red-500`);
      return;
    }
    setErrorMsg(''); // clear error message

    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          url: url,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten the link');
      }

      const data = await response.json();
      console.log(data.result_url);
      const obj = {
        original_url: url,
        short_url: data.result_url,
      };
      // save to local storage
      const links = JSON.parse(localStorage.getItem('shortenLinks')) || [];
      links.push(obj);
      localStorage.setItem('shortenLinks', JSON.stringify(links));
      // smooth reload the page
      window.location.reload();
      e.target.reset();
    } catch (err) {
      console.error(err);
      setErrorMsg(`${err.message}. Please try again.`);
    }
  };

  return (
    <>
      <section id="shorten" 
      className="w-11/12 mx-auto bg-[url('/images/bg-shorten-mobile.svg')] bg-cover md:bg-[url('/images/bg-shorten-desktop.svg')] md:bg-cover py-4 pt-8 pb-6 rounded-md bg-[#3A3053] absolute -top-14 left-3 sm:left-10 md:left-11 lg:left-12 ">
        <form onSubmit={handleShortenLink} className="flex justify-start items-center md:justify-center flex-col md:flex-row px-4 gap-3 ">
          <input
            className="w-full md:w-9/12 focus:outline-none py-2 px-3 rounded-md "
            type="url"
            name="url"
            placeholder="Shorten a link here..."
          />
           <p className=" text-red-500 text-sm italic font-semibold  sm:hidden w-full">{errorMsg}</p>
          <button className="w-full md:w-fit text-md text-white font-bold bg-[#26D0CB] hover:bg-[#97e4e4] px-5 py-2 rounded-md" type="submit">
            Shorten It!
          </button>
        </form>
        <p className="text-red-500 text-sm italic font-semibold mt-2 px-5 md:px-6 lg:px-[5rem] hidden sm:block">{errorMsg}</p>
      </section>
      <div className="space-y-3 mt-20 md:mt-6 lg:mt-2">
        <ShortenList />
      </div>
    </>
  );
}
