const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const formEl = document.getElementById("contact_form");
const submitEl = document.getElementById("submit");

function sendEmail(){
    Email.send({
        SecureToken: "859a6903-c697-4c1b-a332-756e9e033e5b",
        To: "vkosgei37@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New message from my website",
        Body: "Name: " + nameEl.value + "<br>Email: " + emailEl.value + "<br>Subject: " + document.getElementById("subject").value + "<br>Message: " + document.getElementById("message").value,
    }).then(
        message => {
            alert("Message sent succesfully!", message);
            resetForm();
        }
    ).catch(
        error => alert("Error sending email:", error)
    );
}

function resetForm() {
    // Reset form fields
    nameEl.value = "";
    emailEl.value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}

formEl.addEventListener("submit", (e)=>{
    e.preventDefault();

    sendEmail();
});
