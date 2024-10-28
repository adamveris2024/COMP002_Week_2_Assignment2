// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
// Number of rows for the triangle

for (let i = 1; i <= 4; i++) {
    console.log('#'.repeat(i));
}

for (let i = 4 - 1; i > 0; i--) {
    console.log('#'.repeat(i));
}