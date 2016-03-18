if (Meteor.isClient) {

  Template.dropdown.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
