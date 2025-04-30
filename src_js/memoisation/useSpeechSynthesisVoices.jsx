import { useEffect, useState } from "react";

export default () => {
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState([]);
  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      setVoices(voices);
      setVoice(voices[0]);

      return voices.length > 0;
    };

    const success = loadVoices();
    if (success) return;
    speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  return [voices, voice, setVoice];
};
