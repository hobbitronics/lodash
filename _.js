let _ = {};
_.clamp = (number, lower, upper) => {
    let clamped = Math.max(number, lower)
    clamped = Math.min(clamped, upper)
    return clamped;
}
_.inRange = (number, start, end) => {
  if(end == null){
    end = start;
    start = 0;
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  let inRange = number >= start && number < end;
  return inRange;
  }

  _.words = (stringOfWords) => {
    let Arr = stringOfWords.split(' ')
    return Arr;
  }

  _.pad = (string, length) => {
    let delta = length - string.length;
    if (delta > 0){
    let space = ' ';
    let frontSpace = '';
    let front = Math.floor(delta/2);
      for (let i = 0; i < front; i++){  //could have used .repeat()
        frontSpace = frontSpace+space;
      }
    let backSpace = '';
    let back = Math.ceil(delta/2);
      for (let i = 0; i < back; i++){
        backSpace = backSpace+space
      }
    let newString = frontSpace+string+backSpace;
    //console.log(`(${newString})`)
    return newString;
  } else {return string;}
  }

  _.has = (anObject, aKey) => {
    if (anObject[aKey]){
      return true;
    } else {return false;}
  }

  _.invert = (object) => {
    let temp = {};
    let newKeys = {};//tobe inverted object
  for (const key in object) {   //iterates through object
  newKeys[object[key]] = key; //for nondestructive - sets key to value and value to key on new object
  temp[key] = object[key]; //The next 3 lines are if you want the original object changed
  object[object[key]] = key; //changes the original object property to inverse
  delete object[key]; //deletes property

    }
    //return newKeys;
    return object;
  }

  _.findKey = (object, func) => {
    let store;
    for (const key in object){
      if (func(object[key])){
        store = key;  //stores key
        break;
      }
    }
    if (!store){return undefined} else {
      return store;
    }
  }

  _.drop = function (arr, num) {
    let newArr = arr;
while (num > 0){
    newArr.shift()
    num -=1;
    }
    if (num === undefined){newArr.shift()}
    return newArr;
  }

  _.dropWhile = function (arr, func) {
      let newArr = arr;
      let i = 1;
      while (func(arr[i], i, arr)){
        i +=1;
        newArr.shift()
        }
        return newArr;
    }

    _.chunk = function (arr, n){  //n is size of chunks
      if (n === undefined){n=1};         //default size if none chosen
      let newArray = [];        //array to take chunks
      let length = arr.length;
      let chunks = Math.floor(length/n); 		//the length of new array
      for(let i = 0; i < chunks; i++){
        newArray[i] = arr.slice(i*n, i*n+n)
        }
        let remain = length%n;
        if (remain != 0){  				// the last chunk will be length of this value
          newArray[chunks] = arr.slice(chunks*n, chunks*n+remain)
        }
        return newArray;
    }



// Do not write or modify code below this line.
module.exports = _;
