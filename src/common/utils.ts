export const makeDelay = (timeDelay: number, fn: () => void): void => {
  setTimeout(() => {
    fn();
  }, timeDelay);
};
