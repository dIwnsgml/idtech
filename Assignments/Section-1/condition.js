const con = 1;

switch (typeof con) {
  case 'number':
    console.log('number');
    break;
  case 'string':
    console.log('string');
    break;
  case 'boolean':
    console.log('boolean');
    break;
  case 'function':
    console.log('function');
    break;
  case 'object':
    console.log('obj');
    break;
  case 'undefined':
    console.log('undifined');
    break;
  default:
    console.log('???');
}

if(typeof con == 'number') {
  console.log('number');
} else if (typeof con == 'string') {
  console.log('string');
} else {
  console.log("bool || function || obj || unfined etc");
}