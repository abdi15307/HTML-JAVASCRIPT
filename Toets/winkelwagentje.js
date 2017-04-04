/**
 * Created by Eigenaar on 24-1-2017.
 */
//document.getElementById('winkelwagen').addEventListener('submit', function (event) {
//    event.preventDefault();
function berekentotaal(){
    var value=1;
    var aantal1= parseInt(document.getElementById('aantal1').value)||0;
    var aantal2= parseInt(document.getElementById('aantal2').value)||0;
    var aantal3= parseInt(document.getElementById('aantal3').value)||0;



    var prijs1=1.50;
    var prijs2=1.55;
    var prijs3=1.45;

    var subtotaal1= prijs1*aantal1;
    var subtotaal2 = prijs2*aantal2;
    var subtotaal3= prijs3*aantal3;

     var uitkomstprijs= (subtotaal1+subtotaal2+subtotaal3).toFixed(2);
    if(document.getElementById("emmer").checked == true){

        uitkomstprijs=(parseFloat(uitkomstprijs)+ parseFloat(1.50)).toFixed(2);
    }
    if(document.getElementById("borstel").checked == true){


        uitkomstprijs=(parseFloat(uitkomstprijs)+parseFloat(24.95)).toFixed(2);
    }

    if(document.getElementById("bezorging2").checked == true){
        uitkomstprijs=(parseFloat(uitkomstprijs)+parseFloat(4.95)).toFixed(2);


    }
    if(document.getElementById("bezorging").checked == true) {



        uitkomstprijs=(parseFloat(uitkomstprijs)+parseFloat(0.00)).toFixed(2);

    }

    document.getElementById('totaal').innerHTML = 'Totaalprijs: \u20ac'+ uitkomstprijs;
    //alert(document.getElementById('aantal1').value);
}

function subtotaal1F() {
    var aantal1= parseInt(document.getElementById('aantal1').value)||0;
    var prijs1=1.50;
    var subtotaal1= prijs1*aantal1;
    document.getElementById('subtotaal1').innerHTML = 'Subtotaal: '+subtotaal1.toFixed(2);

}
function subtotaal2F() {
    var aantal2= parseInt(document.getElementById('aantal2').value)||0;
    var prijs2=1.55;
    var subtotaal2= prijs2*aantal2;
    document.getElementById('subtotaal2').innerHTML = 'Subtotaal: '+subtotaal2.toFixed(2);

}
function subtotaal3F() {
    var aantal3= parseInt(document.getElementById('aantal3').value)||0;
    var prijs3=1.45;
    var subtotaal3= prijs3*aantal3;
    document.getElementById('subtotaal3').innerHTML = 'Subtotaal: '+subtotaal3.toFixed(2);

}