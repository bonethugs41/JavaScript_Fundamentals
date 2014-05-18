	

    function Solve(args) {
            var tokens = args[0].split(" ");
     
            var rows = parseInt(tokens[0]);
            var cols = parseInt(tokens[1]);
            var jumps = parseInt(tokens[2]);
     
            tokens = args[1].split(" ");
     
            var startRow = parseInt(tokens[0]);
            var startCol = parseInt(tokens[1]);
     
            var jumpMatrix = [];
            var rowArray;
            var row;
            var col;
     
            for (row = 0; row < jumps; row++) {
                    tokens = args[2 + row].split(" ");
                    rowArray = [];
     
                    for (col = 0; col < 2; col++) {
                            rowArray.push(parseInt(tokens[col]));
                    }
     
                    jumpMatrix.push(rowArray);              
            }
     
            var field = [];
            var visited = [];
            var number = 1;
     
            for (row = 0; row < rows; row++) {
                    rowArray = [];
                    var visitedRowArray = [];
     
                    for (col = 0; col < cols; col++, number++) {
                            rowArray.push(number);
                            visitedRowArray.push(false);
                    }
     
                    field.push(rowArray);
                    visited.push(visitedRowArray);
            }
     
            row = startRow;
            col = startCol;
            var countJumps = 0;
            var currentJump = 0;
            var sum = 0;
     
            while (row >= 0 && col >=0 && row < rows && col < cols && !visited[row][col]) {
                    sum += field[row][col];
     
                    visited[row][col] = true;
     
                    if (currentJump >= jumps) {
                            currentJump = 0;
                    }
                     
                    row += jumpMatrix[currentJump][0];
                    col += jumpMatrix[currentJump][1];
     
                    currentJump++;
                    countJumps++;
            }
     
            return row >= 0 && col >= 0 && row < rows && col < cols ? "caught " + countJumps : "escaped " + sum;
    }

