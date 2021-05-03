//Implentation for LinkedList By Class;
console.log('------------------------ LinkedList ----------------------');
class mNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class mLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new mNode(element);
        let current;

        if (this.head == null) this.head = node;
        else {
            current = this.head;
            while (current.next) current = current.next;
            current.next = node;
        }
        this.size++;
    }
    remove(element) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element === element) {
                if (prev == null) this.head = current.next;
                else prev.next = current.element;
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    insertAt(element, location) {}
    reomveFrom(element, location) {}
    isEmpty() { return this.size == 0; }
    sizeOfList() { return this.size; }
    printList() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.data + ' ,';
            current = current.next;
        }
        console.log(str)
    }
}
let ll = new mLinkedList();

console.log(ll.isEmpty());
ll.add(10);
ll.printList(ll);
console.log(ll.sizeOfList());
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList(ll);
console.log("is element removed ?" + ll.remove(50));
ll.printList();
console.log("is List Empty ? " + ll.isEmpty());
ll.printList();

console.log('------------------------ Quiz System ----------------------');

class Student{
    constructor(id){
        this.id=id;
        this.answers=[];
    }
    addAnswer(question){
        this.answers.push(question);
    }
}
class Question{
    constructor(id,value){
        this.id=id;
        this.value=value;
    }
    checkAnswer(answer){
        // console.log('Answer: '+answer);
        return this.value===answer;
    }
}
class Quiz{
    constructor(questionss,students){
        this.questions=new Map();
        questionss.forEach(q => this.questions.set(q.id, q));
        this.students=students;
    }
    scoreStudentBySId(sId){
        let std=this.students.find(s=>s.id===sId);
        if(!std) {
            console.log('We Don\'t have this student')
            return;}
            // console.log('-----------------Questions------------------');
        const correctAnswers=std.answers.reduce((sum,currAnswer)=>{
            // console.log('Current Answer: '+this.questions.get(currAnswer.id));
            if (currAnswer.checkAnswer(this.questions.get(currAnswer.id))) {
                sum =sum+ 1;
                        }
            // console.log(this.questions.get(currAnswer.id));

            // if(currAnswer.id===3)
            return sum;
        }, 0);
            
            console.log(correctAnswers);
    }
    getAverageScore(){
        return this.students.reduce(
            (prev,std,indx,array)=>{
                return prev+this.scoreStudentBySId(std.id)/array.length;
            }
        ,0)
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
console.log(students)
console.log(questions)
const quiz=new Quiz(questions,students);
