import React, {useState} from 'react'


export default function Register() {
    const [unameErr, setunameErr] = useState('')
    const [fnameErr, setfnameErr] = useState('')
    const [lnameErr, setlnameErr] = useState('')
    const [emailErr, setemailErr] = useState('')
    const [passErr1, setpassErr1] = useState('')
    const [passErr2, setpassErr2] = useState('')
    const keyname = () => {
        let uname = document.getElementById("id_username").value;
        console.log(uname)
        let re = /^[A-Za-z0-9/_@/./-]*$/
        if (!(re.test(uname))) {
            setunameErr("Username can't contain special character except (@,.,+,-,_ ) ");
        }
        else if (uname.length < 4) {
            setunameErr("Username should have atleast 4 characters");
        }
        else if (uname !== "") {
            setunameErr("");
        }
        if (uname.length > 100) {
            setunameErr("Username can contain maximum 100 characters");
        }
    }
    const blurname = () => {
        let uname = document.getElementById("id_username").value
        if (uname === "") {
            setunameErr("Username is required");
        }
    }
    const keyfname = () => {
        let fname = document.getElementById("id_firstname").value;
        let re = /^[A-Za-z]*$/
        if (!(re.test(fname))) {
            setfnameErr("First name can contian alphabet only");
        }
        else if (fname !== "") {
            setfnameErr("");
        }
        if (fname.length > 100) {
            setfnameErr("First name can contain maximum 100 characters");
        }
    }
    const blurfname = () => {
        let fname = document.getElementById("id_firstname").value
        if (fname === "") {
            setfnameErr("First Name is required");
        }
    }
    const keylname = () => {
        let lname = document.getElementById("id_lastname").value;
        let re = /^[A-Za-z]*$/
        if (!(re.test(lname))) {
            setlnameErr("Last Name can contian alphabet only");
        }
        else if (lname !== "") {
            setlnameErr("");
        }
        if (lname.length > 100) {
            setlnameErr("Last Name can contain maximum 100 characters");
        }
    }
    const keyemail = () => {
        let uemail = document.getElementById("id_email").value
        let re = /^\w+([\.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (uemail === "") {
            setemailErr("");
        }
        else if (!(re.test(uemail))) {
            setemailErr("Email be like 'example@abc.efg'");
        }
        else if (re.test(uemail)) {
            setemailErr("");
        }
    }
    const bluremail = () => {
        let uemail = document.getElementById("id_email").value;
        if (uemail === "") {
            setemailErr("Email is required") ;
        }
    }
    const keypass1 = () => {
        let upass = document.getElementById("id_password1").value;
        if (upass !== "") {
            setpassErr1("");
        }
        if (upass.length > 200) {
            setpassErr1("Password can contain maximum 200 characters");
        }
        else if (upass.length < 200) {
            setpassErr1("");
        }
    }
    const blurpass1 = () => {
        let upass = document.getElementById("id_password1").value;
        if (upass === "") {
            setpassErr1("Password is required");
        }
    }
    const keypass2 = () => {
        let upass = document.getElementById("id_password1").value;
        let repass = document.getElementById("id_password2").value
        if (repass !== "") {
            setpassErr2("");
        }
        if (upass !== repass) {
            setpassErr2("Password doesn't match");
        }
    }
    const blurpass2 = () => {
        let repass = document.getElementById("id_password2").value
        if (repass === "") {
            setpassErr2("Confirm password is required");
        }
    }
    const inputpass1 = () => {
        let upass = document.getElementById("id_password1").value;
        if (upass !== "") {
        }
        if (upass.length > 200) {
            setpassErr1("Password can contain maximum 200 characters");
        }
        else if (upass.length < 200) {
            setpassErr1("");
        }
    }
    return (
        <div class="image-container d-flex ">
            <form method="POST" novalidate
                class="px-4 shadow-lg  mx-auto register-form bg-white col-xs-8 col-sm-8 col-md-5 col-lg-4 py-4">
                <h2 class="text-center pb-3 text-primary">Register</h2>
                <div class="my-3">
                    <input type="text" class="form-control" id="id_username" placeholder='Enter Username' 
                    onKeyUp={()=>{keyname()}} onBlur={()=>{blurname()}} />
                    <small class="text-danger">{unameErr}</small>
                </div>
                <div class="row my-3">
                    <div class="col-6">
                        <input type="text" class="form-control" id="id_firstname" placeholder='Enter First Name'
                        onKeyUp={()=>{keyfname()}} onBlur={()=>{blurfname()}} />
                        <small class="text-danger">{fnameErr}</small>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control" id="id_lastname" placeholder='Enter Last Name'
                        onKeyUp={()=>{keylname()}}  />
                        <small class="text-danger">{lnameErr}</small>
                    </div>
                </div>
                <div class="my-3">
                    <input type="email" class="form-control" id="id_email" placeholder='Enter Email' 
                    onKeyUp={()=>{keyemail()}} onBlur={()=>{bluremail()}}/>
                    <small class="text-danger">{emailErr}</small>
                </div>
                <div class="my-3">
                    <input type="password" class="form-control" id="id_password1" placeholder='Enter Password' onKeyUp={()=>{keypass1()}} onBlur={()=>{blurpass1()}} onInput={()=>{inputpass1()}} />
                    <small id="pass1" class="text-danger">{passErr1}</small>
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
                        <input type="password" class="form-control" id="id_password2" placeholder='Enter Confirm Password' onKeyUp={()=>{keypass2()}} onBlur={()=>{blurpass2()}} />
                        <small class="text-danger">{passErr2}</small>
                    </div>
                </div>
                <input type="submit" value="Register" class="my-3 w-100 btn btn-primary" />
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
    
        
      
      
}