let item1;
item1 = 5;
console.log(item1) 

let item2;
item2 = 3;
console.log(item2) 

let item3;
item3 = (item1+item2);
console.log(item3)

let item4;
item4 = "Yolochka";
console.log(item4)
console.log(item3 + item4)
console.log(item3 * item4)

let item5;
item5 = item3;

let item6;
let item_6_type;
item6 = 15;
item_6_type = typeof(item6);
console.log('item6 == ' + item6, 'item_6_type == ' + item_6_type)

let item7 
item7 = String(item6);
let item_7_type = typeof(item7);
console.log('item7 == '+item7, 'item_7_type == '+item_7_type)

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
 
if (age_1 < age_2) {
    console.log("You don’t have access cause your age is", age_1, "It’s less then")
}

if (age_1 >=  age_2 && age_1 <  age_3) {
    console.log("Welcome!!")
}

if (age_1  > age_3) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}