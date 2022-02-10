const emailAddress = $("#CTA input");
const emailError = $("#CTA .container .email-error");

emailError.hide();

function CheckEmail() {
    const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(emailRegex.test(emailAddress.val()) == false) {
        emailError.show();
    }
    else {
        emailError.hide();
    }
}