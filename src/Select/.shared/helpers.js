export const classNames = (...params) =>
  params
    .map(param => {
      if (Array.isArray(param)) {
        return param[1] ? param[0] : "";
      } else return param;
    })
    .join(" ");

export const filterKeys = (item = {}, params = []) => {
  const result = {};
  Object.keys(item).forEach(key => {
    if (params.includes(key)) return;
    result[key] = item[key];
  });
  return result;
};

export const isComponent = element => typeof element === "function";