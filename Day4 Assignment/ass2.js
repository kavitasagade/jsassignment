const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using javascript",
    },
}
let{
    name,
    age,
    projects: {diceGame},
}= student;
console.log({name,age});
console.log(name,age,diceGame);