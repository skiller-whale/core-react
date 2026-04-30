import { useCallback, useEffect, useMemo } from "react";

const BestFriend = ({ animal }) => {
  const utterance = new SpeechSynthesisUtterance(
    `Hello ${animal.name}, you're my best friend`,
  );

  const sayHello = () => {
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(
      `Hello ${animal.name}, you're my best friend`,
    );
    speechSynthesis.speak(utterance);
  }, [animal]);

  return (
    <div className="flex flex-col p-6 border-2 mb-6">
      <div className="flex justify-between items-baseline">
        <div>
          My best friend is {animal.name} the {animal.species}.
        </div>
        <button
          className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-800"
          onClick={sayHello}
        >
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default BestFriend;
