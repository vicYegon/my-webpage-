const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const formEl = document.getElementById("contact_form");

function sendEmail(){
    Email.send({
        SecureToken: "21d93d28-0a3a-4c36-8246-57f2bbf66131",
        To: "vicyegon4@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New message from my website",
        Body: "Name: " + nameEl.value
            + "<br>Email: " + emailEl.value
            + "<br>Subject: " + document.getElementById("subject").value
            + "<br>Message: " + document.getElementById("message").value,
    }).then(
        message => alert("Message sent succesfully!", message)
    ).catch(
        error => alert("Error sending email:", error)
    );
}

formEl.addEventListener("submit", (e)=>{
    e.preventDefault();

    sendEmail();
    // console.log("mail sent");
});
