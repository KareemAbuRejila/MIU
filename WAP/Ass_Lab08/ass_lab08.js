function Student(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.grades = [];
    // this.getFullName = () => { return this.firstName + ' ' + this.lastName }
    this.inputNewGrade = (newGrade) => { this.grades.push(newGrade) }
    this.computeAverageGrade = () => {
        return this.grades
            .reduce((acc, c) => acc + c, 0) / this.grades.length;
    };
};
Student.prototype.getFullName = () => { return this.firstName + ' ' + this.lastName };
// Student.prototype.inputNewGrade = (newGrade) => { this.grades.push(newGrade) }
// Student.prototype.computeAverageGrade = () => {
//     return this.grades
//         .reduce((acc, c) => acc + c, 0) / this.grades.length;
// };
let students = [
    new Student("Kareem 1", "AbuRejila 1"),
    new Student("Kareem 2", "AbuRejila 2"),
    new Student("Kareem 3", "AbuRejila 3"),
];

students[0].inputNewGrade(50);
students[0].inputNewGrade(60);
students[0].inputNewGrade(70);
students[0].inputNewGrade(80);
students[1].inputNewGrade(55);
students[1].inputNewGrade(63);
students[1].inputNewGrade(70);
students[1].inputNewGrade(89);
students[2].inputNewGrade(89);
students[2].inputNewGrade(79);
students[2].inputNewGrade(69);
students[2].inputNewGrade(59);

for (let std in students) {
    console.log(students[std].getFullName());
};
console.log('------------------------------------');

function printAverageForAllSudent() {
    for (let std in students) {
        console.log(students[std].getFullName() + ' : ' + students[std].computeAverageGrade());
    };
};
printAverageForAllSudent();
//Implentation Student by Object Literal;
StudentLit = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        return this.grades
            .reduce((acc, c) => acc + c, 0) / this.grades.length;
    },
}

let studentLit1 = Object.create(StudentLit);
studentLit1.firstName = "Kareem 1";
studentLit1.lastName = 'AbuRjeila 1';
studentLit1.inputNewGrade(66);
studentLit1.inputNewGrade(76);
studentLit1.inputNewGrade(86);
studentLit1.inputNewGrade(96);

let studentLit2 = Object.create(StudentLit);
studentLit2.firstName = "Kareem 2";
studentLit2.lastName = 'AbuRjeila 2';
studentLit2.inputNewGrade(66);
studentLit2.inputNewGrade(76);
studentLit2.inputNewGrade(86);
studentLit2.inputNewGrade(96);
let studentLit3 = Object.create(StudentLit);
studentLit3.firstName = "Kareem 3";
studentLit3.lastName = 'AbuRjeila 3';
studentLit3.inputNewGrade(66);
studentLit3.inputNewGrade(76);
studentLit3.inputNewGrade(86);
studentLit3.inputNewGrade(96);

let studentsLit = [
    studentLit1, studentLit2, studentLit3
];
let avg = students.map(a => a.computeAverageGrade()).reduce((acc, c) => (acc + c), 0) / studentsLit.length;
console.log(avg);

//Implentation for LinkedList By Object literal;
linkedlist = {
    values: [],
    add: function(a) {
        this.values.push(a);
    },
    remove: function(a) {
        this.values.pop(a);
    },
    print: function() {
        console.log(this.values);
    }
}

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};
//
//using constructor function
function LinkedList() {
    this.values = [];
    this.add = function(a) {
        this.values.push(a);
    }
    this.remove = function(a) {
        this.values.pop(a);
    }
    this.print = function() {
        console.log(this.values);
    }
}
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};
//