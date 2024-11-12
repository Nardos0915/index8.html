// ....FIRST ACTIVITY...
function doubleNumbers(arr) {
    let doubledArray = [];
    for (let num of arr) {
      doubledArray.push(num * 2);
    }
    return doubledArray;
  }
  let numbers=[1,2,3,4,5];
  let result=doubleNumbers(numbers);
  console.log(result);

  //...SECOND ACTIVITY...
  function printObjectProperties(obj) {
    for (let key in obj) {
      console.log(`${key}: ${obj[key]}`);

    }
  }
  //...THIRD ACTIVITY...
  function printWithDelay(str) {
    for (let i = 0; i < str.length; i++) {
        setTimeout(() => {
            console.log(str[i]); // Print the string at the current index
        }, i * 1000); // Delay each print by 1 second per index
    }
}

