// IIFE
// Immediately Invoked Function Expression
(function () {

    var registerBtn = jQuery('#registerBtn');
    var firstNameFld = $('#firstName');
    var lastNameFld = $('#lastName');
    var usernameFld = $('#username');
    var passwordFld = $('#password');
    var password2Fld = $('#password2');

    registerBtn.click(registerHandler);

    function registerHandler() {
        var firstNameStr = firstNameFld.val();
        var lastNameStr = lastNameFld.val();
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var password2Str = password2Fld.val();

        var userObj = {
            firstName: firstNameStr,
            lastName: lastNameStr,
            username: usernameStr,
            password: passwordStr
        };

        var userObjStr = JSON.stringify(userObj);

        fetch('/api/register', {
            method: 'post',
            credentials: "include",
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(registrationSuccessful, registrationFailed);
        
        function registrationSuccessful() {
            alert("successful registration message");
            window.location.href = "../profile/profile.template.client.html";
        }

        function registrationFailed() {
            alert("oops");
        }

    }
})();