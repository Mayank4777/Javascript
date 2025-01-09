gr.vbsfunction validate() {
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let atpos = mail.indexOf("@");
  let dotpos = mail.indexOf(".");
  let mb = document.getElementById("mb").value;
  let country = document.getElementById("country").value;
  // let male=document.getElementById("male").checked;
  // let female=document.getElementById("female").checked;

  let nameerror = document.getElementById("nameerror");
  let mailerror = document.getElementById("mailerror");
  let mberror = document.getElementById("mberror");
  let gendererror = document.getElementById("gendererror");
  let countryerror = document.getElementById("countryerror");

  if (name == "" || isNaN(name) == false || name.length < 5) {
    nameerror.innerHTML = "* Enter valid name";
    document.getElementById("name1").innerHTML = "";
  } else {
    nameerror.innerHTML = "";
    document.getElementById("name1").innerHTML = "name: "+name;
  }

  if (
    mail == "" ||
    atpos < 3 ||
    dotpos < atpos + 4 ||
    dotpos + 4 > mail.length
  ) {
    mailerror.innerHTML = "* Invalid e-mail address";
    document.getElementById("mail1").innerHTML = "";
  } else {
    mailerror.innerHTML = "";
    document.getElementById("mail1").innerHTML = mail;
  }

  if (isNaN(mb) || mb.length != 1 || mb == "") {
    mberror.innerHTML = "*enter valid mobile number";
    document.getElementById("mb1").innerHTML = "";
  } else {
    mberror.innerHTML = "";
    document.getElementById("mb1").innerHTML = mb;
  }

  if (document.getElementById("male").checked) {
    document.getElementById("gender1").innerHTML = "male";
    gendererror.innerHTML = "";
  } else if (document.getElementById("female").checked) {
    document.getElementById("gender1").innerHTML = "female";
    gendererror.innerHTML = "";
  } else {
    gendererror.innerHTML = "* Select gender";
  }

  // Check if any error messages are displayed, if so, return false
  if (
    nameerror.innerHTML !== "" ||
    mailerror.innerHTML !== "" ||
    mberror.innerHTML !== "" ||
    gendererror.innerHTML !== ""
  ) {
    document.getElementById("name1").innerHTML = "";
    document.getElementById("mail1").innerHTML = "";
    document.getElementById("mb1").innerHTML = "";
    document.getElementById("gender1").innerHTML = "";
    return false;
  }
  // Return true if all validations pass
  else {
    return true;
  }
}
