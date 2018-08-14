//August 14th Object Destructuring Exercise;

const personPet = {
    person: {
        "name": "aron",
        "pet": {
            "type": "dog",
            "breed": {
                "longhaired": true,
            }
        }
    }
}
//get values out of deeper nested object and change the property name
const { name, pet: { blah } } = personPet.person
const { pet: { breed: { longhaired: goodBoy } } } = personPet.person

console.log(goodBoy)

//Array destructuring: getting a = 1 and b = [1, 2, 3, 4]
const test = [1, 2, 3, 4]
const [a, ...b] = test

console.log("a is equal to " + a + " and b is equal to " + b)

//bucketing exercise using reduce:
const preBucket = [
    {
        "name": "aron",
        "age": 2,
    },
    {
        "name": "aron",
        "age": 5,
    },
    {
        "name": "aron",
        "age": 6,
    },
    {
        "name": "aron",
        "age": 15,
    },
    {
        "name": "aron",
        "age": 13,
    },
    {
        "name": "aron",
        "age": 14,
    },
    {
        "name": "aron",
        "age": 15,
    },
    {
        "name": "aron",
        "age": 20,
    },
    {
        "name": "aron",
        "age": 30,
    },
    {
        "name": "aron",
        "age": 30,
    },
    {
        "name": "aron",
        "age": 30,
    },
    {
        "name": "aron",
        "age": 30,
    },
    {
        "name": "aron",
        "age": 30,
    },
    {
        "name": "aron",
        "age": 30,
    },
]

const callback = (total, person) => {
    if(person.age < 12){
        total["underTwelve"]++
    } else {
        total["underTwelve"] = 1;
    }
    return total
}

const callback2 = (totals, person) => {
    if(person.age < 12){
        ({ ...totals, ["underTwelve"]: (totals[person.age] || 0) + 1 })
    } else if(person.age >= 12 && person.age <18){
        ({ ...totals, ["overTwelve"]: (totals[person.age] || 0) + 1 })
    } else if(person.age > 18){
        ({ ...totals, ["adult"]: (totals[person.age] || 0) + 1 })
    }
    return totals
}
// write helper function to cut down on redundancies in code
const helper = (acc, keyName) => ({ ...acc, [keyName]: (acc[keyName] || 0) + 1 })

// create function that accumulates people into different age groups
const postBucket = preBucket.reduce((totals, person) => {
    if (person.age < 12) {
        return helper(totals, "underTwelve")
    } else if (person.age >= 12 && person.age < 18) {
        return helper(totals, "overTwelve")
    } else if (person.age > 18) {
        return helper(totals, "adult")
    }
    return totals
    }, {})

console.log(postBucket);
