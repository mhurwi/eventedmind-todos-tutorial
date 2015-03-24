TodosController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('todo', this.params._id);
  },

  data: function () {
    return Todos.findOne({_id: this.params._id});
  },

  detail: function () {
    this.render('TodosDetails', { /* data: {} */});
  },

  edit: function () {
    this.state.set('isEditing', true);
    this.render('TodosDetails');
  }
});
