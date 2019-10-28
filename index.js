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



module.exports = {flatArray, sum}

