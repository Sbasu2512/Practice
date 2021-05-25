const pigLatin = (arr) => {
  var indexOne;
  for (let i = 0; i < arr.length; i++) {
    let newArr = "";
    for (let j = 1; j < arr[i].length; j++) {
      newArr += arr[i][j];
    }
    indexOne = arr[i][0];
    newArr = newArr + arr[i][0] + "ay";
    console.log(newArr);
  }
};

pigLatin(["pig", "latin"]);
