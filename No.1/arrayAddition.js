const arrayAddition = (input, selectedInput) => {
  if (typeof input !== "object" || typeof selectedInput !== "number") {
    return "Invalid Parameter Values";
  }
  const inputLength = input.length;
  let max = -Infinity;
  for (let i = 0; i < inputLength; i++) {
    let subArray = 0;
    for (let j = i; j < selectedInput + i; j++) {
      if (input[j]) {
        subArray += input[j];
      }
    }
    if (subArray > max) {
      max = subArray;
    }
  }
  return max;
};

module.exports = arrayAddition;
