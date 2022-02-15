export const truncate = (str) => {
  const maxLength = 50;
  return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str;
};

export const formatDate = (date) => {
  if (date === 'now') return date;

  const messageDate = new Date(date);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - messageDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

  if (diffDays > 1) {
    return `${('0' + messageDate.getDate()).slice(-2)}.${(
      '0' +
      (messageDate.getMonth() + 1)
    ).slice(-2)}.${messageDate.getFullYear()}`;
  }

  return `${('0' + messageDate.getHours()).slice(-2)}:${(
    '0' + messageDate.getMinutes()
  ).slice(-2)}`;
};
