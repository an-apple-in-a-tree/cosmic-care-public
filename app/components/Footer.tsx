"use client";
import { Lato, Montserrat, Cinzel_Decorative } from "next/font/google";
const lato = Lato({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-lato",
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-montserrat",
});


export default function Footer() {
    return (
        <div>
            <h1 className = {`${montserrat.className} p-4 text-center text-white bg-black align-center w-screen}`}>Create by Gloria Li @2024</h1>
        </div>
    );
}