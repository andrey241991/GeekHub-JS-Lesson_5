// prime
function isPrime(number){
	if(number > 1){
		for(let i = 2; i < 10; i++){
			if(number % i === 0 && number !== i){
				return false;
			}
		}
		return true;
	}else{
		return false;
	}
}

// factorial
function factorial(number){
	let result = 1;
		while(number > 0){
			result = number * result;
			number--;
		}
	return result;
}


// fibanachi
function fibanach(number){
    if(number === 0){
        return 0;
    }
    let start = 1;   //1
    let result = 1;  //2
    for(let i = 0; i!==number; i++){
       if(i > 1){
        let tempResult = result; // 2
        result = result + start; // 3
        start = tempResult;
       }
    }
    return result;
}


//isSorted
function isSorted(array){
    let result = true;
   array.forEach((element, index, array) => {
        if(element > array[++index]){
            result = false;
        }
    });
    return result;
}

//reverse
function reverse(string){
    let result = '';
    let str = string;
    for(let i = 0; i< string.length; i++){
        let last = str.slice([str.length - 1], [str.length]);
        str = str.slice(0, [str.length - 1]);
        result += last;
    }
    return result;
}
let result = reverse('abcdef');
console.log('result', result);


//myIndexOf
Array.prototype.myIndexOf = function myIndexOf(el) {
    let result = -1;
    let array = this;
    let finish = false;
    array.forEach((element, index) =>{
        if(element === el && !finish){
            result = index;
            finish = true;
        }
    });
    return result;
}

let a = ['a','b','c','a'];
let result = a.myIndexOf('a');
console.log('result', result);


//isPalindrome
const isPalindrome = (str) => {
  let string = str
      .replace(/[^\w]/gi, "") // replace all non-words characters
      .toLowerCase(); // make all characters lower cased
  return string == string.split('').reverse().join('');
}

console.log(isPalindrome('A man a plan a canal Panama'));



//findMissingNumber
function findMissingNumber(inputAr) {

  sortArray(inputAr);
  let result = 0;
  if (inputAr[0] > 1 || inputAr[inputAr.length - 1] < 1) {
    result = 1;
  } else {
    for (let i = 0; i < inputAr.length; i++) {
      if ((inputAr[i + 1] - inputAr[i]) > 1) {
        result = inputAr[i] + 1;
      }
    }
  }
  if (!result) {
    result = inputAr[inputAr.length - 1] + 1;
  }
  return result;
}

function sortArray(inputAr) {
  let temp;
  for (let i = 0; i < inputAr.length; i++) {
    for (let j = i + 1; j < inputAr.length; j++) {
      if (inputAr[j] < inputAr[i]) {
        temp = inputAr[j];
        inputAr[j] = inputAr[i];
        inputAr[i] = temp;
      }
    }
  }
}


//isBalanced
let isBalanced = (str) => {

    return !str.split('').reduce((uptoPrevChar, thisChar) => {
        if(thisChar === '(' || thisChar === '{' || thisChar === '[' ) {
            return ++uptoPrevChar;
        } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
            return --uptoPrevChar;
        }

        return uptoPrevChar
    }, 0);
}
