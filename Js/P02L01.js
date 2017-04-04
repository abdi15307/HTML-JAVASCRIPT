/**
 * Created by Eigenaar on 23-11-2016.
 */
var antwoordnaam = prompt("Wat is uw naam?", "");

document.write("uw naam is: "+ antwoordnaam+"<br>");
alert("Beste  : "+ antwoordnaam);

var antwoordleeftijd = prompt(" wat is uw leeftijd");
document.write("uw leeftij is: " +antwoordleeftijd + "<br>");
if(antwoordleeftijd < 18){
    alert("U bent minderjarig");
} else {
    alert("u bent meerjarig");
}
var antwoordadres = prompt("Wat is uw adres?","");

document.write("uw adres is:" + antwoordadres);

var arrayGegevens;
arrayGegevens = [];
arrayGegevens[0] = antwoordnaam;
arrayGegevens[1] = antwoordleeftijd;
arrayGegevens[2] = antwoordadres;


document.write("<br><pre>" + arrayGegevens + "</pre>" );
function myFunction() {

}
arrayGegevens.forEach(myFunction);
