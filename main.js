// const People = {
//     "Joe": 24,
//     "Jane": 32,
//     "Grandpa": 89,
//     "Tommy": 12,
//     "Linda": 8,
//     "Adam": 18
// }

// const People2 = [
//     {
//         "Joe": 24
//     },
//     {
//         "Jane": 32
//     },
//     {
//         "Grandpa": 89
//     },
//     {
//         "Adam": 18
//     },
//     {
//         "Linda": 8
//     },
//     {
//         "Tommy": 12
//     },
// ]

// let arrayMaker = (object) => {
//     // let ages = Object.keys(object).map(person => people[person])
//     let names = Object.keys(object).map(person => {person: people[person]})

// } 

// people.map(person => ).reduce((previousValue, acc) => ...previousValue, person, {})

// people.map(person => person, people[person])

// const objectSingular = (array) =>
//     array.reduce((object, person) =>{
//         object[person.id] = person
//         return object
//     }, {})

// let names = Object.keys(object).map(person = people[person]);

// const oneObject = (array) =>
//     let parentObject = array.reduce((obj, item) =>({...obj, {[item.key]: item.value}}), {});


// /// write callback function

// callback = (acc, nextValue) => return {...acc, ...nextValue}
// adultFilter = person => Object.values(person)
// const moreThan18 = array => {
//     return array
//         .filter(person => Object.values(person) >= 18)
//         .reduce(callback, people) => {return {...acc, ...next}}
// }

//
const db = {
    "person1": {
        "name": "foo",
        "age": 20,
        "food": "pizza",
    },
    "person2": {
        "name": "bar",
        "age": 50,
        "food": "pasta",
    }
}
//create a function that takes the database, and adds a new person to the database

//if you're targeting a property that uses a property of an object the function is being run on you need to use square brackets in the return statement. COMPUTED VALUE
addPerson = (db, newPerson) => {
    let name = newPerson.name
    return {...db, [name]: newPerson }
}


subPerson = (db, name) => {
    const newDb = {...db}
    delete newDb[name]
    return newDb
}
// create a function that takes the database and subtracts a person from the database.

const person3 = {
    "name": "person3",
    "age": 50,
    "food": "pasta",
}

const person4 = {
    "name": "person4",
    "age": 25,
    "food": "coffee",
}

// const output = addPerson(db, person3)
// const output2 = subPerson(db, "person2")
// const output3 = addPerson(output, person4)
// console.log(JSON.stringify(output2, null, 4))
// console.log(JSON.stringify(output, null, 4))
// console.log(JSON.stringify(output3, null, 4))

//August 14th Object Destructuring Exercise;

const personPet = {
    person: {
        "name": "aron",
        "pet": {
            "type": "dog"
        }
    }
}

const {name} = personPet.person
const {type} = personPet.person.pet

console.log(name, type)

const test = [1, 2, 3, 4];
const {a, ...b} = test;

console.log(a, b)

