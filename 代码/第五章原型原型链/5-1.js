class People{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}
class Student extends People{
    constructor(name,number){
        super(name)
        this.number = number
    }
    goStudy(){
        console.log(`${this.name} is study now`)
    }
}
xiaowei = new Student('xiaowei',1)
xiaowei.eat()
xiaowei.goStudy()

console.log(Student.prototype.__proto__)//从隐式继承里找到。
console.log(People.prototype)
