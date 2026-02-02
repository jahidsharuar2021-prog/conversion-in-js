function oddeverage(number) {
  const oddarr = [];
  for (const num of number) {
    if (num % 2 === 0) {
      oddarr.push(num);
    }
  }
  console.log(oddarr);
  const len = oddarr.length;
  console.log(len);
  let sum = 0;
  for (const digit of oddarr) {
    sum = sum + digit;
  }

  const avg = sum / len;
  return avg;
}

//function call ar part

const arr = [10, 30, 44, 55, 77, 33];
const evenarray = oddeverage(arr);
console.log(evenarray);
