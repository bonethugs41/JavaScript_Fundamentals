function Solve(params) {
	//start code
	var numbersArr = params.slice(1).map(Number);
	var bestSum = numbersArr[0];
	for (var i = 0; i < numbersArr.length; i++) {
		var currentSum = 0;
		for (var j = i; j < numbersArr.length; j++) {
			currentSum = currentSum + numbersArr[j];
			if (currentSum > bestSum) {
				bestSum = currentSum;
			};
		};
	};
	//end code

	return bestSum;
}

var test1 = ['8', '1', '6', '-9', '4', '4', '-2', '10', '-1'];
console.log(Solve(test1));