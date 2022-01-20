// №1

const person = {
    city: "Moscow",
    university: "The Bauman Moscow University",
   }

const student = Object.create(person);   
student.ownCity = "Piter";
student.name = 'Andrei';
student.surname ='Ivanov';
student.age = 18;
student.position = 'developer';

function getOnlyOwnProperty(person) {
    for (let key in person) {
        if (person.hasOwnProperty(key)) {
                console.log(person[key]);
        }   
    }
}

getOnlyOwnProperty(student);

// №2

let string1 = 'name';
let string2 = 'company';

function findKey(person, string) {
  let sum = false;
    for (let key in person) {
      if (key == string) {
        sum = true;
      }}
      return sum;
    }

console.log(findKey(student, string1));
console.log(findKey(student, string2));

// №3 я это тупо подсмотрел в интернете

function createObjectWithoutPrototyp(){
    return Object.create(null);
}

console.log(Object.getPrototypeOf(createObjectWithoutPrototyp()));