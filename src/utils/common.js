export const truncate = (str) => {
  const maxLength = 50;
  return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str;
};
