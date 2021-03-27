numApples = 2;
numOranges = 5;
numBoxes = 0;
if (numApples > 0) {
  if (numOranges > 10) {
    numBoxes = 4;
  }
  numBoxes++;
}
else {
  numBoxes = 99;
}
console.log(numBoxes);
produce = "carrots";
if (produce == "apples") {
  numBoxes = 1;
}
else if (produce == "bananas") {
  numBoxes = 2;
}
else if (produce == "carrots") {
  numBoxes = 3;
}
else {
  numBoxes = 4;
}
console.log(numBoxes);

let compareNumber = 3; // Code will be tested with: 3, 8, 42
let userNumber = '3'; // Code will be tested with: '3', 8, 'Hi'
console.log('Numbers are equal');


/* Your solution goes here */
if (userNumber == compareNumber)
{
  console.log('Numbers are equal');
}
else {
  console.log('Variables are not identical');}
homeTeam = 2;
visitingTeam = 5;
if (homeTeam > 10 || visitingTeam > 0) {
  decision = 1;
}
else {
  decision = 0;
}
console.log(decision);

homeTeam = 2;
visitingTeam = 5;
if (!(homeTeam > 10 && visitingTeam > 0)) {
  decision = 1;
}
else {
  decision = 0;
}
console.log(decision);

homeTeam = 2;
visitingTeam = 5;
if (homeTeam > 10 || (visitingTeam != 2 && visitingTeam > 0)) {
  decision = 1;
}
else {
  decision = 0;
}

console.log(decision);


