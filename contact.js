// Creates a variable from the submit button on the form //

const buttonSubmit = document.querySelector("#btn-submit");

// Some of the world's most pointless JavaScript. Sends people to a 'submission successful' page on click. It should have been done via HTML, but I wanted to get some JavaScript in.//

const submitForm = () => {
  buttonSubmit.addEventListener("click", () => {
    document.location.href ="contact-submit.html";
 });    
}
   
submitForm()

   




  



      
       
  
