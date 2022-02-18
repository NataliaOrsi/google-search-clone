  let searchKeyword = document.querySelector("#search-input");
  searchKeyword.addEventListener("keyup", function(event){
      if(event.code === "Enter") {
          search();
      }
  });

  function search() {
    let keyword = searchKeyword.value;
    window.location.href = `https://www.google.com/search?q=${keyword}&sxsrf=APq-WBvN3zi75w61u2QjK3Hgl3eftQ0mvA%3A1645111667253&source=hp&ei=c2kOYtavDZX4sAfJpoX4CQ&iflsig=AHkkrS4AAAAAYg53g8tOdZUmbRcYNj3OxrVLPV0DhChS&ved=0ahUKEwiWtanEhof2AhUVPOwKHUlTAZ8Q4dUDCAY&uact=5&oq=${keyword}&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBwguENQCEEMyBAgAEEMyCgguEMcBENEDEEMyBAgAEEMyBAgAEEMyBwguENQCEEMyBwguENQCEEMyBAgAEEMyBAgAEEM6BwgjEOoCECc6BQgAEIAEOgsILhCABBDHARCjAjoICC4QgAQQ1AI6CwguEIAEEMcBENEDUP0QWKgWYJgaaAFwAHgAgAF9iAHwA5IBAzMuMpgBAKABAbABCg&sclient=gws-wiz`;;
}
 
