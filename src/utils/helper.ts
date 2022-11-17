export const filteredName = (name: string) => {
  if (name.indexOf("_") > -1) return name.replace("_", " ");
  return name;
};
export const cityName = (name: string) => name.split(",")[0];

export const getDays = (from: string) => {
  let timeDifference = Date.now() - new Date(from).getTime();
  let dayMilliSeconds = 1000 * 60 * 60 * 24;
  let totalDays = Math.abs(timeDifference / dayMilliSeconds); // it returns negative value if start date < end date
  totalDays = Math.floor(totalDays); // to get complete days
  return totalDays;
};
