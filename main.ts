//1st way
for(let i =1 ; i <= 10 ; i++){
console.log(2*i);

}

//2nd way
for(let i =1 ; i <= 10 ; i++){
    console.log(`4 X ${i} = ${4*i}`);
    
    }

    //3rd way
    for(let i = 5; i <=51; i = i+5){// means its runs add 5 + 5
    console.log(i);
    
    }
    // 4th way

    // buy using function
    
    function Table(number: number, value: number = 10): void {
        console.log(`Multiplication Table of ${number}`);
        console.log('--------------------------');
      
        for (let i = 1; i <= value; i++) {
          let product = number * i;
          console.log(`${number} x ${i} = ${product}`);
        }
      
        console.log('--------------------------');
      }
  
      Table(5);