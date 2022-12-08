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

const dog = new Dog()

console.log(dog, Dog)

dog.danger()
Dog.askBreed()

dog.numberOfLegs = 10
Dog.breed = "Pitbull"

console.log(dog.numberOfLegs, Dog.breed)