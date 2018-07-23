(function () {
    var $username,
        $password,
        $loginBtn,
    userService;

    userService = new UserServiceClient();

    function init() {
        $username = $('#username');
        $password = $('#password');
        $loginBtn = $('#loginBtn');

        $loginBtn.click(login);
    }
    init();

    function login() {

        if ($username.val() === "" && $password === "") {
            alert("Please type a username and a password.");
        }
        else if ($username.val() === "") {
            alert("Please type in a valid username.");
        }
        else if ($password.val === "") {
            alert("Please type in a valid password.");
        }
        else {

            var user = {
                "username": $username.val(),
                "password": $password.val()
            };



          userService.loginUser(user)
              .then(function (response) {
                  if (response.status === 401) {
                      failedLogin();
                  }
                  else if (response.status === 200) {
                      navigateToProfile();
                  }
                  else {
                      genericFailedLogin();
                  }
            })
    }

    function navigateToProfile() {
        window.location.href = '../profile/profile.template.client.html';
    }

    function failedLogin(){
        alert("Invalid username or password!");
    }

    function genericFailedLogin() {
            alert("Login failed.");
        }
    }
})();