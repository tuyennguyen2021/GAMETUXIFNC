export const checkWin = (player, com) => {
  if (
    (player === 0 && com === 2) ||
    (player === 1 && com === 0) ||
    (player === 2 && com === 1)
  ) {
    return 1;
  }
  return 0;
};
