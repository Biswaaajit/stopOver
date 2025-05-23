import { dataProps } from "../Data/city";

function filterCountry(data: dataProps[]) {
  const mySet = new Set();
  const filterData = data.filter((dataObj) => {
    if (mySet.has(dataObj.country)) {
      return false;
    } else {
      mySet.add(dataObj.country);
      return true;
    }
  });
  return filterData;
}

export default filterCountry;
