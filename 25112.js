class Circle{//code for a circle class
    constructor(radius,color){
        this.radius = radius || 1;
        this.color= color || "red"; 
    }
}
const a=new Circle(3,'blue')
console.log(a)

// code for a class that holds a persons details
class Person{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
    info(){
        return ('Name: '+this.name,'Age: '+this.age)
    }
}
const p1=new Person('Ram',23)
console.log(p1.info())
