const reverse = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length; j >= 0; j--) {
      console.log(arr[i][j]);
      arr = arr.push(arr[i][j]);
    }
  }
  return arr;
};

reverse(["maharani", "shivanee"]);
//console.log(reverse(['maharani','shivanee']));
