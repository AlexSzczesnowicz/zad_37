
let where_paragraf = document.getElementById("text");

function dodac (where){
    where.textContent = "text przykladowy hello anybody";
}
function usyn (where){
    where.textContent = " ";
}


document.getElementById("dodaj").onclick = function(){
    dodac(where_paragraf);
}
document.getElementById("usyn").onclick = function(){
    usyn(where_paragraf);
}
