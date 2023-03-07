/* No. 1 */
const sortInput = (input) => {
  let output = [];
  let inserted;

  for (let i = 0, ii = input.length; i < ii; i++) {
    inserted = false;
    for (let j = 0, jj = output.length; j < jj; j++) {
      if (input[i] < output[j]) {
        inserted = true;
        output.splice(j, 0, input[i]);
        break;
      }
    }

    if (!inserted) output.push(input[i]);
  }
  return output;
};

module.exports = sortInput;
