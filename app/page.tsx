"use client";
import React, {useState} from "react";
import {fetchTips} from "@/app/api";
import "./globals.css";
import Suggestion from "@/app/components/Suggestion";
import { Lato, Raleway, Poppins, Montserrat, Cinzel_Decorative } from "next/font/google";

const raleway = Raleway({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-raleway",
});


export default function Home() {
    const [journalEntry, setJournalEntry] = useState<string>('');
    const [suggestions, setSuggestions] = useState<{ suggestion_name: string; suggestion_description: string }[]>([]);
    console.log("started.");
    const handleFetchSuggestions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log("starting the tips...");
            const fetchedSuggestions = await fetchTips(journalEntry);
            setSuggestions(JSON.parse(fetchedSuggestions));
        } catch (error) {
            console.error("Error fetching summary:", error);
        }
    };

    return (
        <div className = {`${raleway.className} bg-white`}>
            <header className="w-full font-bold bg-header h-screen flex flex-col justify-center items-center">
                <h1 className="text-white text-center text-8xl">Welcome!</h1>
                <p className="open-sans text-white text-center text-xl">
                    Write a journal entry and receive expert mental health suggestions inspired by astronauts.
                </p>
            </header>
            <main className = "">
                <div className="flex flex-row justify-between items-center py-4 pl-24">
                    <div className="flex-1 w-1/2 text-left ">
                        <h1 className="text-4xl font-bold text-purpleGrape">About Cosmic Care</h1>
                        <p className= "py-4 text-deepBlue text-lg">Cosmic Care is a pioneering mental health app inspired by the resilience and mental fortitude
                            of astronauts. These space explorers face some of the most challenging and isolated
                            conditions imaginable, and their training programs provide valuable insights into
                            maintaining mental well-being under extreme stress. Our mission at Cosmic Care is to bring
                            these advanced mental health strategies to everyone, helping users navigate their mental
                            health journeys with science-backed tools and personalized support.</p>
                    </div>
                    <div className = "flex-2">
                        <img src="/astronaut.png" alt="Astronaut" className="w-full"/>
                    </div>
                </div>



                <section className="flex flex-col text-white">
                    <div className="flex flex-row py-16 bg-purpleGrape p-8 pl-24">
                        <div className="flex-1">
                            <img src="/journal.png" alt="Journal" className="w-full pr-12 "/>
                        </div>
                        <div className="flex-2 py-4">
                            <h2 className="text-3xl font-bold text-white pb-4">How It Works: </h2>
                            <ol className="list-decimal ml-6">
                                <li className="py-2 text-lg">
                                    <strong>Journal Your Thoughts:</strong> Write down your thoughts, feelings, and
                                    experiences
                                    in the journal feature.
                                </li>
                                <li className="py-2">
                                    <strong>AI Analysis:</strong> Our advanced AI analyzes your entries and provides
                                    personalized mental health tips based on your unique needs.
                                </li>
                                <li className="py-2">
                                    <strong>Implement Strategies:</strong> Use the suggested tips and techniques to
                                    improve
                                    your
                                    mental well-being.
                                </li>
                                <li className="py-2">
                                    <strong>Access Resources:</strong> Explore our library of mindfulness exercises,
                                    breathing
                                    techniques, and mental health resources for additional support.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="flex-2 bg-skyBlue pl-24">
                        <h2 className="text-3xl font-bold pt-12">Journal Entry</h2>
                        <p className="text-lg my-4">
                            Write out your thoughts to receive personalized mental health suggestions from
                            astronaut-inspired strategies!
                        </p>
                        <form
                            className="flex flex-col "
                            onSubmit={(e) => handleFetchSuggestions(e)}>
                        <textarea
                            className="p-4 h-1/2 w-3/4 rounded-xl text-deepBlue bg-white"
                            value={journalEntry}
                            onChange={(e) => setJournalEntry(e.target.value)}
                            placeholder="How are you feeling today?"
                            rows={20}
                            cols={50}
                        />
                            <button
                                className="my-8 w-1/6 text-lg text-white font-bold bg-purpleGrape p-4 rounded-lg"
                                type="submit">Get Suggestions
                            </button>
                        </form>
                    </div>
                </section>


                <section className="bg-white py-8 pl-24">
                    <div className="flex flex-col">
                        <h2 className="flex-1 text-3xl mx-4 font-bold text-deepBlue">Results</h2>
                        <p className="text-lg my-4 pl-4 text-deepBlue">
                            Based on your entry, here are 10 personalized suggestions to take care of your mental health:
                        </p>
                    </div>

                    {suggestions.length > 0 && (
                        <ul className="w-3/4 text-center m-4 gap-y-4">
                            {suggestions.map((suggestion, index) => (
                                <Suggestion
                                    key={index} name={suggestion.suggestion_name}
                                    description={suggestion.suggestion_description}/>
                            ))}
                        </ul>
                    )}
                </section>

            </main>
        </div>
    );
}

/*
Date: July 20, 2024

Today has been one of those days where I feel completely overwhelmed and exhausted. I woke up with a heavy heart, and it was hard to get out of bed. The thought of facing another day felt like a huge burden.

I find myself constantly battling feelings of sadness and hopelessness. It's like there's a cloud hanging over me that I can't seem to shake off. Even the things that used to bring me joy don't seem to matter anymore. I used to love painting, but now my brushes and canvases are just collecting dust.

At work, I struggle to focus and get things done. My productivity has plummeted, and I worry that my boss is starting to notice. The pressure to perform well is adding to my anxiety, and I often feel like I'm not good enough.

Socially, I've become more withdrawn. I don't have the energy to meet friends or engage in conversations. I avoid social gatherings because I don't want to bring others down with my negativity. The loneliness is suffocating, but reaching out to others feels impossible.

Physically, I'm always tired. No matter how much sleep I get, I wake up feeling drained. My appetite has changed too – some days I hardly eat anything, while other days I binge on junk food, hoping it will fill the void inside me.

I know I need help, but taking that first step seems so daunting. The thought of opening up to someone about my struggles is terrifying. What if they don't understand? What if they judge me?
 */