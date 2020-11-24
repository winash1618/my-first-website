function validateForm() {
    if (document.forms["check"]["fname"].value== "") {
        alert("Enter your name");
        return false;
    }
    else if (document.forms["check"]["id"].value== "") {
        alert("Enter your email id");
        return false;
    }
    else if (document.forms["check"]["phone"].value== "") {
        alert("Enter your phone number");
        return false;
    }
    else if (document.forms["check"]["qual"].value== "") {
        alert("Enter your qualification");
        return false;
    }
    else if (document.forms["check"]["prog"].value== "") {
        alert("Enter the program you are applying for");
        return false;
    }
    else {
        alert("Submission successful, try another");
        return true;
    }
}
