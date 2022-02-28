 let searchKeyword = document.querySelector("#search-input");
 searchKeyword.addEventListener("keyup", function (event) {
   if (event.code === "Enter" || event.code === "NumpadEnter") {
     search();
   }
 });

 function search() {
   let keyword = searchKeyword.value;
   location.replace(`https://www.google.com/search?q=${keyword}`);
 }