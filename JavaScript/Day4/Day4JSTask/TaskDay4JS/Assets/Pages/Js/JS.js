


var ArrayCalculater = [];
var Value = 0;

function Plass() {
    var Number = document.getElementById("NumberBox").value;

    Value += parseFloat(Number);
    if (ArrayCalculater.length != 0) {
        ArrayCalculater.push(" + ");
    }
    ArrayCalculater.push(Number);

    document.getElementById("NumberBox").value = 0;
    document.getElementById("Result").innerText = Value;
}

function Minus() {
    var Number = document.getElementById("NumberBox").value;

        Value -= parseFloat(Number);
        if (ArrayCalculater.length != 0) {
            ArrayCalculater.push(" - ");
        }
        ArrayCalculater.push(Number);

    document.getElementById("NumberBox").value = 0;
    document.getElementById("Result").innerText = Value;
}

function Divide() {
    var Number = document.getElementById("NumberBox").value;

    if (Number == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Number Should Not Equal 0.',
        })
    } else {
        Value /= parseFloat(Number);
        if (ArrayCalculater.length != 0) {
            ArrayCalculater.push(" / ");
        }
        ArrayCalculater.push(Number);

        document.getElementById("NumberBox").value = 0;
        document.getElementById("Result").innerText = Value;
    }
}

function Multip() {
    var Number = document.getElementById("NumberBox").value;

    Value *= parseFloat(Number);
    if (ArrayCalculater.length != 0) {
        ArrayCalculater.push(" * ");
    }
    ArrayCalculater.push(Number);

    document.getElementById("NumberBox").value = 0;
    document.getElementById("Result").innerText = Value;
}

function ResultShow()
{
    var FullResult = document.getElementById("FullResult");
    FullResult.innerText = "";
    if (ArrayCalculater.length == 0 || Value == NaN) {
        FullResult.innerText = "Empty";
    } else {
        
        Result.innerText = "";
        for (let i = 0; i < ArrayCalculater.length; i++) {
            FullResult.innerText += ArrayCalculater[i];
        }

        FullResult.innerText += " = " + Value;;
    }
}

