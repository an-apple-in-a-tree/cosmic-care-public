"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Lato, Montserrat, Cinzel_Decorative } from "next/font/google";
import React from "react";
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

export default function Header() {
    return (
        <NavigationMenu.Root className="bg-white text-black">
            <NavigationMenu.List className={`${montserrat.className} flex flew-row text-xl w-1/2 align-center`}>
                <img src="/logo.png" alt="logo" className="w-20 h-20"/>
                <h1 className="py-6 px-4 text-2xl font-bold">Cosmic Care</h1>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}
