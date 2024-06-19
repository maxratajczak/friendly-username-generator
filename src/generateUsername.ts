import { adjectives } from "./adjectives";
import { animals } from "./animals";

export type Options = {
  useHyphen?: boolean;
  useRandomNumber?: boolean;
};

export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItemFromArray = (array: Array<any>) =>
  getRandomNumber(0, array.length - 1);

const defaultOptions: Options = {
  useHyphen: true,
  useRandomNumber: true,
};

export const generateUsername = (options: Options = {}) => {
  const newOptions = { ...defaultOptions, ...options };

  const randomAdjective: string =
    adjectives[getRandomItemFromArray(adjectives)];
  const randomAnimal: string = animals[getRandomItemFromArray(animals)];

  const randomNumber1: number = getRandomNumber(1, 9);
  const randomNumber2: number = getRandomNumber(1, 9);
  const randomNumber3: number = getRandomNumber(1, 9);
  const randomNumber4: number = getRandomNumber(1, 9);

  let username = `${randomAdjective}-${randomAnimal}-${randomNumber1}${randomNumber2}${randomNumber3}${randomNumber4}`;

  if (!newOptions.useHyphen) {
    username = username.replace(/[-]/g, "");
  }

  if (!newOptions.useRandomNumber) {
    username = username.replace(/[0-9]/g, "");
  }

  return username;
};
