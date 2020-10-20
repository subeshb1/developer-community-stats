console.log('This is functions of  regular expression');
let reg=/Naman/;
// reg=/Naman/g;
// reg=/Naman/i;


// console.log(reg);
// console.log(reg.source);
let str="The boy Naman is a good and Naman is very handsome";

//Some functions of Regular Expression

// 1 exec();
let result1 = reg.exec(str);
// console.log(result1);
// console.log(result1.input);
// console.log(result1.index);

 result1 = reg.exec(str);
// console.log(result1);
 result1 = reg.exec(str);
// console.log(result1);


// 2 test()
let result2=reg.test(str);
// console.log(result2);

// 3 match()

let result3 =str.match(reg);
// console.log(result3);

// 4 serach()

let result4=str.search(reg);
// console.log(result3);

// 5 replace()

let result5=str.replace(reg,'Shivam');
console.log(result5);
