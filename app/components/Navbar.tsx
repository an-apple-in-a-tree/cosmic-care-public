"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
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

export default function Navbar() {
    return (
        <NavigationMenu.Root className="bg-black text-white">
            <NavigationMenu.List className = {`${montserrat.className} text-xl w-1/2 align-center`}>
                <NavigationMenu.List className="text-center flex flex-row justify-between px-6 py-4">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="../pages/mindfullness-zone">
                            Mindfullness Zone
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="../pages/wiki">Wiki</NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}
