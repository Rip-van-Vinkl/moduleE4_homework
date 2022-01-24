// №1
const person = {
  city: "Moscow",
  university: "The Bauman Moscow University",
}

const student = Object.create(person);
student.ownCity = "Piter";
student.name = 'Andrei';
student.surname = 'Ivanov';
student.age = 18;
student.position = 'developer';

function getOnlyOwnProperty(person) {
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(person[key]);
    }
  }
}

getOnlyOwnProperty(student); //"Piter" "Andrei" "Ivanov" 18 "developer"


// №2
let string1 = 'name';
let string2 = 'company';

function findKey(person, string) {
  let sum = false;
  for (let key in person) {
    if (key == string) {
      sum = true;
    }
  }
  return sum;
}

console.log(findKey(student, string1)); //true
console.log(findKey(student, string2)); //false


// №3 я это тупо подсмотрел в интернете
function createObjectWithoutPrototyp() {
  return Object.create(null);
}

console.log(Object.getPrototypeOf(createObjectWithoutPrototyp())); //null


// №4
function ElectroTechnic(name) {
  this.name = name
  this.brand = 'brand'
  this.power = 0
}


ElectroTechnic.prototype.onOff = function (on) {
  if (on == 'on') {
    return this.power
  } else {
    return 0
    // console.log(`прибор ${this.name} не подключен к сети`);
  }
}


// осветительные приборы
function luxTechnic(name) {
  this.name = name
  this.brand = 'Лампочка Ильича'
  this.power = 60

  this.type = 'бра'
  this.luminancer = this.power * 11
  this.changeLuminance = function (change) {
    return this.luminancer * change; // пусть так...
  }
}
luxTechnic.prototype = new ElectroTechnic();
const lamp = new luxTechnic('lamp');
console.log(lamp.changeLuminance(0.5) + ' Лм'); //330 Лм


// приборы для уборки
function cleanerTechnic(name) {
  this.name = name
  this.brand = 'Philips'
  this.power = 2000

  this.wetCleaning = true
  this.getWetCleaning = function () {
    if (this.wetCleaning) {
      return 'функция влажной уборки включена';
    } else {
      return 'функция влажной уборки отсутствует';
    }
  }
}
cleanerTechnic.prototype = new ElectroTechnic();
const vacuum_cleaner = new cleanerTechnic('vacuum_cleaner');
console.log(vacuum_cleaner.getWetCleaning()); //функция влажной уборки включена


// компьютерная техника
function computerTechnic(name) {
  this.name = name
  this.brand = 'Эльбрус'
  this.power = 220

  this.type = 'ноут'
  this.calculator = function (a, b, c) {
    return a + b + c; // я иссяк..
  }
}
computerTechnic.prototype = new ElectroTechnic();
const computer = new computerTechnic('computer');
console.log(computer.calculator(1, 2, 3)); //6 - т.е. в умелых руках могу заменить калькулятор!


// считаем суммарную потребляемую мощность
function getSumPower() {
  console.log('суммарная потребляемая мощность = ' + (lamp.onOff("on") + vacuum_cleaner.onOff("off") + computer.onOff("on")) + ' Вт'); //суммарная потребляемая мощность = 280 Вт
}
getSumPower()


// №5
class ElectroTechnic {
  constructor(name) {
    this.name = name;
    this.brand = 'brand';
    this.power = 220;
  }
  onOff(on) {
    if (on == 'on') {
      return this.power;
    } else {
      return 0;
    }
  }
}


// осветительные приборы
class luxTechnic extends ElectroTechnic {
  constructor(name) {
    super(name);
    this.brand = 'Лампочка Ильича';
    this.power = 60;
    this.type = 'бра';
    this.luminancer = this.power * 11;
  }
  changeLuminance(change) {
    return this.luminancer * change;
  }
}

const lamp = new luxTechnic('lamp');
console.log(lamp.changeLuminance(0.5) + ' Лм');


// приборы для уборки
class cleanerTechnic extends ElectroTechnic {
  constructor(name) {
    super(name);
    this.brand = 'Philips';
    this.power = 2000;
    this.wetCleaning = true;
  }
  getWetCleaning() {
    if (this.wetCleaning) {
      return 'функция влажной уборки включена';
    } else {
      return 'функция влажной уборки отсутствует';
    }
  }
}

const vacuum_cleaner = new cleanerTechnic('vacuum_cleaner');
console.log(vacuum_cleaner.getWetCleaning());


// компьютерная техника
class computerTechnic extends ElectroTechnic {
  constructor(name) {
    super(name);
    this.name = name;
    this.brand = 'Эльбрус';
    this.power = 220;
    this.type = 'ноут';
  }
  calculator(a, b, c) {
    return a + b + c;
  }
}

const computer = new computerTechnic('computer');
console.log(computer.calculator(1, 2, 3));


// считаем суммарную потребляемую мощность
function getSumPower() {
  console.log('суммарная потребляемая мощность = ' + (lamp.onOff("on") + vacuum_cleaner.onOff("off") + computer.onOff("on")) + ' Вт');
}
getSumPower()