function summElmnts(array) {

    return array
        .filter(n => n > 20)
        .reduce((sum, current) => sum += current, 0);
}
let arr = [1, 50, 40, 3, 10];
console.log(summElmnts(arr));

function findString(arrayStrings) {

    return arrayStrings.filter(s => s.length >= 5 && s.includes('a'));
}

const arrOfStrings = ['john', 'kipo', 'samantha', 'jorge', 'barbie', 'javi'];
console.log(findString(arrOfStrings));

function Employee(firstName, lastName, birthdate = new Date()) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.getFullName = function() {

        return this.firstName + ' ' + this.lastName;
    }
    this.getAge = function() {

        //calculate Exact Age
        var currentDate = new Date();
        var age = currentDate.getFullYear() - this.birthdate.getFullYear();
        var currentMonth = currentDate.getMonth() - this.birthdate.getMonth();

        if (currentMonth < 0 ||
            (currentMonth === 0 &&
                currentDate.getDate() < this.birthdate.getDate())) {
            age--;
        }
        return age;

    }

    const emp1 = new Employee('john', 'smith', new Date(1996, 4, 12));
    const emp2 = new Employee('souf', 'ennali', new Date(1998, 6, 4));
    const emp3 = new Employee('naem', 'haddad', new Date(2008, 6, 4));
    const emp4 = new Employee('gorge', 'sebastien', new Date(2006, 6, 4));

    var emps = new Array();

    emps.push(p1);
    emps.push(p2);
    emps.push(p3);
    emps.push(p4);

    function isEmployeeHave20years(arrayOfEmployees) {
        var result = arrayOfEmployees.filter(emp => emp.getAge() > 20);
        if (result[0] === undefined) { return false; } else { return true };
    }


    function employeeBornAfter2000(arrayOfEmployees) {

        return arrayOfEmployees.filter(emp => emp.birthdate.getFullYear() > 2000).map(emp => emp.getFullName());
    }
    console.log(employeeBornAfter2000(emps));