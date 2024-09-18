import React from 'react'

export default function Button({ children, className }) {
    return (
        <button className={`text-sm text-white font-bold bg-[#26D0CB] hover:bg-[#97e4e4] px-5 py-2 rounded-full capitalize ${className}`}> {children} </button>
    )
}
