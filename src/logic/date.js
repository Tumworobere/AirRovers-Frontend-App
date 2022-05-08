const formatNum = (num) => num.toString().padStart(2, '0');

const formatDate = (date) => {
  const formattedDate = [
    date.getFullYear().toString(),
    formatNum(date.getMonth() + 1).toString(),
    formatNum(date.getDate()).toString(),
  ];

  return formattedDate.join('-');
};

const DATE = new Date();
export const TODAY = formatDate(DATE);
export const MONTHLATER = formatDate(new Date(DATE.setMonth(DATE.getMonth() + 1)));

export const dateDifference = (start, end, price) => {
  const DIVISOR = 1000 * 3600 * 24;
  const startDate = new Date(start);
  const endDate = new Date(end);

  const difference = Math.ceil((endDate.getTime() - startDate.getTime()) / DIVISOR);
  return (difference + 1) * price;
};
const formatNum = (num) => num.toString().padStart(2, '0');

const formatDate = (date) => {
  const formattedDate = [
    date.getFullYear().toString(),
    formatNum(date.getMonth() + 1).toString(),
    formatNum(date.getDate()).toString(),
  ];

  return formattedDate.join('-');
};

const DATE = new Date();
export const TODAY = formatDate(DATE);
export const MONTHLATER = formatDate(new Date(DATE.setMonth(DATE.getMonth() + 1)));

export const dateDifference = (start, end, price) => {
  const DIVISOR = 1000 * 3600 * 24;
  const startDate = new Date(start);
  const endDate = new Date(end);

  const difference = Math.ceil((endDate.getTime() - startDate.getTime()) / DIVISOR);
  return (difference + 1) * price;
};
