function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.loginUser = loginUser;
    this.registerUser = registerUser;
    this.logoutUser = logoutUser;
    this.profile = profile;
    this.url = 'http://localhost:8080/api/user';
    var self = this;

    function updateUser(user, id) {
       return fetch("/api/user/" + id, {
            method: 'put',
            body: JSON.stringify(user),
            'credentials': 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    }


    function deleteUser(id) {
        var url = "/api/user/" + id;

        return fetch(url, {
            method: 'delete'
        })
    }

    function findAllUsers() {
        var url = "/api/user";
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }

    function findUserById(userId) {
        return fetch('/api/user/' + userId)
            .then(function (response) {
                return response.json();
            });
    }


    function createUser(user, callback) {
        return fetch("/api/user", {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response;
        });
    }


    function loginUser(user, callback) {

        return fetch('/api/login', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response;
        });
    }

    function registerUser(userObjStr, callback) {

        return fetch('/api/register', {
            method: 'post',
            credentials: "include",
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            return response;
        });
    }

    function logoutUser() {
        return fetch('/api/logout', {
            method: 'post',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            return response;
        });
    }

    function profile(callback) {
        return fetch('/api/profile', {
            method: 'get',
            credentials: 'include'
        }).then(function (response) {
            return response.json();
        });
    }

}
