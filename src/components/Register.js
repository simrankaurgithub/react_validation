import React from 'react'

export default function validation() {
    return (
        <div class="image-container d-flex py-5 ">
            <form method="POST" novalidate
                class="px-4 shadow-lg  mx-auto register-form bg-white col-xs-8 col-sm-8 col-md-5 col-lg-4 py-4">
                <h2 class="text-center pb-3 text-primary">Register</h2>
                <div class="my-3">
                    <input type="text" class="form-control" id="id_username" placeholder='Enter Username' />
                    <small id="name" class="text-danger"></small>
                </div>
                <div class="row my-3">
                    <div class="col-6">
                        <input type="text" class="form-control" id="id_firstname" placeholder='Enter First Name' />
                        <small id="fname" class="text-danger"></small>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control" id="id_lastname" placeholder='Enter Last Name' />
                        <small id="lname" class="text-danger"></small>
                    </div>
                </div>
                <div class="my-3">
                    <input type="email" class="form-control" id="id_email" placeholder='Enter Email' />
                    <small id="email" class="text-danger"></small>
                </div>
                <div class="my-3">
                    <input type="password" class="form-control" id="id_password1" placeholder='Enter Password' />
                    <small id="pass1" class="text-danger"></small>
                </div>
                <div id="pswd_info">
                    <h6 class="px-3 fw-bold py-2">Password must contain : </h6>
                    <ul>
                        <li id="letter" class="invalid"><i id="letter-mark" class="fa-solid fa-xmark"></i>
                            &nbsp; At least <strong>one letter</strong></li>
                        <li id="capital" class="invalid"><i id="capital-mark" class="fa-solid fa-xmark"></i>
                            &nbsp; At least <strong>one capital letter</strong></li>
                        <li id="number" class="invalid"><i id="number-mark" class="fa-solid fa-xmark"></i>
                            &nbsp; At least <strong>one number</strong></li>
                        <li id="length" class="invalid"><i id="length-mark" class="fa-solid fa-xmark"></i>
                            &nbsp; At least <strong>8 characters</strong></li>
                        <li id="space" class="invalid"><i id="space-mark" class="fa-solid fa-xmark"></i>
                            &nbsp; At least <strong>one special character</strong></li>
                    </ul>
                </div>
                <div id="hello">
                    <div class="my-3">
                        <input type="password" class="form-control" id="id_password2" placeholder='Enter Confirm Password' />
                        <small id="pass2" class="text-danger"></small>
                    </div>
                </div>
                <input type="submit" value="Register" class="my-2 w-100 btn btn-primary" />
            </form >
        </div >);
        //  $(document).ready(function () {
        //     $("#id_password1").keyup(function () {
        //         var pswd = $(this).val();
    
        //         //validate the length
        //         if (pswd.length < 8) {
        //             $('#length').removeClass('valid').addClass('invalid');
        //             $('#length-mark').removeClass('fa-solid fa-check').addClass('fa-solid fa-xmark');
        //         } else {
        //             $('#length').removeClass('invalid').addClass('valid');
        //             $('#length-mark').removeClass('fa-solid fa-xmark').addClass('fa-solid fa-check');
        //         }
    
        //         //validate letter
        //         if (pswd.match(/[a-z]/)) {
        //             $('#letter').removeClass('invalid').addClass('valid');
        //             $('#letter-mark').removeClass('fa-solid fa-xmark').addClass('fa-solid fa-check');
        //         } else {
        //             $('#letter').removeClass('valid').addClass('invalid');
        //             $('#letter-mark').removeClass('fa-solid fa-check').addClass('fa-solid fa-xmark');
        //         }
    
        //         //validate capital letter
        //         if (pswd.match(/[A-Z]/)) {
        //             $('#capital').removeClass('invalid').addClass('valid');
        //             $('#capital-mark').removeClass('fa-solid fa-xmark').addClass('fa-solid fa-check');
        //         } else {
        //             $('#capital').removeClass('valid').addClass('invalid');
        //             $('#capital-mark').removeClass('fa-solid fa-check').addClass('fa-solid fa-xmark');
        //         }
    
        //         //validate number
        //         if (pswd.match(/\d/)) {
        //             $('#number').removeClass('invalid').addClass('valid');
        //             $('#number-mark').removeClass('fa-solid fa-xmark').addClass('fa-solid fa-check');
        //         } else {
        //             $('#number').removeClass('valid').addClass('invalid');
        //             $('#number-mark').removeClass('fa-solid fa-check').addClass('fa-solid fa-xmark');
        //         }
    
        //         //validate space
        //         if (pswd.match(/[^a-zA-Z0-9\-\/]/)) {
        //             $('#space').removeClass('invalid').addClass('valid');
        //             $('#space-mark').removeClass('fa-solid fa-xmark').addClass('fa-solid fa-check');
        //         } else {
        //             $('#space').removeClass('valid').addClass('invalid');
        //             $('#space-mark').removeClass('fa-solid fa-check').addClass('fa-solid fa-xmark');
        //         }
    
        //     }).focus(function () {
        //         $('#pswd_info').show();
        //     }).blur(function () {
        //         $('#pswd_info').hide();
        //     });
    
        // });
    
    
        const check_username = () => {
            uname = document.getElementById("{{form.username.auto_id}}").value;
            $.ajax({
                url: "{% url 'check_user_exist' %}",
                method: "GET",
                data: { username: uname },
                success: function (data) {
                    console.log(data)
                    if (data.status == 0) {
                        document.getElementById("name1").innerText = "";
                    }
                    else {
                        document.getElementById("name1").innerText = "Username already exists";
                    }
    
                }
            })
        }
    
        const check_email = () => {
            uemail = document.getElementById("{{form.email.auto_id}}").value;
            $.ajax({
                url: "{% url 'check_email_exist' %}",
                method: "GET",
                data: { email: uemail },
                success: function (data) {
                    console.log(data)
                    if (data.status == 0) {
                        document.getElementById("email1").innerText = "";
                    }
                    else {
                        document.getElementById("email1").innerText = "Email already exists";
                    }
                }
            })
        }
    
        const keyname = () => {
            let uname = document.getElementById("{{form.username.auto_id}}").value;
            let re = /^[A-Za-z0-9/_@/./-]*$/
            if (!(re.test(uname))) {
                document.getElementById("name").innerText = "Username can't contain special character except (@,.,+,-,_ ) ";
            }
            else if (uname.length < 4) {
                document.getElementById("name").innerText = "Username should have atleast 4 characters";
            }
            else if (uname !== "") {
                document.getElementById("name").innerText = "";
            }
            if (uname.length > 100) {
                document.getElementById("name").innerText = "Username can contain maximum 100 characters";
            }
        }
        const blurname = () => {
            let uname = document.getElementById("{{form.username.auto_id}}").value
            if (uname === "") {
                document.getElementById("name").innerText = "Username is required";
            }
        }
        const keyfname = () => {
            let uname = document.getElementById("{{form.first_name.auto_id}}").value;
            let re = /^[A-Za-z]*$/
            if (!(re.test(uname))) {
                document.getElementById("fname").innerText = "First name can contian alphabet only";
            }
            else if (uname !== "") {
                document.getElementById("fname").innerText = "";
            }
            if (uname.length > 100) {
                document.getElementById("fname").innerText = "First name can contain maximum 100 characters";
            }
        }
        const blurfname = () => {
            let uname = document.getElementById("{{form.first_name.auto_id}}").value
            if (uname === "") {
                document.getElementById("fname").innerText = "First Name is required";
            }
        }
        const keylname = () => {
            let uname = document.getElementById("{{form.last_name.auto_id}}").value;
            let re = /^[A-Za-z]*$/
            if (!(re.test(uname))) {
                document.getElementById("lname").innerText = "Last Name can contian alphabet only";
            }
            else if (uname !== "") {
                document.getElementById("lname").innerText = "";
            }
            if (uname.length > 100) {
                document.getElementById("lname").innerText = "Last Name can contain maximum 100 characters";
            }
        }
        const keyemail = () => {
            let uemail = document.getElementById("{{form.email.auto_id}}").value
            let re = /^\w+([\.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            if (uemail === "") {
                document.getElementById("email").innerText = "";
            }
            else if (!(re.test(uemail))) {
                document.getElementById("email").innerText = "Email be like 'example@abc.efg'";
            }
            else if (re.test(uemail)) {
                document.getElementById("email").innerText = "";
            }
        }
        const bluremail = () => {
            let uemail = document.getElementById("{{form.email.auto_id}}").value;
            if (uemail === "") {
                document.getElementById("email").innerText = "Email is required ";
            }
        }
        const keypass1 = () => {
            let upass = document.getElementById("{{form.password1.auto_id}}").value;
            if (upass !== "") {
                document.getElementById("pass1").innerText = ""
            }
            if (upass.length > 200) {
                document.getElementById("pass1").innerText = "Password can contain maximum 200 characters";
            }
            else if (upass.length < 200) {
                document.getElementById("pass1").innerText = "";
            }
        }
        const blurpass1 = () => {
            let upass = document.getElementById("{{form.password1.auto_id}}").value;
            if (upass === "") {
                document.getElementById("pass1").innerText = "Password is required"
            }
        }
        const keypass2 = () => {
            let upass = document.getElementById("{{form.password1.auto_id}}").value;
            let repass = document.getElementById("{{form.password2.auto_id}}").value
            if (repass !== "") {
                document.getElementById("pass2").innerText = ""
            }
            if (upass !== repass) {
                document.getElementById("pass2").innerText = "Password doesn't match"
            }
        }
        const blurpass2 = () => {
            let repass = document.getElementById("{{form.password2.auto_id}}").value
            if (repass === "") {
                document.getElementById("pass2").innerText = "Confirm password is required"
            }
        }
}