var searchTerm='';
Template.searchResult.helpers({
	 movies : function(){
		searchTerm= Session.get('searchTerm')
		return movies.find({name:  { "$regex": searchTerm + "\\b", "$options": "i"} });
  }
});


Template.currentMovie.events({
	'click .mohsan': function(){
		// console.log('checklets');
		Router.go('/movie/'+this._id)
	}
});
