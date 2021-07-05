var Boxtextarea = document.getElementById("textarea");

var FirstName = document.getElementById("FirstName");
var LastName = document.getElementById("LastName");
var Number = document.getElementById("Number");
var Email = document.getElementById("Email");
var FilePDF = document.getElementById("FilePDF");
var img = document.getElementById("img");
var imageSize = 0;
var pdfSize = 0;


function Submit() {


    if (!CheckImage() || !CheckPDF()) {

    } else {

        Boxtextarea.value = "FirstName : " + FirstName.value + "   ";
        Boxtextarea.value += "LastName : " + LastName.value + "   ";
        if (!isNaN(Number.value)) {
            Boxtextarea.value += "Number : " + Number.value + "   ";
        }
        Boxtextarea.value += "Email : " + Email.value + "   ";
        Boxtextarea.value += "Pdf File Size : " + pdfSize + "MB   ";
        Boxtextarea.value += "Image File Size : " + imageSize + "MB   ";
    }
    return false;
}


function CheckImage() {
    var Path = document.getElementById("img").value;
    var extensionImg = Path.substr(Path.lastIndexOf('.') + 1);
    extensionImg = extensionImg.toLowerCase();
    var validExtensions = ['jpg', 'png'];
        if ($.inArray(extensionImg, validExtensions) == -1) {
            Swal.fire({
                icon: 'error',
                title: 'Extension Error',
                text: 'The File Should be jpg Or png Extension',
            });
            return false;
        } else {

            var Size = document.getElementById("img").files[0].size / 1024 / 1024;

            if (Size > 0.5) {
                Swal.fire({
                    icon: 'error',
                    title: 'Size Error',
                    text: 'The Size Image Should be Less Than 500KB',
                });
                return false;
            } else {
                imageSize = Size;
                Swal.fire({
                    icon: 'success',
                    title: 'Good Job',
                });
                return true;
            }
        }
}

function CheckPDF() {
    var Path = document.getElementById("FilePDF").value;
    var extensionPDF = Path.substr(Path.lastIndexOf('.') + 1);
    if (extensionPDF != 'pdf') {
        Swal.fire({
            icon: 'error',
            title: 'Extension Error',
            text: 'The File Should be pdf Extension',
        });
        return false;
    } else {

        var Size = document.getElementById("FilePDF").files[0].size / 1024 / 1024;

        if (Size > 5) {
            Swal.fire({
                icon: 'error',
                title: 'Size Error',
                text: 'The Size Pdf File Should be Less Than 5MB',
            });
            return false;
        } else {
            pdfSize = Size;
            Swal.fire({
                icon: 'success',
                title: 'Good Job',
            });
            return true;
        }
    }
}



