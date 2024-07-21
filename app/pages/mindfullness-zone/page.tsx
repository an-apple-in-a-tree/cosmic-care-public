"use client";
import { useState } from "react";
import { fetchTips } from "../../api";

const Page: React.FC = () => {
    const [journalEntry, setJournalEntry] = useState<string>('');
    const [suggestions, setSuggestions] = useState<{ suggestion_name: string; suggestion_description: string }[]>([]);

    const handleFetchSuggestions = async () => {
        console.log("starting...");
        const fetchedSuggestions = await fetchTips(journalEntry);
        setSuggestions(JSON.parse(fetchedSuggestions));
    };

    return (
        <div>
            <h1>Mindfulness Zone</h1>

            <main>
      <textarea
          className = "p-4 h-1/2"
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="Enter your journal entry here"
          rows={20}
          cols={50}
      />
            <button onSubmit={handleFetchSuggestions}>Get Suggestions</button>
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>
                            <h3>{suggestion.suggestion_name}: </h3>
                            <p>{suggestion.suggestion_description}</p>
                        </li>
                    ))}
                </ul>
            )}
            </main>
        </div>
    );
};

export default Page;