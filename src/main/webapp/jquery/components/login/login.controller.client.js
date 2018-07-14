(function () {
    var $username,
        $password,
        $loginBtn;

    function init() {
        $username = $('#username');
        $password = $('#password');
        $loginBtn = $('#loginBtn');

        $loginBtn.click(login);
    }
    init();

    function login() {
        var user = {
            "username": $username.val(),
            "password": $password.val()
        };

        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(navigateToProfile, failedLogin);
    }

    function navigateToProfile() {
        window.location.href = '../profile/profile.template.client.html';
    }

    function failedLogin(){
        alert("Invalid username or password!");
    }
})();