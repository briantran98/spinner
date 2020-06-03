const spinnerArray = ["\r| ", "\r/ ", "\r- ", "\r\\ "]
let counter = 0;
const interval = setInterval(() => {
  process.stdout.write(spinnerArray[counter%4]);
  counter++;
  if(counter === (spinnerArray.length * 3)) {
    clearInterval(interval);
  }
}, 200);