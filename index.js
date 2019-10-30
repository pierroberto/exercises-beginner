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
  let x=[]
  if(typeof num !== "number"|| num <0){
    return "error"
  }
  else if(num===1){
   x = [0,1];
   return x;
  }
  else if(num<1){
    x = [0];
    return x;
   }
  else
  { x = fibonacci(num-1)
  x.push(x[x.length-1]+x[x.length-2])
  return x;
  }
}



module.exports = {flatArray, sum, fibonacci}

