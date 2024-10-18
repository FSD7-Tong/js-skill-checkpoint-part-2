const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

const filterStudent = students.filter((student) => student.score > 50);
//console.log(filterStudent)

const updateScore = filterStudent.map(
  (student) => (student.score = student.score + 0.1 * student.score)
);
//console.log(updateScore)

const totalScore = updateScore.reduce((acc, cur) => acc + cur, 0);
console.log(`Total score is ${totalScore}`);
