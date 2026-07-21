// Exercise 1
for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
}

// Exercise 2
let i = 10;
while(i > 0){
    console.log(i);
    i--;
}

// Exercise 3
i = 1;
do{
    console.log(i);
    i++;
}while(i <= 5);

// Exercise 4
for(let j = 2 ; j <= 20 ; j+=2){
    console.log(j);
}

// Exercise 5
for(let j = 1 ; j <= 20 ; j+=2){
    console.log(j);
}

// Exercise 6
for(let j = 1 ; j <= 10 ; j++){
    console.log("7 x ",j," = ",j*7);
}

// Exercise 7
for(let j = 0 ; j <= 20 ; j++){
    if(j == 10) continue;
    console.log(j);
}

// Exercise 8
for(let j = 0 ; j <= 20 ; j++){
    if(j == 15) break;
    console.log(j);
}