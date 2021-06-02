@myDecorator
class Student{
    name: string;
    gpa: number;

    constructor(name: string,gpa: number){
        this.name=name;
        this.gpa=gpa;
    }

    greeting(){
        console.log('Hello my name is ',this.name);
    }    
}





class DE_Student extends Student{

}


const jhon=new Student("Jack",3.0);
jhon.greeting();
const jack=new Student("jack",4.0);
jack.greeting();