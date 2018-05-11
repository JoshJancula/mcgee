$(document).ready(function() {

  
    // initialize modal
    $('select').material_select();
    $('#contactModal').modal({
        ready: function(modal, trigger) {
            // gets the reciever email and hides it in #toEmail
            modal.find('#toEmail').text(trigger.data('id'));
        }

    });


   // Adding an event listener for when the form is submitted
  $("#submitMessage").on('click', handleFormSubmit);
   
  // A function for handling what happens when the form to create a new message
  function handleFormSubmit(event) {
    var receiver = $("#toEmail").text();
    var bodyInput = $("#message").val().trim();
    var nameInput = $("#name").val().trim();
    var phoneInput = $("#phone").val().trim();
    var emailInput = $("#email").val().trim();
    console.log(receiver)
    event.preventDefault();
    // Don't submit unless the form is complete...... they don't have to give phone#
    if (!nameInput || !emailInput || !bodyInput) {
     $('#pleaseComplete').modal('open');
      return;
    }
    // Constructing a newMessage
    var newMessage = {
      receiver: receiver,
      name: nameInput,
      email: emailInput,
      phone: phoneInput,
      body: bodyInput

    }; // submit the new message
    submitMessage(newMessage);

    // empty out the input fields
    $("#body").val("");
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $('#contactModal').modal('close');
    $('#thankYou').modal('open');
  }


  // Submits the message
  function submitMessage(message) { // and send thme back to homepage
    console.log("about to send message");
    $.get("/send", {
        to: message.receiver,
        subject: "New Message",
        html: "<ul><li>" + "name: " + message.name + "</li>" +
          "<li>" + "email: " + message.email + "</li>" +
          "<li>" + "phone: " + message.phone + "</li>" +
          "<li>" + "message: " + message.body + "</li></ul>"

      },
      function(data) {
        if (data == "sent") {
          console.log("Great Success!");
        }
      });
  }


});