let btn = document.querySelectorAll(".btn");
let clear = document.querySelector(".clear");
let screen = document.querySelector(".screen");
let cal = document.querySelector(".cal");
let equal = "";

// btn.addEventListener("keypress", myScript);


// Add event listener on keypress
// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     alert(name);
//     if
//     ( screen.innerHTML == 0 && (name == "+" || name == "-" || name == "*" || name =="/"))
//     {}
//     else
//     {
//         // rakamlara her basıldığında ekleyip equal değişkeninde tutacak.
//         if (name == "Enter")
//         {

//         }
//         else
//         {
//             equal += name;
//             //   ekrana yazacak.
//               screen.innerHTML = equal;
//         }

//     }

//     if (name == "Enter")
//     {
//         equal = eval(equal);
//         screen.innerHTML = equal;
//     }
//   }, false);


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (
        // ekran 0 ve tıklanan tuş matematiksel tuş ise işlem yapmayacak
      screen.innerHTML == 0 &&
      (btn[i].innerHTML == "+" ||
        btn[i].innerHTML == "-" ||
        btn[i].innerHTML == "*" ||
        btn[i].innerHTML == "/")
    ) {
    } else {
        // rakamlara her basıldığında ekleyip equal değişkeninde tutacak.
      equal += btn[i].innerHTML;
    //   ekrana yazacak.
      screen.innerHTML = equal;
    }
  });
}

// ekranı silecek
clear.addEventListener("click", function () {
  screen.innerHTML = 0;
  equal = "";
});

// matematiksel işlemi yapıp ekrana yazacak.
cal.addEventListener("click", function () {

  if (equal =="")
  {
    alert("Hesaplama Yapılamaz");
  }
  else
  {
    equal = eval(equal);
    screen.innerHTML = equal;
  }

 
});
