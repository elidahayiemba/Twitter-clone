class Person{
    constructor(name = "anonymous", age=0, major){
        this.name = name;
        this.age = age;
        this.major= major
    }
    getGreeting() {
        return `Hi. I am ${this.name} and am ${this.age} years`;
    }

    getDescription(){
        return `Hi. i am ${this.name} and I study ${this.major}`;
    }
}

const person1 = new Person("Elidah",29,"fashion");
const person2 = new Person("Evans",39);
const person3 = new Person();
console.log(person1.getGreeting());
console.log(person1.getDescription());


const design = {
    place: "milan",
    company: "versace",
    scale: "Europe",
    niche: "fashion",
};

const{place, company,scale, niche} = design
console.log(scale);
console.log(design);