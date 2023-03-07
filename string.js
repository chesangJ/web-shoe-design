let a = "beautiful";
let part = a.slice(5,9);
console.log(part);
const food = "I was feeling hungry today";
const b = "eat";
const position = 4;
const output = [food.slice(0,5), b ,food.slice(position)].join('');
console.log(output);
const story ="The quick brown fox jumps over the lazy dog";
const count = (story.match(/the/g)||[]).length;
console.log(count);

const count2 = (story.match(/brown/g)||[]).length;
console.log(count);
const string1 = "We are now going to school";
const substring ="now";
console.log(string1.includes(substring));
const string2 = "The child was sitting on the table before it fell"
const substring2 = "sitting";
console.log(string2.includes(substring2));

let x = "wonderful"
let uppercase = x.toUpperCase();
console.log(uppercase)
let y = " AMAZING BENEATH"
let lowercase = y.toLowerCase();
console.log(lowercase)
const d ="A beautiful wedding"  
const e = d .split("  ") 
.map(w=>w[0]).toUpperCase() + w.substring(1).toLowerCase()
    .join(" ");
    console.log(e);


        
    
