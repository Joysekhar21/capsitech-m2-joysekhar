document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('hidden');
  });
  
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    const name = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const cv = document.getElementById("cv");
    const dob = document.getElementById("dob");
    const gender = document.getElementById("gender");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const country = document.getElementById("country");
    const address = document.getElementById("address");
    const message = document.getElementById("message");
    const counselingYes = document.getElementById("counselingYes");
    const counselingNo = document.getElementById("counselingNo");
    const terms = document.getElementById("terms");

    if (!name.value.trim()) {
        document.getElementById("nameError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("nameError").classList.add("hidden");
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("emailError").classList.add("hidden");
    }
    
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        document.getElementById("phoneError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("phoneError").classList.add("hidden");
    }
    
    if (!dob.value.trim()) {
        document.getElementById("dbError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("dbError").classList.add("hidden");
    }

    if(!gender.value.trim()){
        document.getElementById("GenderError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("GenderError").classList.add("hidden");
    }

    if(!city.value.trim()){
        document.getElementById("cityError").classList.remove("hidden");
        isValid = false;
    }
    else{
        document.getElementById("cityError").classList.add("hidden");
    }

    if(!state.value.trim()){
        document.getElementById("stateError").classList.remove("hidden");
        isValid = false;
    }
    else{
        document.getElementById("stateError").classList.add("hidden");
    }

    if(!country.value.trim()){
        document.getElementById("countryError").classList.remove("hidden");
        isValid = false;
    }else{
        document.getElementById("countryError").classList.add("hidden");
    }

    if(!address.value.trim()){
        document.getElementById("addressError").classList.remove("hidden");
        isValid = false;
    }
    else{
        document.getElementById("addressError").classList.add("hidden");
    }

    if(!message.value.trim()){
        document.getElementById("messageError").classList.remove("hidden");
        isValid = false;
    }
    else{
        document.getElementById("messageError").classList.add("hidden");
    }

    if(!counselingYes.checked && !counselingNo.checked){
        document.getElementById("counselingError").classList.remove("hidden");
        isValid = false;
    }
    else{
        document.getElementById("counselingError").classList.add("hidden");
    }

    const allowedExtensions = ["pdf", "doc", "docx"];
    if (cv.files.length > 0) {
        const fileExtension = cv.files[0].name.split(".").pop().toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            document.getElementById("cvError").classList.remove("hidden");
            isValid = false;
        } else {
            document.getElementById("cvError").classList.add("hidden");
        }
    }  
    if (cv.files.length === 0) {
        document.getElementById("cvError").classList.remove("hidden");
    }

    if (!terms.checked) {
        document.getElementById("termsError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("termsError").classList.add("hidden");
    }
    
    if (isValid) {
        document.getElementById("successMessage").classList.remove("hidden");
        setTimeout(() => document.getElementById("successMessage").classList.add("hidden"), 3000);
        document.getElementById("contactForm").reset();
    }
});