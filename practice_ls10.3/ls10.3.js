let num = parseFloat(prompt("Enter a number: "));
let total = 0;
while( num != -1 ) {
    num = parseFloat(prompt("Enter a number: "));
    alert(num);
    total += num;
    console.log(total);
}