export const searchArray = (array: any[], search: string) => {
  return array.filter((item) => {
    return item.name?.toUpperCase().match(search.toUpperCase());
  });
};
