// IIFE
// Immediately Invoked Function Expression
(function () {

    var registerBtn = jQuery('#registerBtn');
    var firstNameFld = $('#firstName');
    var lastNameFld = $('#lastName');
    var usernameFld = $('#username');
    var emailFld = $('#email');
    var dobFld = $("#dobFld");
    var phoneFld = $("#phoneNumFld");
    var passwordFld = $('#password');
    var password2Fld = $('#password2');
    var userService = new UserServiceClient();

    registerBtn.click(registerHandler);

    function registerHandler() {
        var firstNameStr = firstNameFld.val();
        var lastNameStr = lastNameFld.val();
        var emailStr = emailFld.val();
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var phoneNumStr = phoneFld.val();
        var dobStr = dobFld.val();
        var password2Str = password2Fld.val();


        var userObj = {
            firstName: firstNameStr,
            lastName: lastNameStr,
            email: emailStr,
            phoneNum: phoneNumStr,
            dob: dobStr,
            username: usernameStr,
            password: passwordStr
        };

        var userObjStr = JSON.stringify(userObj);

        userService.registerUser(userObjStr).then(function(response) {
            if (response.status === 401) {
                //401 is unauthorized
                registrationFailed();
            }
            else {
                registrationSuccessful();
            }
        });
        
        function registrationSuccessful() {
            window.location.href = "../profile/profile.template.client.html";
        }

        function registrationFailed() {
            alert("Registration failed!");
        }

    }
})();