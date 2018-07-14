//Immediately Invoked Function Expression

(function () {

    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userServiceClient = new UserServiceClient();

    init();

    function init() {
        $usernameFld = $('#usernameFld');
        $usernameFld = $('#usernameFld');


        userServiceClient
            .findAllUsers()
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
            var deleteBtn = $('<i data-toggle="tooltip" title="Remove" id="wbdv-remove" ' +
                'class="fa-2x fa fa-times wbdv-remove"></i>');
            var editBtn = $('<i data-toggle="tooltip" title="Edit" id="wbdv-edit" ' +
                'class="fa-2x fa fa-pencil wbdv-edit"></i>');
            editBtn.click(editUser);
            deleteBtn.click(deleteUser);
            deleteBtn.attr('id', user.id);
            editBtn.attr('id', user.id);
            td.append(editBtn);
            td.append(deleteBtn);
            tr.append(td);

            tr.appendTo(tbody);
        }
    }

    function deleteUser(event) {
        console.log(event);
        var $button = $(event.currentTarget);
        var id = $button.attr('id');

        userServiceClient
            .deleteUser(id)
            .then(function () {
                userServiceClient
                    .findAllUsers()
                    .then(renderUsers);
            });
    }

    function editUser() {

    }

})();





