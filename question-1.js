const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

let allPeople = [];
allPeople = [...techupPeople, ...techcoolPeople];
//console.log(allPeople);

function filterAgeUnder20(allPeople) {
  return allPeople.filter((people) => people.age < 20);
}

console.log(filterAgeUnder20(allPeople));
