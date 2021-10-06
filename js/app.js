// On Load Render default template - user octocat
const handleLoad = () => {    
     fetchUser("octocat").then((data) => {
        renderUserData(data)
     });
}

const main = document.querySelector(".main");
const input = document.querySelector(".search__input");  
const submitButton = document.querySelector(".search__btn");
const searchErrorMessage = document.querySelector(".search__error--no-result");
const errorMessage = document.querySelector(".search__error--message");
const searchFormat = /^[A-Za-z0-9]*$/;
  
    
const fetchUser = async(user) => {    
    let response = await fetch(`https://api.github.com/users/${user}`);
        if (!response.ok) {
          if(response.status === 404){
            searchErrorMessage.style.display = "block";
          }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
        return await response.json();
}
  
const handleSubmit = (e) => {
    e.preventDefault();
    /*Remove Messages */
    searchErrorMessage.style.display = "none";
    errorMessage.style.display = "none";
        //Check is the input value is empty
        if(!input.value){
           errorMessage.innerHTML = "Search cannot be empty!";
           errorMessage.style.display = "block";
          }else {
            // Check is the input value contains only numbers and letters
            if(!input.value.match(searchFormat)){
              errorMessage.innerHTML = "Only letters and numbers!";
              errorMessage.style.display = "block";
            }else{
              fetchUser(input.value).then((data) => {
              renderUserData(data)
            }).catch((error) => {
              console.log(error);
            });
            }          
          } 
}
    
const outsideClick = (e) => {
    const targetElement = e.target;
    if(targetElement != submitButton){
        searchErrorMessage.style.display = "none";
        errorMessage.style.display = "none";
        input.value = "";
    }
}  
    
submitButton.addEventListener("click", handleSubmit);
document.addEventListener("click", outsideClick);