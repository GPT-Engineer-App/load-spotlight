import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Cat } from "lucide-react";

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to six times their length."
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">All About Cats</h1>
        <Cat className="mx-auto w-24 h-24 text-blue-500 mb-6" />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="A cute cat" 
          className="mx-auto object-cover w-full h-[300px] rounded-lg mb-6"
        />
        <p className="text-xl text-gray-700 mb-6">{catFacts[factIndex]}</p>
        <Button onClick={nextFact} className="bg-blue-500 hover:bg-blue-600 text-white">
          Next Cat Fact
        </Button>
      </div>
    </div>
  );
};

export default Index;
