let name = 'zs'
let age = 18

function say() {
    console.log('他说')
}
let person = {
    name,
    age,
    say,
    show() {
        console.log('ok')
    }
}
console.log(person.name);
console.log(person.show());
console.log(person.say());
console.log(person);