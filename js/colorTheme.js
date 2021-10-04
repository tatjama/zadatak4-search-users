  /*Start Change Color Theme*/
  function changeTheme(){    
      document.querySelector("body").classList.add("dark-mode");
      document.querySelector("body").classList.remove("light-mode");
      document.querySelector(".theme--light").style.display ="block";
      document.querySelector(".theme--dark").style.display="none"; 
  }
  function changeToLight(){
      document.querySelector("body").classList.remove("dark-mode");
      document.querySelector("body").classList.add("light-mode");
      document.querySelector(".theme--light").style.display ="none";
      document.querySelector(".theme--dark").style.display="block";
  }
  /*End Change Color Theme*/
