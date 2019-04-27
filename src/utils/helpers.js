//returns age<number> when passed date of birth<string> as parameter
export const getAge = date => {
  const now = new Date().getFullYear();
  const dob = new Date(date).getFullYear();
  const age = now - dob;
  return age;
};

//filters list<array> and returns a new list
export const onFilter = (key, list, value) => {
  const _key = key.toLowerCase();
  return list.filter(item => `${item[_key].toLowerCase()}`.includes(value));
};

//changes the URL depending on the forting or filter applied
export const onResolveUrl = (qs, search, name, value, push, pathname) => {
  let url;
  const { filter = "", filterBy = "", sort = "" } = qs.parse(search, {
    ignoreQueryPrefix: true
  });
  if (name === "filter" && value.filterBy && sort) {
    url = `${pathname}?filter=${value.filter}&filterBy=${
      value.filterBy
    }&sort=${sort}`;
  } else if (name === "sort" && value && filter) {
    url = `${pathname}?filter=${filter}&filterBy=${filterBy}&sort=${value}`;
  } else if (name === "sort" && value) {
    url = `${pathname}?sort=${value}`;
  } else if (name === "filter" && value.filterBy) {
    url = `${pathname}?filter=${value.filter}&filterBy=${value.filterBy}`;
  } else if (sort && !value && name === "filter") {
    url = `${pathname}?sort=${sort}`;
  } else if (filterBy && name === "sort" && !value) {
    url = `${pathname}?filter=${filter}&filterBy=${filterBy}`;
  } else {
    url = `${pathname}`;
  }
  push(url);
};

//strips string of whitespaces and replace them with _
export const onStrip = value => {
  return value
    .toLowerCase()
    .split(" ")
    .join("_");
};

//unstrips string of _ and replace them with whitespaces
export const unStrip = value => {
  return value
    .toLowerCase()
    .split("_")
    .join(" ");
};

//sort array in descending order
export const onSort = (key, list) => {
  const data = list.sort((a, b) => {
    if (a[key] > b[key]) {
      return -1;
    }
    if (a[key] < b[key]) {
      return 1;
    }
    return 0;
  });
  return data;
};

//handles filter and sort and returns a new array
export const handleFilterAndSort = (filterBy, sort, filter, list) => {
  if (filterBy && sort) {
    const data_filtered = onFilter(filter, list, filterBy);
    const data = onSort(sort, data_filtered);
    return data;
  } else if (filterBy) {
    const data = onFilter(filter, list, filterBy);
    return data;
  } else if (sort) {
    const data = onSort(sort, list);
    return data;
  } else {
    return list;
  }
};
