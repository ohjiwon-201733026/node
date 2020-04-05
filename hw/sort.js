let numbers=[];
for(let i=0;i<100;i++){
    numbers[i]=Math.floor(Math.random()*100)+1;
    }
//numbers=[2,40,23,7,10];
//var points = [40, 100, 1, 5, 25, 10];
numbers.sort(function(a, b){return a - b});
//numbers.sort();
console.log(numbers);
