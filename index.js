function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("users-type");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function searchFunction(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("writeUser-type");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

let xyz=document.querySelector("#ram");
let hide=document.querySelector(".hide");
let headerdetail=document.querySelector(".userlist");
xyz.addEventListener("click", function(){
  hide.style.display="block";
  headerdetail.style.display="block";
  containerwrite.style.display="none";
  
 });


let write=document.querySelector("#write-message");
let containerwrite=document.querySelector(".newMessage");

write.addEventListener("click", function(){
  hide.style.display="none";
  containerwrite.style.display="block";
  headerdetail.style.display="block";
  
 });






// console.log(containerwrite);