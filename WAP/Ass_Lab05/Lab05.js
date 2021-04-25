// Qurstion 1
const arr = [1, 50, 40, 3, 10];
console.log(arr
        .filter(n => n > 20)
        .reduce((sum, current) => sum += current, 0));
// Question 2
const arrOfStrings = ['john', 'kipo', 'samantha', 'jorge', 'barbie', 'javi'];
console.log(arrayStrings
            .filter(s => s.length >= 5 && s.includes('a')
                   );
// Question 3
function Employee(firstName, lastName, birthdate = new Date()) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
    this.getAge = function() {
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
    const listOfEmplyees=[new Employee('Kareem 1', 'AbuRejila 1', new Date(1996, 28, 11)),
                          new Employee('Kareem 2', 'AbuRejila 2', new Date(2000, 28, 11)),
                          new Employee('Kareem 3', 'AbuRejila 3', new Date(1992, 28, 11)),
                          new Employee('Kareem 4', 'AbuRejila 4', new Date(2002, 28, 11)),
                          new Employee('Kareem 5', 'AbuRejila 5', new Date(2005, 28, 11)),
                         ];
    
    console.log(listOfEmplyees.filter(e=> e.getAge()>20).map(e=>e.getFullName());
