/*let name="Aki";
let age = 24;

let myProfile={
    name,
    age
};

function displayProfile(name,age){
    console.log(`My name is ${name}.I'm ${age} years old.`);
}
displayProfile(myProfile.name,myProfile.age);

let fruits = ["Apple","Banana","Orange"];
fruits.forEach(fruit => console.log(fruit));

let numbers = [1,9,3,11];
numbers.sort((a,b) => a-b);
console.log(numbers);
*/

import{Profile} from "./profile.js";
let profile = new Profile("Aki",24);
console.log(profile.greetings());

document.getElementById("app").innerText = profile.greetings();
