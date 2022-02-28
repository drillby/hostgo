function joinDiscord() {
    window.open('https://dsc.gg/hostgo')
}

function supportDropdown() {
  document.getElementById("supportDropdown").classList.toggle("show");
}

function signInDropdown() {
  document.getElementById("signinDropdown").classList.toggle("show");
}

function getText(clickedId) {
    return document.getElementById(clickedId).value;
}

function ifTextEmail(clickedId) {
    var text = getText(clickedId)
    if (text.length <= 0) 
        document.getElementById("error-email").style.color = "red"
    else 
        document.getElementById("error-email").style.color = "transparent"
}

function ifTextPassword(clickedId) {
    var text = getText(clickedId)
    if (text.length <= 0) 
        document.getElementById("error-password").style.color = "red"
    else 
        document.getElementById("error-password").style.color = "transparent"
}

function isText(idValue) {
    var text = getText(idValue)
    if (text.length <= 0)
        document.getElementById(idValue + "-empty").style.color = "red"
    else
        document.getElementById(idValue + "-empty").style.color = "transparent"
}

function validCountry(idValue) {
    var value = document.getElementById("country").value;
    if (value === "") 
        document.getElementById(idValue + "-empty").style.color = "red"
    else 
        document.getElementById(idValue + "-empty").style.color = "transparent"
}

function isEqual(idValue) {
    var pw1 = document.getElementById("password").value
    var pw2 = getText(idValue)

    if (pw1 === pw2) 
        document.getElementById("confirm-password-no-match").style.color = "transparent"
    else 
        document.getElementById("confirm-password-no-match").style.color = "red"
}

function isEqualResetPw(idValue) {
    var pw1 = document.getElementById("reset-password").value
    var pw2 = getText(idValue)

    if (pw1 === pw2) 
        document.getElementById("confirm-reset-password-no-match").style.color = "transparent"
    else 
        document.getElementById("confirm-reset-password-no-match").style.color = "red"
}

function validEmail(idValue) {
    var text = getText(idValue)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!text.match(mailformat)) 
        document.getElementById(idValue + "-empty").style.color = "red"
    else 
        document.getElementById(idValue + "-empty").style.color = "transparent"
}

function stateHandleSignIn() {
    var email = getText("email")
    var password = getText("password")

    var passreq = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    var checked = new Array();
    var arrVar = new Array(email, password);

    for (var i = 0; i < arrVar.length; i++) {
        if (arrVar[i] <= 0) 
            checked.push(false)
        else 
            checked.push(true)
    }

    if (email.match(mailformat)) 
        checked.push(true)
    else 
        checked.push(false)

    if (!passreq.test(password))
        checked.push(false)
    else
        checked.push(true)

    let result = checked.every(Boolean)

    if (result === true) 
        document.getElementById("submit").disabled = false
    

}

function stateHandleRegister() {
    var firstName = getText("first-name");
    var lastName = getText("last-name");
    var emailAddress = getText("email");
    var streetAddress = getText("street-address");
    var city = getText("city");
    var postcode = getText("postcode");
    var country = getText("country");
    var password = getText("password");
    var confirmPassword = getText("confirm-password");
    var checkbox = document.getElementById("checkbox-terms").checked
    
    var passreq = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    var checked = new Array();
    var arrVar = new Array(firstName, lastName, emailAddress, streetAddress, city, postcode, country, password, confirmPassword);
    
    checked.push(checkbox)

    for (i=0; i<=arrVar.length; i++){
        if (arrVar[i] <= 0) 
            checked.push(false)
        else 
            checked.push(true)
    }

    if (emailAddress.match(mailformat)) 
        checked.push(true)
    else 
        checked.push(false)

    if (password === confirmPassword) 
        checked.push(true)
    else 
        checked.push(false)

    if (!passreq.test(password))
        checked.push(false)
    else
        checked.push(true)

    let result = checked.every(Boolean)

    if (result === true) 
        document.getElementById("submit").disabled = false
}

function stateHandleResetPw() {
    var email = getText("email");
    var pw1 = getText("reset-password")
    var pw2 = getText("confirm-reset-password")

    var passreq = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var checked = new Array()
    var arrVar = new Array(email, pw1, pw2)

    for (i=0; i<=arrVar.length; i++){
        if (arrVar[i] <= 0) 
            checked.push(false)
        else 
            checked.push(true)
    }

    if (!email.match(mailformat))
        checked.push(false)
    else 
        checked.push(true)

    if (pw1 !== pw2) 
        checked.push(false)
    else
        checked.push(true)

    if (!passreq.test(pw1))
        checked.push(false)
    else
        checked.push(true)

    let result = checked.every(Boolean)

    if (result)
        document.getElementById("submit").disabled = false
}

function passwordRequirements(idValue) {
    var pw = getText(idValue)
    var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")

    if (pw.length < 6 || !re.test(pw))
        document.getElementById(idValue + "-empty").style.color = "red"
    else
        document.getElementById(idValue + "-empty").style.color = "transparent"
}