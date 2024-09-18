import React from 'react'

export default function ShortenList() {
    const links = JSON.parse(localStorage.getItem('shortenLinks')) || [];
    const handleCopyUrl = (e) => {
        const shortUrl = e.target.previousElementSibling.textContent;
        navigator.clipboard.writeText(shortUrl);
        e.target.style.backgroundColor = '#42385d';
        e.target.textContent = 'Copied!';
        setTimeout(() => {
            e.target.textContent = 'Copy';
            e.target.style.backgroundColor = '#26D0CB';
        }, 2000);
    };
    return (
        <>
            {links.map((link, index) => (
                <div key={index} className="w-11/12 mx-auto bg-white px-5 py-3 rounded-md space-y-3 md:space-y-0 flex flex-col text-left md:items-center  md:flex-row md:justify-between">
                    <div className="text-sm md:text-md font-semibold overflow-hidden">   {link.original_url}  </div>
                    <hr className='border border-slate-500 w-full md:hidden' />
                    <div className="space-y-2 md:space-y-0 flex flex-col md:flex-row text-left md:justify-between md:items-center gap-4">
                        {/* <span className="text-[#26D0CB] font-semibold text-sm"> {link.short_url} </span> */}
                        <a className="text-[#26D0CB] font-semibold text-sm" href={link.short_url} target='_blank'>{link.short_url}</a>
                        <button onClick={handleCopyUrl} className="text-sm text-white font-bold bg-[#26D0CB] hover:bg-[#97e4e4] px-7 py-2 rounded-md capitalize w-full">copy</button>
                    </div>
                </div>
            ))}
            {
                links.length === 0 &&
                <div className="w-11/12 mx-auto bg-white px-5 py-3 rounded-md space-y-3 md:space-y-0 flex flex-col text-left md:items-center  md:flex-row md:justify-between">
                    <div className="text-sm md:text-md font-semibold"> No links yet </div>
                </div>
            }
        </>
    )
}
