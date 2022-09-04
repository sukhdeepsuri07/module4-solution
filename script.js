/*
Final Output that I want :

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

*/

// Simple Straight Forward Code :

const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
  const firstLetter = names[i].charAt(0);

  if (firstLetter === "j" || firstLetter === "J") {
    console.log(`Good Bye ${names[i]}`);
  } else {
    console.log(`Hello ${names[i]}`);
  }
}
