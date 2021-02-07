/*
* explicit binding : using bind, call and apply

    help to set the context of this.
*/

function sayName() {
    console.log(`name: ${this.name}`)
}

var person = {
    name: 'anoop'
}

var person2 = {
    name: 'anuj'
}

//bind return a function , which chaning the this of the function. same as call.
sayName.bind(person, null)()
sayName.bind(person2, null)()

//call the function which this, object and can also pass the argument.with ,

sayName.call(person2)

//in case of large argu , we use [] ,
sayName.apply(person)