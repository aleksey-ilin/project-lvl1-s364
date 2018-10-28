export const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
export const randomOperation = (operations) => {
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};
