console.log("js");

$(document).ready(function () {
  console.log("JQ");
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $("#addButton").on("click", function () {
    console.log("in addButton on click");
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: "testName",
      age: "testName",
      gender: "testName",
      readyForTransfer: "testName",
      notes: "testName",
    };
    // call saveKoala with the new obejct
    saveKoala(koalaToSend);
  });
}

function getKoalas() {
  console.log("in getKoalas");
  // ajax call to server to get koalas
  $.ajax({
    method: "GET",
    url: "/koalas",
  })
    .then((result) => {
      console.log("result :>> ", result);
      for (const koala of result) {
        $("#viewKoalas").append(`
          <tr data-koalaid=${koala.id}>
            <td>${koala.name}</td>
            <td>${koala.age}</td>
            <td>${koala.gender}</td>
            <td>${koala.ready_to_transfer ? "Ready" : "Not Ready"}</td>
            <td>${koala.notes}</td>
            <td>
              <button class="transfer-button">Transfer</button>
              <button class="delete-button">Delete</button>
            </td>
          </tr>        
        `);
      }
    })
    .catch((error) => {
      console.log("error in getKoalas :>> ", error);
    });
} // end getKoalas

function saveKoala(newKoala) {
  console.log("in saveKoala", newKoala);
  // ajax call to server to get koalas
}
