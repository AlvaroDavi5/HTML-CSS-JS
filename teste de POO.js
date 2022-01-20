
class Animal {

	// constructor method
	constructor(animalName, environment) {
		this.animalName = animalName
		this.environment = environment
	}


	// attributes
	kingdom = "animalia" // encapsulation
	phylum = ""
	animalClass = ""
	order = ""
	family = ""
	genus = ""
	specie = ""


	// methods
	makeSound() {
		console.log("howl")
	}

	getKingdom() {
		return this.kingdom
	}

	getPhylum() {
		return this.phylum
	} // getters and setters
	setPhylum(phylum) {
		this.phylum = phylum
	}

	getClass() {
		return this.animalClass
	}
	setClass(animalClass) {
		this.animalClass = animalClass
	}

	getOrder() {
		return this.order
	}
	setOrder(order) {
		this.order = order
	}

	getFamily() {
		return this.family
	}
	setFamily(family) {
		this.family = family
	}

	getGenus() {
		return this.genus
	}
	setGenus(genus) {
		this.genus = genus
	}

	getSpecie() {
		return this.specie
	}
	setSpecie(specie) {
		this.specie = specie
	}
}


class Dog extends Animal {
// heritage
	constructor(data) {
		super(data, data)
	}


	makeSound() {
		console.log("woof") // polymorphism
	}

}


var wolf = new Animal("Wolf", "Tundra") // instantiation
var dog = new Dog("Domestic Dog", "City")
dog.makeSound()
console.log(dog.animalName)


