class Person {
    constructor (name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        if(typeof name !== 'string') {
            throw new Error(`Dhyaaaaan De!`);
        } else this.name = name;
    }
}

class Teacher extends Person {
    teach(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
}

const ajeesh = new Teacher('Ajeesh');
ajeesh.teach('Mathematics!');