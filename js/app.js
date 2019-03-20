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

//Commit 5
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
kenny[0]="Gameboy";
jimClark[1]++;
ryan[2]="Gotham City";
reuben.pop();reuben.push("Chicago");
jimHaff.pop();
jimHaff.push("Baltimore", "Boston", "Albany");
jimHaff.splice(2,1);

//Commit 6
var turtles = ["Donatello","Leonardo","Raphael","Michaelangelo"];
for(let x = 0;x<turtles.length;x++){
    console.log(alternate(turtles[x]));
}
function alternate(str){
    var output = "";
    for(var i = 0; i < str.length; i++){
        if (i % 2 == 0) {
            output += str[i].toUpperCase();
        }
        else {
            output += str[i].toLowerCase();
         }   
    }
    return output;
}