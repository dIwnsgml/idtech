(function () {
  console.log("a");
}) ();

let arrowFunc = (a) => {
  return a+= 1;
};

console.log(arrowFunc(1));