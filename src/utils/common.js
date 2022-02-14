export const truncate = (str) => {
  const maxLength = 50;
  return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str;
};

export const formatDate = (date) => {
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

  if (diffDays > 1) {
    return `${('0' + date.getDate()).slice(-2)}.${(
      '0' +
      (date.getMonth() + 1)
    ).slice(-2)}.${date.getFullYear()}`;
  }

  return `${('0' + date.getHours()).slice(-2)}:${(
    '0' + date.getMinutes()
  ).slice(-2)}`;
};
