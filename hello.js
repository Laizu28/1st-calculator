//get number---------------
function number(num){
    var result = document.getElementById("input");
    result.value += num;

}
//get result------------

function result(){
    var result = document.getElementById("input");
   result.value = eval(result.value)
}
//clear result------------
function clearResult(){
    var result = document.getElementById("input");
  result.value = "";
}
//delete one by one-----
function deleteChar (){
    var number = document.getElementById("input");
   var remove = number.value;
   remove = remove.slice(0, -1); //remove last character from a strings
   number.value = remove;
}