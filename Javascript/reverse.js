const reverse = (arr) => {
  let newArr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length-1; j >= 0; j--) {
      console.log(arr[i][j]);
      newArr = arr.push(arr[i]);
    }
  }
  return newArr;
};

reverse(["maharani", "shivanee"]);
//console.log(reverse(['maharani','shivanee']));
