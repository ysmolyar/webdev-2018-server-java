//Immediately Invoked Function Expression
//IIFE
(function () {

    var $username, $password, $firstName, $lastName, $email, $phoneNum, $role,
        $updateBtn, $logoutBtn;
    var currentUser = null;
    var userService = new UserServiceClient();

    function init() {

        $username = $("#username");
        $password = $("#password");
        $email = $("#email");
        $firstName = $("#firstName");
        $lastName = $("#lastName");
        $phoneNum = $("#phoneNumFld");
        $role = $("#roleFld");
        $updateBtn = $("#updateBtn");
        $logoutBtn = $("#logoutBtn");
        $updateBtn.click(updateUser);
        $logoutBtn.click(logoutUser);

        userService.profile()
            .then(renderUser);
    }
    init();

    function renderUser(user) {
        currentUser = user;
        $username.val(user.username);
        $password.val(user.password);
        $phoneNum.val(user.phoneNum);
        $email.val(user.email);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
        $role.val(user.role);
    }

    function updateUser() {
        var user = {
            'username': $username.val(),
            'password': $password.val(),
            'firstName': $firstName.val(),
            'lastName': $lastName.val(),
            'email': $email.val(),
            'phoneNum': $phoneNum.val()
        };

        userService.updateUser(user, currentUser.id)

    }

    function logoutUser() {
        userService.logoutUser().then(function () {
            window.location.href = "../login/login.template.client.html";
        });
    }
})();