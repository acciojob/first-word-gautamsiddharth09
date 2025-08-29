function firstWord(s) {
  // your code here
	let newStr = s.trim().split(" ");
	if(newStr.length > 0) return newStr[0];
	return " ";
	
}

// Do not change the code below


const s = prompt("Enter String:");
alert(firstWord(s));
