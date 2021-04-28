const students = [
    { name: "Quincy", grade: 96, courses: ["cs301", "cs303"] },
    { name: "Jason", grade: 84, courses: ["cs201", "cs203"] },
    { name: "Alexis", grade: 100, courses: ["cs105", "cs211"] },
    { name: "Sam", grade: 65, courses: ["cs445", "cs303"] },
    { name: "Katie", grade: 90, courses: ["cs303", "cs477"] },
];
const studnetsHaveCS303 = students
    .filter((s) => s.courses.includes("cs303"))
    .map((s) => s.grade);
const AvOfStudentsHaveSC303 = studnetsHaveCS303.reduce((prev, curr) => prev + curr) / studnetsHaveCS303.length;
console.log(AvOfStudentsHaveSC303);