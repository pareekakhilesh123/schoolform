document.getElementById("student_name").addEventListener("input", function() {
    resetError(document.getElementById("student_name_error"));
    resetCSS(document.getElementById("student_name"));
});

document.getElementById("father_name").addEventListener("input", function() {
    resetError(document.getElementById("father_name_error"));
    resetCSS(document.getElementById("father_name"));
});

document.getElementById("mother_name").addEventListener("input", function() {
    resetError(document.getElementById("mother_name_error"));
    resetCSS(document.getElementById("mother_name"));
});

document.getElementById("dob").addEventListener("input", function() {
    resetError(document.getElementById("dob_error"));
    resetCSS(document.getElementById("dob"));
});
document.getElementById("male").addEventListener("click", function() {
    resetError(document.getElementById("gender_error"));
});

document.getElementById("female").addEventListener("click", function() {
    resetError(document.getElementById("gender_error"));
});

document.getElementById("address").addEventListener("input", function() {
    resetError(document.getElementById("address_error"));
    resetCSS(document.getElementById("address"));
});

document.getElementById("present_address").addEventListener("input", function() {
    resetError(document.getElementById("present_address_error"));
    resetCSS(document.getElementById("present_address"));
});

document.getElementById("religion").addEventListener("input", function() {
    resetError(document.getElementById("religion_error"));
    resetCSS(document.getElementById("religion"));
});

document.getElementById("mobile_no").addEventListener("input", function() {
    resetError(document.getElementById("mobile_no_error"));
    resetCSS(document.getElementById("mobile_no"));
});

document.getElementById("aadhar_no").addEventListener("input", function() {
    resetError(document.getElementById("aadhar_no_error"));
    resetCSS(document.getElementById("aadhar_no"));
});

document.getElementById("pre_school_name").addEventListener("input", function() {
    resetError(document.getElementById("pre_school_name_error"));
    resetCSS(document.getElementById("pre_school_name"));
});

document.getElementById("agree").addEventListener("click", function() {
    resetError(document.getElementById("agree_error"));
});

document.getElementById("division").addEventListener("input", function() {
    resetError(document.getElementById("division_error"));
    resetCSS(document.getElementById("division"));
});

document.getElementById("district").addEventListener("input", function() {
    resetError(document.getElementById("district_error"));
    resetCSS(document.getElementById("district"));
});

document.getElementById("present_division").addEventListener("input", function() {
    resetError(document.getElementById("present_division_error"));
    resetCSS(document.getElementById("present_division"));
});

document.getElementById("presnt_district").addEventListener("input", function() {
    resetError(document.getElementById("presnt_district_error"));
    resetCSS(document.getElementById("presnt_district"));
});



// function getData(e) {
//     console.log(e)
//     resetError(document.getElementById("student_name_error"));
//         resetCSS(document.getElementById("student_name"));   
// }

