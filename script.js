function submit() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("LastName").value;
    var email = document.getElementById("email").value;
    var College = document.getElementById("CollegeName").value;
    var Password = document.getElementById("psw").value;
    var repeatPassword = document.getElementById("psw-repeat").value;
     if (Password != repeatPassword) {
        alert("Password not matching");
}
    else {
        alert("Registration Successful");
    }
    
}   
function display(){
    alert("First Name: " + firstName + "Last Name: " + lastName + "Email: " + email + "College Name: " + College);
}

