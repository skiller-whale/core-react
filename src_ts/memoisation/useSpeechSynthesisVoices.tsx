import { useEffect, useState } from "react";

export default () => {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

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

  return [voices, voice, setVoice] as const;
};
