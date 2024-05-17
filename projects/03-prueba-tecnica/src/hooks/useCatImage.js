import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ", 3).join(" ");
    fetch(
      `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response;
        const url = `/cat/${_id}/says/${firstWord}`;
        setImageUrl(url);
      });
  }, [fact]);
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}
