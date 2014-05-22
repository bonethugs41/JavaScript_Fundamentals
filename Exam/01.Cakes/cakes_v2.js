function Solve(args) {
        var bigSum = args[0].split(' ').map(Number);
        var array = new Array(3, 2);
             for (var i = 0; i < array.length; i++) {
                 array[0][i] = parseInt(args[i+1]);
             };

             return array;
    }

    var test1 = [
        '110',
        '13',
        '15',
        '17'];

console.log(Solve(test1));