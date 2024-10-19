let line1 = prompt("write the first row:");
let line2 = prompt("write the second row:");
let line3 = prompt("write the third row:");


let lines = [line1, line2, line3];


lines.sort(() => Math.random() - 0.5);


console.log(`${lines[0]} ${lines[1]} ${lines[2]}`);
