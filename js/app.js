//Commit 1
for(let i = 0; i<=20;i++){
    console.log(i);
}

//Commit 2
for(let i = 0; i<=200;i+=2){
    console.log(i);
}

//Commit 3
for(let i = 0; i<=20;i++){
    console.log("Love me, pet me! HSSS!");
    if(i%2==0){
        let ran=Math.ceil(Math.random()*100)%3;
        if(ran==1){
            console.log("...human...why you taking pictures of me?...");
        }
        else if(ran==2){
                console.log("...the catnip made me do it...");
            }
        else{
                console.log("...why does the red dot always get away...");
            }
    }
}

//Commit 4
//Commit 1
for(let i = 0; i<=100;i++){
    
    if(i%3==0&&i%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

