var Pizzas = ["Margreta",
                "Double cheese margreta",
                "Barbeque chicken pizza"];

function getmenu() {
    Pizzas.sort();
    var html = "<ol class='menulist'>";
        for (i = 0; i < Pizzas.length; i++) {
            html = html + "<li>" + Pizzas[i] + "</li>";
        }
    html += "</ol>"
    
    document.getElementById("display_div").innerHTML = html;

    console.log("finished getmenu()");
}

function additem() {
    var html;
    var item = document.getElementById("add_item").value;
    Pizzas.push(item);
    Pizzas.sort();
    html = "<section class='card'> ";
    for (i = 0; i < Pizzas.length; i++) {
        html = html + "<div class='card'>" + "<img src='images/pizzaImg.png'>" + Pizzas[i] + "</div>";
        console.log("finished" + Pizzas[i]);        
    }
    html = html + "</section>";
    document.getElementById("display_addedmenu").innerHTML = html;
    console.log("finished additem()");
}