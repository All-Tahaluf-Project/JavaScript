/*document.write("ABC");*/

//function ChangeValue() {
//    console.log("Start");
//    var h1 = document.getElementById("h1");

//    h1.innerHTML.valueOf() = "ABC";
//}


//function Sum(A, B) {
//    return A + B;
//}

//document.write(Sum(1, 2));

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

alert("Start");
sleep(3000);

alert("End");

function Show() {
    alert("Welcome");

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}
Show();



if (confirm("Are You In Tahaluf Team")) {
    alert("Welcome");

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
} else {
    alert("Good Bay");

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
    })
}







//var x = 5;

//for (let x = 0; x < 10; x++) {
//    console.log(x);
//}

//console.log(x);

//Print
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9
//5














//var x = 5;

//for (var x = 0; x < 10; x++) {
//    console.log(x);
//}

//console.log(x);

//Print
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9
//10



//const car = { Name: "Car", Date: "2020" };

//console.log(car.Name + "   " + car.Date);

//car.Name = "NewCar";
//car.Date = "New2020";
//console.log(car.Name + "   " + car.Date);

////Bad Request
//car = { Name: "NewCar", Date: "New2020" };
//console.log(car.Name + "   " + car.Date);




const arr = ["1", "2", "3"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr[0] = "A";
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Bad Request
arr = ["A", "B", "C"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



