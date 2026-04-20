function submitApplication() {
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let position = document.getElementById("position").value;
    let coverLetter = document.getElementById("coverLetter").value;

    if(name === "" || email === "" || phone === "" || position === "" || coverLetter === "") {
        alert("Please fill all details");
        return;
    }

    alert("Application Submitted Successfully ✅");
}
