function flatArray(arr) {
  if(!arr || typeof arr==='string') return []
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatArray(toFlatten) : toFlatten);
    }, []);
  };


function sum(arr) {
  if (!arr || typeof arr === "string") return 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" && Array.isArray(arr[i]) === false)
      return "error";
  }
  if (arr.length == 1) return arr[0];
  return arr[0] + sum(arr.slice(1));
}

function fibonacci(num){
  let arr=[]
  for(let i=0; i<=num; i++)
      return arr[i]= num < 1 ? 0: num<=2 ? 1: fibonacci(num-1)+fibonacci(num-2)
}


module.exports = {flatArray, sum, fibonacci}

