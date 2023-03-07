const objectSearch = (input) => {
  if (typeof input !== "object") {
    return "Invalid Parameter Value";
  }
  let sum = 0;
  const isObject = (input2) => {
    if (typeof input2 === "object") {
      for (const key in input2) {
        if (typeof input2[key] === "number" && input2[key] % 2 === 0) {
          sum += input2[key];
        } else if (typeof input2[key] === "object") {
          isObject(input2[key]);
        }
      }
    }
    return sum;
  };
  return isObject(input);
};

module.exports = objectSearch;
