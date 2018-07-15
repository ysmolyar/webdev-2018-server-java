//Immediately Invoked Function Expression

(function () {

    var $usernameFld, $passwordFld, $emailFld, $roleFld;
    var $removeBtn, $editBtn, $createBtn, $updateBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody, $currentSelectedUser;
    var userServiceClient = new UserServiceClient();

    init();

    function init() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $emailFld = $('#emailFld');
        $roleFld = $('#roleFld');
        $updateBtn = $('.wbdv-update');

        $updateBtn.click(updateAdminPage);

        userServiceClient
            .findAllUsers()
            .then(renderUsers);

    }

    function updateAdminPage(event) {
        var button = $(event.currentTarget);
        var id = button.attr('id');
        userServiceClient.
         findUserById(id)
            .then(
                userServiceClient
                    .findAllUsers())
            .then(renderUsers);
    }

    function renderUsers(users) {
        console.log(users);

        var tbody = $('tbody');
        tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var tr = $('<tr>');
            var td = $('<td>');

            td.append(user.username);
            tr.append(td);

            td = $('<td>');
            td.append('*******');
            tr.append(td);

            td = $('<td>');
            td.append(user.firstName);
            tr.append(td);

            td = $('<td>');
            td.append(user.lastName);
            tr.append(td);

            td = $('<td>');
            td.append(user.email);
            tr.append(td);

            td = $('<td>');
            td.append('Student');
            tr.append(td);

            td = $('<td>');
            $removeBtn = $('<i data-toggle="tooltip" title="Remove" id="wbdv-remove" ' +
                'class="fa-2x fa fa-times wbdv-remove"></i>');
            $editBtn = $('<i data-toggle="tooltip" title="Edit" id="wbdv-edit" ' +
                'class="fa-2x fa fa-pencil wbdv-edit"></i>');
            $editBtn.click(renderSelectedUser);
            $removeBtn.click(deleteUser);
            $removeBtn.attr('id', user.id);
            $editBtn.attr('id', user.id);
            td.append($editBtn);
            td.append($removeBtn);
            tr.append(td);

            tr.appendTo(tbody);
        }
    }


    function deleteUser(event) {
        var button = $(event.currentTarget);
        var id = button.attr('id');

        userServiceClient
            .deleteUser(id)
            .then(function () {
                userServiceClient
                    .findAllUsers()
                    .then(renderUsers);
            });
    }

    function editUser(event) {
        return user = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            email: $emailFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val()
        };

    }
    function renderSelectedUser(event) {
        var $button = $(event.currentTarget);
        var id = $button.attr('id');
        var userObj = userServiceClient.findUserById(id);
        $currentSelectedUser = userObj;

        userObj.then(function(user) {
            $usernameFld.val(user.username);
            $passwordFld.val(user.password);
            $firstNameFld.val(user.firstName);
            $lastNameFld.val(user.lastName);
            $emailFld.val(user.email);
            $roleFld.val("STUDENT");
            console.log(user);
        })

    }

})();





