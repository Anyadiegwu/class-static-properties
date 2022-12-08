// Create a class
class Dog{
    dogBark = "woof"
    numberOfLegs = 2

    static breed = "German Shephard"

    danger(){
        console.log(this.dogBark)
    }

    static askBreed(){
        console.log(this.breed)
    }
}

// instantiate an object
const dog = new Dog()

console.log(dog, Dog)

// accessing a method
dog.danger()
Dog.askBreed()

dog.numberOfLegs = 10
Dog.breed = "Pitbull"

console.log(dog.numberOfLegs, Dog.breed)

// constructor method
// Movie API  
class Customer{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getAge(){
        console.log(this.age)
    }
    getName(){
        console.log(this.name)
    }
    setAge(age){
       this.age = age
    }
}
// instantiate
const victor = new Customer("Victor", 21)

console.log(victor)

victor.getAge()
victor.getName()
victor.setAge(22)
console.log(victor)