/**
 * Created by Eigenaar on 31-1-2017.
 */

function checkNotEmpty(inputId, spanId) {
    //alert(inputId);
    if (document.getElementById(inputId).value === "") {
        document.getElementById(spanId).innerHTML="Dit veld moet worden ingevuld";
    }
    else{
        document.getElementById(spanId).innerHTML="OK";
    }

}
