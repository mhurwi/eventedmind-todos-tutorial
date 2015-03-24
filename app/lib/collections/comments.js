Comments = new Mongo.Collection('comments');


if (Meteor.isServer) {
  Comments.allow({
    insert: function (userId, doc) {
      console.log(userId);
      console.log(doc);
      return !!userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId === doc.userId;
    },

    remove: function (userId, doc) {
      return userId === doc.userId;
    }
  });
}
