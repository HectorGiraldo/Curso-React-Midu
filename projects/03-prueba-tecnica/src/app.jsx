import "./app.css";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

export function App() {
  const { fact, refresFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refresFact();
  };
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Cambiar fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first trhee words for ${fact}`}
        />
      )}
    </main>
  );
}
