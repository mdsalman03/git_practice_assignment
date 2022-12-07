let count = 0;
for (let i=0; i<=num; i++) {
if (num%i !== 0) {
count++;
}
}
if (count==2){
console.log("It is a Prime number");
} else {
conole.log("It is not a prime number");
}