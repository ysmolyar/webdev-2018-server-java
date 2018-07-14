//Immediately Invoked Function Expression
//IIFE
(function () {

    var $username, $firstName, $lastName, $email,
        $updateBtn, $logoutBtn;
    var currentUser = null;

    function init() {

        $username = $("#username");
        $email = $("#email");
        $firstName = $("#firstName");
        $lastName = $("#lastName");
        $updateBtn = $("#updateBtn");
        $logoutBtn = $("#logoutBtn");
        $updateBtn.click(updateUser);
        $logoutBtn.click(logoutUser);

        profile()
            .then(renderUser);
    }
    init();


    function profile() {
        return fetch('/api/profile', {
            'credentials': 'include'
        })
            .then(function (response) {
                return response.json();
            });
    }

    function renderUser(user) {
        currentUser = user;
        $username.val(user.username);
        $email.val(user.email);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
    }

    function updateUser() {
        var user = {
            'username': username.val(),
            'firstName': firstName.val(),
            'lastName': lastName.val(),
            'email': email.val()
        };

        fetch("/api/user/" + currentUser.id, {
            method: 'put',
            body: JSON.stringify(user),
            'credentials': 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    function logoutUser() {
        window.location.href = '../login/login.template.html';
    }
})();