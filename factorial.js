function factorial(num){
    if (num==0|| num==1)
        return 1;
    for (var i=num-1;i>=1;i--){
        num*=i;
    }
    
    return num;
}

function recursiveFactorial(num){
    if(num<=1){
        return 1;
    }else {
        return num*recursiveFactorial(num-1);
    }
}

//factorial of 5 = 20
//5*4!
//factorial of 4
//4*3!
//factorial of 3
//3*2!
//factorial of 2
//2*1!
//factorial of 1
//1
//result=5*4*3*2*1


console.log(recursiveFactorial(5));