const Data = require("./Data/target1.json");

// console.log("Data[0]", Data[0].results);

function findCombinations(data) {
  let matrix = data?.results;
  let combinations = [];

  let finalobj = {
    token1: data?.token1,
    token2: data?.token2,
    token3: data?.token3,
    token1Decimal: data?.token1Decimal,
    token2Decimal: data?.token2Decimal,
    token3Decimal: data?.token3Decimal,
    results: combinations,
  };

  // Helper function to recursively generate combinations
  function generateCombination(
    currentCombination,
    rowIndex,
    selectedRows,
    selectedColumns
  ) {
    if (rowIndex === matrix.length) {
      // let sum = currentCombination.reduce(
      //   (partialSum, a) => Number(partialSum) + Number(a),
      //   0
      // );
      const containsEmptyString = currentCombination.includes("");
      if (!containsEmptyString) {
        // console.log("currentCombination", currentCombination);
        combinations.push(currentCombination.slice());
      }

      // if (sum == 3) {
      // combinations.push(currentCombination.slice());
      // }

      // Add the combination to the list
      return;
    }

    for (let i = 0; i < matrix[rowIndex].length; i++) {
      // Check if the current element is not from the same row or column where elements are already selected
      if (!selectedRows.has(rowIndex) && !selectedColumns.has(i)) {
        currentCombination.push(matrix[rowIndex][i]); // Add current element to the combination
        selectedRows.add(rowIndex); // Mark the row as selected
        selectedColumns.add(i); // Mark the column as selected

        generateCombination(
          currentCombination,
          rowIndex + 1,
          selectedRows,
          selectedColumns
        ); // Recur for the next row

        currentCombination.pop(); // Backtrack
        selectedRows.delete(rowIndex); // Unmark the row
        selectedColumns.delete(i); // Unmark the column
      }
    }
  }

  generateCombination([], 0, new Set(), new Set()); // Start with an empty combination at the first row, with no selected rows or columns
  return finalobj;
}

// Example usage:
const matrix = Data[0].results;

let res = [];

for (let i = 0; i < Data?.length; i++) {
  const combinations = findCombinations(Data[i]);
  // if (combinations.length > 0) {
  //   res.push(Data[i]);
  //   // console.log(Data[i], Data[i]?.results);
  // }

  console.log(">>>", combinations);
}
// const combinations = findCombinations(matrix);
// console.log(combinations);
// console.log(">>>>>", res[0]?.results);
