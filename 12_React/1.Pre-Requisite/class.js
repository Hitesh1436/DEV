class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    welcome(){
        console.log(' Hello ' + this.name)
    }
}
// extends like person ka extension in other
// super body lata h ya keys and not values
class Teacher extends Person {
    constructor(name, age, classStrength) {
        super(name, age)           
        this.classStrength = classStrength;
    }
}

class Student extends Person {
    constructor(name, age, cgpa) {
        super(name, age)
        this.cgpa = cgpa
    }
    hello(){
        super.welcome()
    }
}

let person1 = new Person('Adam', 25)
let teacher1 = new Teacher('Steve', 40, 100)
let student1 = new Student('Joy', 15, 8.0)

// console.log(person1)
// console.log(teacher1)
// console.group(student1)

person1.welcome()
student1.hello()