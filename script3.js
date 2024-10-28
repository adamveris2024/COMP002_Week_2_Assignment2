// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
const hashtag = 8;

for (let i = 0; i < hashtag; i++) {
    let row = '';
    for (let j = 0; j < hashtag; j++) {
        if ((i + j) % 2 === 0) {
            row += '#';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}