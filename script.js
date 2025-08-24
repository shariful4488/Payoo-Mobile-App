// login button funtion
document.getElementById("login-button").addEventListener("click", function(e){
    e.preventDefault();
    // console.log("Login button clicked");
    // console.log(e);
    const mobileNumber = 1234567890; // Example mobile number
    const pinNumer = 1234; // Example pin number

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    
    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumer){
        // Redirect to the home page
        window.location.href="./main.html"

    } else {
        console.log("Incorrect values");
    }
        
})