var UniqueIDV, FirstNameV, MiddleNameV, SurnameV, AddressV, EmailV;

function readFom() {
  UniqueIDV = document.getElementById("UniqueID").value;
  FirstNameV = document.getElementById("FirstName").value;
  MiddleNameV = document.getElementById("MiddleName").value;
  SurnameV = document.getElementById("Surname").value;
  addressV = document.getElementById("Address").value;
  EmailV = document.getElementById("Email").value;
  
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .set({
      UniqueID1: UniqueIDV,
      FirstName1: FirstNameV,
      MiddleName1: MiddleNameV,
      Surname1: SurnameV,
      Address1: AddressV,
      Email1: EmailV
    });
  alert("Data Inserted");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("Surname").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .on("value", function (snap) {
      document.getElementById("UniqueId").value = snap.val().UniqueID;
      document.getElementById("FirstName").value = snap.val().FirstName;
      document.getElementById("MiddleName").value = snap.val().MiddleName;
      document.getElementById("Surname").value = snap.val().Surname;
      document.getElementById("Address").value = snap.val().Address;
      document.getElementById("Email").value = snap.val().Email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .update({
      //   UniqueID: UniqueIDV,
      FirstName: FirstNameV,
      MiddleName: MiddleNameV,
      Surname: SurnameV,
      Address: AddressV,
      Email: EmailV
    });
  alert("Data Update");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("Surname").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .remove();
  alert("Data Deleted");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("Surname").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
