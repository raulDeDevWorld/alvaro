'use client';

export default function Button({ styled, children }) {
    return (
        <h3 className={`w-full font-normal text-[16px] py-5 ${styled}`}>{children}</h3>
    )
}
