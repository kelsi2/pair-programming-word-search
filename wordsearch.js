const wordSearch = (letters, word) => {
  const transposed = transpose(letters);
  const matrix = {
    horizontalJoin: letters.map(ls => ls.join('')),
    verticalJoin: transposed.map(ls => ls.join('')),
    backwardsHorizontal: letters.map(ls => ls.reverse().join('')),
    backwardsVertical: transposed.map(ls => ls.reverse().join(''))
  };
  for (searches in matrix) {
    for (l of matrix[searches]) {
      if (l.includes(word)) return true;
    }
  }
  return false;
};

const transpose = function(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!newArr[j]) {
        newArr[j] = [];
      }
      newArr[j][i] = matrix[i][j];
    }
  }
  return newArr;
};

module.exports = wordSearch;