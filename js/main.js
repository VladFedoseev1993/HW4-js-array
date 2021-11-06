console.log('------------- 5')
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

console.log('------------- 6')
let names =  'my-short-string';
let arr = names.split('-');
console.log(arr);

console.log('------------- 7')
let arr1 = ['JavaScript', 2015];
let str = arr1.join(' ');
console.log(str);

console.log('------------- 8')
let users = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
  ];
  let userCollection = 
      users.filter(function (item) { return item.age < 20 });
  
  console.log(userCollection); 


  console.log('------------- 9')
  let users1 = [
        {id: 1, name: "Vic", age: 21},
        {id: 2, name: "Petya", age: 30},
        {id: 3, name: "Jon", age: 5}
      ];
      let names2 = users1.map(item => item.name );
      console.log(names2);


  console.log('------------- 10')

  function filterRangeInPlace(arr3, a, b) {
      for (let i = 0; i < arr3.length; i++) {
          let val = arr3[i];
          if (val < a || val > b) {
              arr3.splice(i, 1);
              i--;
          }
      }

  }

  let arr3 = [5, 3, 8, 1];

  filterRangeInPlace(arr3, 1, 4);

  console.log(arr3);


console.log('------------- 11')    
function func(string, sep) {
 
let mass = string.split(sep);
    return mass;
  }
 
console.log(func('https://meet.google.com/rsm-rznb-wqm', '.')); 

console.log('------------- 12')
function slArray(arr, startIndex, endIndex) {

    return arr.filter(number => (startIndex <= number && number <= endIndex));
}

let arr4 = [5, 3, 8, 1];

let filtered = slArray(arr4, 1, 4);

console.log(filtered);

console.log(arr4);



console.log('------------- 13')
function sum(x, y, z) {
    return x + y + z;
}

let numbers = [10, 20, 30];

console.log(sum(...numbers));
