export const dateToDateString = date => {
  const yearString = date.getFullYear().toString().padStart(4, '0');
  const monthString = (date.getMonth() + 1).toString().padStart(2, '0');
  const dateString = date.getDate().toString().padStart(2, '0');

  return `${yearString}-${monthString}-${dateString}`
};
