function resume() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    
    alert(
            "Thank you, " +
            name +
            " ! You'll recieve the resume on your email "

        );
}

let resumeButton = document.querySelector(" button");
resumeButton.addEventListener("click", resume);