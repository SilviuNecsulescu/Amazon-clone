export const formatText = (value, chars) => {
  if (value.length > chars) return value.substring(0, chars) + "...";
  else return value;
};
