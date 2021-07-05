

console.log("AVC");
var AllNumbers = document.getElementsByName("Number");
var AllProcess = document.getElementsByName("Process");
var AllGoodResult = document.getElementsByName("GoodResult");
var AllBadResult = document.getElementsByName("BadResult");
var AllInputBox = document.getElementsByName("InputBox");
var Audio = document.getElementById("Audio");
var FinalResult = document.getElementById("FinalResult");
var MyResult = 0;
var TotalFinishCount = 0;

GenerateNumbers();
GenerateProcess();

function GenerateNumbers() {

    for (let i = 0; i < AllNumbers.length; i++) {
        AllNumbers[i].innerText = Math.floor(Math.random() * 20) + 1;
    }
     
}

function GenerateProcess() {

    for (let i = 0; i < AllProcess.length; i++) {
        let P = Math.floor(Math.random() * 4) + 1;
        console.log(P);
        switch (P) {
            case 1: {
                AllProcess[i].innerText = "+"
                break;
            }
            case 2: {
                AllProcess[i].innerText = "-"
                break;
            }
            case 3: {
                AllProcess[i].innerText = "*"
                break;
            }
            case 4: {
                AllProcess[i].innerText = "/"
                break;
            }
        }
    }
}



function SubmitOneQuestion(indexNumber,index)
{
    if (isNaN(AllInputBox[index].value))
    {
        Swal.fire(
            'Make Sure Input Value',
            '',
            'error'
        )
    } else {
        switch (AllProcess[index].innerText) {
            case "+": {
                if (parseFloat(AllNumbers[indexNumber].innerText) + parseFloat(AllNumbers[indexNumber + 1].innerText) == AllInputBox[index].value) {
                    AllBadResult[index].style.display = "none";
                    AllGoodResult[index].style.display = "block";
                    Audio.play();
                    MyResult++;
                } else {
                    AllBadResult[index].style.display = "block";
                    AllGoodResult[index].style.display = "none";
                }
                break;
            }
            case "-": {
                if (parseFloat(AllNumbers[indexNumber].innerText) - parseFloat(AllNumbers[indexNumber + 1].innerText) == AllInputBox[index].value) {
                    AllBadResult[index].style.display = "none";
                    AllGoodResult[index].style.display = "block";
                    Audio.play();
                    MyResult++;
                } else {
                    AllBadResult[index].style.display = "block";
                    AllGoodResult[index].style.display = "none";
                }
                break;
            }
            case "*": {
                if (parseFloat(AllNumbers[indexNumber].innerText) * parseFloat(AllNumbers[indexNumber + 1].innerText) == AllInputBox[index].value) {
                    AllBadResult[index].style.display = "none";
                    AllGoodResult[index].style.display = "block";
                    Audio.play();
                    MyResult++;
                } else {
                    AllBadResult[index].style.display = "block";
                    AllGoodResult[index].style.display = "none";
                }
                break;
            }
            case "/": {
                if (parseFloat(AllNumbers[indexNumber].innerText) / parseFloat(AllNumbers[indexNumber + 1].innerText) == AllInputBox[index].value) {
                    AllGoodResult[index].style.display = "block";
                    AllBadResult[index].style.display = "none";
                    Audio.play();
                    MyResult++;
                } else {
                    AllGoodResult[index].style.display = "none";
                    AllBadResult[index].style.display = "block";
                }
                break;
            }
        }

        TotalFinishCount++;
        AllInputBox[index].readOnly = true;
    }
}



function Finish() {

    if (TotalFinishCount == AllInputBox.length) {
        FinalResult.innerHTML = "Final Result : " + MyResult + " Of " + AllInputBox.length
    } else {
        Swal.fire(
            'Make Sure Finish All Problems',
            '',
            'error'
        )
    }
}