function data() {
    var sname = document.getElementById("student_name").value;
    var fname = document.getElementById("father_name").value;
    var mname = document.getElementById("mother_name").value;
    var birth = document.getElementById("dob").value;
    var mgender = document.getElementById("male").checked;;
    var fgender = document.getElementById("female").checked;;
    var divi = document.getElementById("division").value;
    var dist = document.getElementById("district").value;
    var add = document.getElementById("address").value;
    var prediv = document.getElementById("present_division").value;
    var predis = document.getElementById("presnt_district").value;
    var preadd = document.getElementById("present_address").value;
    var relig = document.getElementById("religion").value;
    var mob = document.getElementById("mobile_no").value;
    var aad = document.getElementById("aadhar_no").value;
    var preschool = document.getElementById("pre_school_name").value;
    var agr = document.getElementById("agree").checked;


    
    

    // if (sname === "" || fname === "" || mname === "" || birth === "" || divi === "" || dist === "" || add === "" || prediv === "" || predis === "" || preadd === "" || relig === "" || mob === "" || aad === "" || preschool === "" || !agr) {
    //     alert("All fields are mandatory");
    //     return false;
    // } 
    // if (mob.length !== 10 || isNaN(mob)) {
    //     alert("Mobile number should be 10 digits  only numbers.");
    //     return false;
    // }
    //  if (aad.length !== 12 || isNaN(aad)) {
    //     alert("Aadhar number should be 12 digits only numbers.");
    //     return false;
    // }
 let valid = true
    if (sname === "") {
        setCSS(document.getElementById("student_name"));
        setError(document.getElementById("student_name_error"), "Student Name can't be blank");
        
        valid = false;
    }
    else {
        resetCSS(document.getElementById("student_name"));
    }

   
    
    

    if (fname === "") {
        setCSS(document.getElementById("father_name"));
        setError(document.getElementById("father_name_error"), "Father Name can't be blank");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("father_name"));
    }


    if (mname === "") {
        setCSS(document.getElementById("mother_name"));
        setError(document.getElementById("mother_name_error"), "Mother Name can't be blank");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("mother_name"));
    }

    if (birth === "") {
        setCSS(document.getElementById("dob"));
        setError(document.getElementById("dob_error"), "Please enter your date of birth");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("dob"));
    }
    
    if (!mgender && !fgender) {
        setError(document.getElementById("gender_error"), "Please select a gender");
        valid = false;
    }
    else {
        resetError(document.getElementById("gender_error"));
    }


    if (add === "") {
        setCSS(document.getElementById("address"));
        setError(document.getElementById("address_error"), "Please enter your Address");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("address"));
    }

    if (preadd === "") {
        setCSS(document.getElementById("present_address"));
        setError(document.getElementById("present_address_error"), "Please enter your Present Address");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("present_address"));
    }


    if (relig === "") {
        setCSS(document.getElementById("religion"));
        setError(document.getElementById("religion_error"), "Please enter your religion");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("religion"));
    }

    if (mob.length !== 10 || isNaN(mob)) {
        setCSS(document.getElementById("mobile_no"));
        setError(document.getElementById("mobile_no_error"), "Please enter your 10 digit Mobile Number");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("mobile_no"));
    }

    if (aad.length !== 12 || isNaN(aad)) {
        setCSS(document.getElementById("aadhar_no"));
        setError(document.getElementById("aadhar_no_error"), "Please enter your 12 Digit Aadhar Number");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("aadhar_no"));
    }

    if (preschool === "") {
        setCSS(document.getElementById("pre_school_name"));
        setError(document.getElementById("pre_school_name_error"), "Please enter your School Name");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("pre_school_name"));
    }
    if (division === "") {
        setError(document.getElementById("division_error"), "Please select a division.");
        valid = false;
    }
    else {
        resetCSS(document.getElementById("division"));
    }
    
    
    if (!agr) {
        setCSS(document.getElementById("agree_error"));
        setError(document.getElementById("agree_error"), "You must agree to the terms");
        valid = false;
    } else {
        resetError(document.getElementById("agree_error"));
    }

    if (divi === "") {
        setCSS(document.getElementById("division"));
        setError(document.getElementById("division_error"), "Please select a division");
        valid = false;
    } else {
        resetCSS(document.getElementById("division"));
    }

    if (dist === "") {
        setCSS(document.getElementById("district"));
        setError(document.getElementById("district_error"), "Please select a division");
        valid = false;
    } else {
        resetCSS(document.getElementById("district"));
    }

    if (prediv === "") {
        setCSS(document.getElementById("present_division"));
        setError(document.getElementById("present_division_error"), "Please select a division");
        valid = false;
    } else {
        resetCSS(document.getElementById("present_division"));
    }

    if (predis === "") {
        setCSS(document.getElementById("presnt_district"));
        setError(document.getElementById("presnt_district_error"), "Please select a division");
        valid = false;
    } else {
        resetCSS(document.getElementById("presnt_district"));
    }

   

    

    return valid;
}

function setCSS(element) {
    element.classList.add("error");
}

function resetCSS(element) {
    element.classList.remove("error"); 
}

function setError(element, message) {
    element.innerHTML = message;
}

function resetError(element) {
    element.innerHTML = ""; 
}


