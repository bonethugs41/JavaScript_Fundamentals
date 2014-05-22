	

    function Solve(args) {
        var sizes = args[0].split(' '),
            rows = parseInt(sizes[0]),
            cols = parseInt(sizes[1]),
            row = parseInt(sizes[0]) - 1,
            col = parseInt(sizes[1]) - 1,
            lab = args.slice(1),
            visited = {},
            sum,
            count,
            directions = {
                1: {
                    row: -2,
                    col: +1
                },
                2: {
                    row: -1,
                    col: +2
                },
                3: {
                    row: +1,
                    col: +2
                },
                4: {
                    row: +2,
                    col: +1
                },
                5: {
                    row: +2,
                    col: -1
                },
                6: {
                    row: +1,
                    col: -2
                },
                7: {
                    row: -1,
                    col: -2
                },
                8: {
                    row: -2,
                    col: -1
                }
            };


        function getValueAt(row, col) {
            return Math.pow(2, row) - col;
        }

        function inRange(value, border) {
            return 0 <= value && value < border;
        }

        sum = 0;
        count = 0;


        while (true) {
            //check if outside of the labyrinth
            if (!inRange(row, rows) || !inRange(col, cols)) {
                return 'Go go Horsy! Collected ' + sum + ' weeds';
            }

            var cellValue = getValueAt(row, col, cols);

            //check if on visited cell
            if (visited[cellValue]) {
                return 'Sadly the horse is doomed in ' + count + ' jumps ';
            }

            
            sum += cellValue;
            count++;
            visited[cellValue] = true;

            var dir = lab[row] [col];
            row += directions[dir].row;
            col += directions[dir].col;
            }
        }

    var test1 = [
        '3 5',
        '54561',
        '43328',
        '52388'];

console.log(Solve(test1));