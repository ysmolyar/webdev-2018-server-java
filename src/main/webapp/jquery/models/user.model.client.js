function User(username, email, password, firstName, lastName, phoneNum, role, dob) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNum = phoneNum;
    this.role = role;
    this.dob = dob;

    this.setDob = setDob;
    this.getDob = getDob;
    this.setPhoneNum = setPhoneNum;
    this.getPhoneNum = getPhoneNum;
    this.setRole = setRole;
    this.getRole = getRole;
    this.setEmail = setEmail;
    this.getEmail = getEmail;
    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setPassword = setPassword;
    this.getPassword = getPassword;
    this.setFirstName = setFirstName;
    this.getFirstName = getFirstName;
    this.setLastName = setLastName;
    this.getLastName = getLastName;



    function setPhoneNum(phoneNum) {
        this.phoneNum = phoneNum;
    }

    function getPhoneNum() {
        return this.phoneNum;
    }


    function setRole(role) {
        this.role = role;
    }

    function getRole() {
        return this.role;
    }

    function setDob(dob) {
        this.dob = dob;
    }

    function getDob() {
        return this.dob;
    }

    function setUsername(username) {
        this.username = username;
    }

    function getUsername() {
        return this.username;
    }

    function setEmail(email) {
        this.email = email;
    }

    function getEmail() {
        return this.email;
    }

    function setPassword(password) {
        this.password = password;
    }

    function getPassword() {
        return this.password;
    }

    function setFirstName(firstName) {
        this.firstName = firstName;
    }

    function getFirstName() {
        return this.firstName;
    }

    function setLastName(lastName) {
        this.lastName = lastName;
    }

    function getLastName() {
        return this.lastName;u
    }
}