(function () {
    var $username,
        $password,
        $loginBtn,
    $invalidLoginPopup;
    bootstrap_alert = 

    function init() {
        $username = $('#username');
        $password = $('#password');
        $loginBtn = $('#loginBtn');
        $invalidLoginPopup = $('#dangerAlert');
        $loginBtn.click(login);
    }
    init();

    function login() {
        var user = {
            'username': $username.val(),
            "password": $password.val()
        };
        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(navigateToProfile, unsuccessfulLogin);
    }

    function navigateToProfile() {
        window.location.href = '../profile/profile.template.client.html';
    }

    function unsuccessfulLogin() {
        alert("Invalid username or password!");
    }
})();