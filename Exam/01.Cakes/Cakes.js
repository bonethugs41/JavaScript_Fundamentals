	

    function Solve(args) {
        var bigSum = args[0].split(' ').map(Number);
        var array = new Array(3);
             for (var i = 0; i < array.length; i++) {
                 array[i] = parseInt(args[i+1]);
             };

        var index = 0;
        var sum = 0;
        var numOfElements = 0;

        for (var k = 0; k < 3; k++) {
            for (var j = 0; j < 3 - k; j++) {
                for (var i = 0; i < k; i++) {
                    sum += array[j + i];
                };
                if (sum == bigSum) {
                    return sum;
                };
            };
        };  
    }

    var test1 = [
        '110',
        '13',
        '15',
        '17'];

console.log(Solve(test1));