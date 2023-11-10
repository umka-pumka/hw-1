let num = -99;

if(num < 0) {
    console.log("Число: " + "Отрицательное");
} else if(num !== 0){
    console.log("Число: " + "Положительное");
}


function check(num) {
    return (-1) ** num + 1 ? "чётное" : "нечётное";
  }
  const n = prompt("Введите целое число.");
  alert(check(n));
