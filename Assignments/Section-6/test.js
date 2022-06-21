const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = arr.slice(3, 4);
//arr.splice(3, 1, 1, 2, 3, 4);

/* let st = "a bcd e fgh ij k";
st = st.split(" ", 5);

console.log(arr, newArr, splice); st.trim()

console.log(st, st.indexOf("e"), st.includes("x")); */

console.log(newArr);

function a(a, b) {
  return a + b;
}

const arrow = a => a + "c";
console.log(arrow('bc'))