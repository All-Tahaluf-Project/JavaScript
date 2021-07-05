

var UserName = "";
 UserName = prompt("Enter Your Name");

if (UserName == null || UserName == "") {
    Swal.fire(
        'Enter User Name Please.',
        'Error',
        'error'
    )


}
else {

    alert("Welcome " + UserName);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Do You Like Food.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            var FoorPrefer = prompt("what food cuisines you prefer (Entrees,Lunch,Sweet)");

            if (FoorPrefer == "Entrees") {

                var row = document.getElementById("row");
                row.hidden = false;

                document.getElementById("radio1").value = "Take this old party favourite to another flavour dimension!";
                var img1 = document.getElementById("img1");
                img1.src = "../../Img/Cards/Entrees/1.jpeg";

                document.getElementById("radio2").value = "Luxe up your dinner party with this seafood platter rather than the usual antipasto.";
                var img2 = document.getElementById("img2");
                img2.src = "../../Img/Cards/Entrees/2.jpeg";

                document.getElementById("radio3").value = "This wonderful Malay chicken dish creates flavour and excitement with simple cooking and just a few authentic ingredients.";
                var img3 = document.getElementById("img3");
                img3.src = "../../Img/Cards/Entrees/3.jpeg";
            } else {
                if (FoorPrefer == "Lunch") {

                    var row = document.getElementById("row");
                    row.hidden = false;

                    document.getElementById("radio1").value = "It’s a salad made with noodles.";
                    var img1 = document.getElementById("img1");
                    img1.src = "../../Img/Cards/Lunch/1.jpg";

                    document.getElementById("radio2").value = "This hearty meal is the perfect lunch during the chillier months.";
                    var img2 = document.getElementById("img2");
                    img2.src = "../../Img/Cards/Lunch/2.jpeg";

                    document.getElementById("radio3").value = "best veggie sandwich ever. Hummus and avocado provide the fiber and protein you need to stay fueled.";
                    var img3 = document.getElementById("img3");
                    img3.src = "../../Img/Cards/Lunch/3.jpg";
                } else {
                    if (FoorPrefer == "Sweet") {

                        var row = document.getElementById("row");
                        row.hidden = false;

                        document.getElementById("radio1").value = "These strawberry shortcake donuts are topped with crumbled shortcakes and filled with fresh whipped cream.";
                        var img1 = document.getElementById("img1");
                        img1.src = "../../Img/Cards/Sweet/1.jpg";

                        document.getElementById("radio2").value = "Homemade creamsicles made with fresh squeezed orange juice are the perfect summer treat.";
                        var img2 = document.getElementById("img2");
                        img2.src = "../../Img/Cards/Sweet/2.jpg";

                        document.getElementById("radio3").value = "Make a batch of gummy bear cookies. Yep, that’s right. Gummy bears! Think mini Pop-Tarts.";
                        var img3 = document.getElementById("img3");
                        img3.src = "../../Img/Cards/Sweet/3.jpg";
                    } else {
                        alert("Make Sure Enter One Of (Entrees,Lunch,Sweet)")
                    }
                }
            }

        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Welcome',
                'Welcome Visitor',
                'info'
            )
        }
    })
}


function ShowInfo() {
    var FoodValue = document.getElementsByName("Food");

    for (var i = 0, length = FoodValue.length; i < length; i++) {
        if (FoodValue[i].checked) {
            console.log(FoodValue[i].value + i);

            document.getElementById("ImageResult").src = document.getElementById("img" + (i + 1)).src;
            document.getElementById("TextInfo").innerText = FoodValue[i].value;

            document.getElementById("RowResult").hidden = false;
            break;
        }
    }

}

