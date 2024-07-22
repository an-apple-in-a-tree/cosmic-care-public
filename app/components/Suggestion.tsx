"use client";
import '@radix-ui/themes/styles.css';


interface SuggestionProps {
    name: string;
    description: string;
}

const Suggestion: React.FC<SuggestionProps> = ({ name, description }) => {
    return (
        <div className="card bg-vibrantPink my-4">
            <div className="card-body text-white">
                <h2 className="card-title text-sunnyYellow">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Suggestion;
