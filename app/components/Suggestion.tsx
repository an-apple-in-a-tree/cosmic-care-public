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

const cinzel = Cinzel_Decorative({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-cinzel",
});

export default function Suggestion( name: string, description: string) {
    return (
        <div className="w-full h-1/4 rounded-lg">
            <div className="bg-black text-white">
                <h1 className = {`${montserrat.className} text-xl w-1/2 align-center`}>{name}</h1>
                <p className = {`${lato.className} text-lg w-1/2 align-center`}>{description}</p>
            </div>
        </div>
    );
}