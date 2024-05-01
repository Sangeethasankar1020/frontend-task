function summit() {
    let userFirstName = document.getElementById("first-name").value
    let userLastName = document.getElementById("last-name").value
    let userDob =document.getElementById("dob").value
    let email = document.getElementById("email").value
    let MobileNumber = document.getElementById("number").value
    let Address = document.getElementById("address").value
    let City = document.getElementById("city").value
    let pinCode = document.getElementById("pin-code").value
    let State = document.getElementById("state").value
    let Country = document.getElementById("country").value

    let msgFirstName = document.getElementById("name-error-first")
    let msgSecName = document.getElementById("name-error-last")
    let msgDob=document.getElementById("dob-error")
    let msgEmail = document.getElementById("mail-error")
    let msgNumber =document.getElementById("number-error")
    let msgAddress = document.getElementById("address-error")
    let msgCity = document.getElementById("city-error")
    let msgPincode =document.getElementById("pincode-error")
    let msgState =document.getElementById("state-error")
    let msgCountry = document.getElementById("country-error")

    // name
    let namePattern = /^[a-zA-Z]+$/;
    // first name
    if (userFirstName === "") {
        msgFirstName.textContent = "Enter valid first name";
    } else if (!namePattern.test(userFirstName)) {
        msgFirstName.textContent = "Invalid first name format";
    } else {
        msgFirstName.textContent = "";
        console.log(userFirstName,"first name")
    }
    // last name
    if (userLastName === "") {
        msgSecName.textContent = "Enter valid last name";
    } else if (!namePattern.test(userLastName)) {
        msgSecName.textContent = "Invalid last name format";
    } else {
        msgSecName.textContent = "";
        console.log(userLastName,"Last name")
    }
    // dob
    let dobPattern = /^\d{4}-\d{2}-\d{2}$/;
    if(userDob==""){
        msgDob.textContent="Enter valid D-O-B"
    }
    else if(!dobPattern.test(userDob)){
        msgDob.textContent="Invalid D-O-B"
    }
    else{
        msgDob.textContent=""
        console.log(userDob,"dob")
    }
    // email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email==""){
        msgEmail.textContent ="Enter a valid email"
    }
    else if(!emailRegex.test(email)){
        msgEmail.textContent ="Invalid Email"
    }
    else{
        msgEmail.textContent=""
        console.log(email,"email")
    }
    // mobile
    const mobileRegex =/^[0-9]{10}$/
    if(MobileNumber==""){
        msgNumber.textContent="Enter a valid mobile number"
    }
    else if(!mobileRegex.test(MobileNumber)){
        msgNumber.textContent="Invalid Mobile Number"
    }
    else{
        msgNumber.textContent=""
        console.log(MobileNumber,"Mobile number")
    }
    // address
    const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
    if(Address==""){
        msgAddress.textContent="Enter valid Address"
    }
    else if(!addressRegex.test(Address)){
        msgAddress.textContent="Invalid Address"
    }
    else{
        msgAddress.textContent=""
        console.log(Address,"Address")
    }
    // city
    if(City==""){
        msgCity.textContent="Enter valid City Name"
    }
    else if(!namePattern.test(City)){
        msgCity.textContent="Invalid City Name"
    }
    else{
        msgCity.textContent=""
        console.log(City,"City name")
    }
    // pincode
    let pinCodeRegexp =/^[0-9]{6}$/;
    if(pinCode==""){
        msgPincode.textContent="Enter valid Pincode";
    }
    else if(!pinCodeRegexp.test(pinCode)){
        msgCity.textContent="Invalid Pincode";
    }
    else{
        msgCity.textContent="";
        console.log(pinCode,"pin code")
    }
    // state
    if(State==""){
        msgState.textContent="Enter valid state name"
    }
    else if(!namePattern.test(State)){
        msgState.textContent="Invalid State Name"
    }
    else{
        msgState.textContent=""
        console.log(State,"State Name")
    }
    // country
    if(Country==""){
        msgCountry.textContent="Enter valid Country Name"
    }
    else if (!namePattern.test(Country)){
        msgCountry.textContent="Invalid Country Name"
    }
    else{
        msgCountry.textContent=""
        console.log(Country,"Country Name")
    }
    // reset btn
    document.getElementById("myForm").addEventListener("reset", function(event) {
        console.log("Form reset!");
    });   
    // radio gender
        let maleChecked = document.getElementById("male").checked;
        let femaleChecked = document.getElementById("female").checked;
    
        if (!maleChecked && !femaleChecked) {
            document.getElementById("gender-error").textContent = "Please select a gender";
            return false;
        } else {
            document.getElementById("gender-error").textContent = "";
            console.log(maleChecked,femaleChecked,"gender")
            return true;
        }
    // course checkbox
    let bcaChecked = document.getElementById("bca").checked;
    let bcomChecked = document.getElementById("bcom").checked;
    let bscChecked = document.getElementById("bsc").checked;

    if (!bcaChecked && !bcomChecked && !bscChecked) {
        document.getElementById("courses-error").textContent = "Please select at least one course";
        return false;
    } else {
        document.getElementById("courses-error").textContent = "";
        return true;
    }
    
}
