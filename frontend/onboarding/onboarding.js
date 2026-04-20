function saveStep1() {
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;

    if(name === "" || email === "" || phone === "" || dob === "" || address === "") {
        alert("Please fill all details");
        return;
    }

    localStorage.setItem("ob_name", name);
    localStorage.setItem("ob_email", email);
    localStorage.setItem("ob_phone", phone);
    localStorage.setItem("ob_dob", dob);
    localStorage.setItem("ob_address", address);

    window.location.href = "step2.html";
}

function saveStep2() {
    let idProof = document.getElementById("idProof").value;
    let addressProof = document.getElementById("addressProof").value;
    let resume = document.getElementById("resume").value;

    if(idProof === "" || addressProof === "" || resume === "") {
        alert("Please upload all documents");
        return;
    }

    localStorage.setItem("ob_idProof", idProof);
    localStorage.setItem("ob_addressProof", addressProof);
    localStorage.setItem("ob_resume", resume);

    window.location.href = "step3.html";
}

function saveStep3() {
    let department = document.getElementById("department").value;
    let role = document.getElementById("role").value;
    let joinDate = document.getElementById("joinDate").value;
    let manager = document.getElementById("manager").value;

    if(department === "" || role === "" || joinDate === "" || manager === "") {
        alert("Please fill all details");
        return;
    }

    localStorage.setItem("ob_department", department);
    localStorage.setItem("ob_role", role);
    localStorage.setItem("ob_joinDate", joinDate);
    localStorage.setItem("ob_manager", manager);

    window.location.href = "step4.html";
}

function showSummary() {
    let summary = document.getElementById("summary");
    if(!summary) return;

    summary.innerHTML =
        "<p><b>Name:</b> " + (localStorage.getItem("ob_name") || "-") + "</p>" +
        "<p><b>Email:</b> " + (localStorage.getItem("ob_email") || "-") + "</p>" +
        "<p><b>Phone:</b> " + (localStorage.getItem("ob_phone") || "-") + "</p>" +
        "<p><b>Date of Birth:</b> " + (localStorage.getItem("ob_dob") || "-") + "</p>" +
        "<p><b>Address:</b> " + (localStorage.getItem("ob_address") || "-") + "</p>" +
        "<p><b>Department:</b> " + (localStorage.getItem("ob_department") || "-") + "</p>" +
        "<p><b>Role:</b> " + (localStorage.getItem("ob_role") || "-") + "</p>" +
        "<p><b>Joining Date:</b> " + (localStorage.getItem("ob_joinDate") || "-") + "</p>" +
        "<p><b>Manager:</b> " + (localStorage.getItem("ob_manager") || "-") + "</p>";
}

function completeOnboarding() {
    let agree = document.getElementById("agree").checked;

    if(!agree) {
        alert("Please confirm your details");
        return;
    }

    alert("Onboarding Completed Successfully 🎉");
    localStorage.clear();
    window.location.href = "onboarding.html";
}
