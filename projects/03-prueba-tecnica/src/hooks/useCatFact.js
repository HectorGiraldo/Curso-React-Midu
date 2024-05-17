import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refresFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(refresFact, []);
  return { fact, refresFact };
};
