export const snakeToCamel = (inputString: string): string => {
  const words = inputString.split("-");

  const camelWords = [
    words[0],
    ...words
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)),
  ];

  const camelString = camelWords.join("");

  return camelString;
};
