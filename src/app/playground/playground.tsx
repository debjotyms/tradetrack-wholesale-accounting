// Create an object named `car` with the following properties: `make`, `model`, and `year`. Assign appropriate values to these properties (e.g., `"Toyota"`, `"Corolla"`, `2020`). Then, log the entire object to the console.
// Give it a try!

const numbers = [10, 15, 20, 25, 30, 35, 40];

function filterEvenNumbers(numbers){
  const res = []
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
      res.push(numbers[i]);
    }
  }
  return res;
}