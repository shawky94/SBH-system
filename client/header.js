var catalogTerm;
Template.header.events({
	'change .search' :function(event){
		searchTerm = event.target.value;
	},
	'click .searchLink' :function(){
		Session.set('searchTerm', searchTerm)
	},
	'click .latestttttttttttt' :function(event){
		console.log('latestttttttttttt');	
		Session.set('latest', catalogTerm);

	},
	'click .top-rated' :function(){
		console.log('top');
		Session.set('topRated', catalogTerm);
	},
});
Template.header.helpers({
	setCatalogTerm: function(){
		console.log('hahhahaahahhahhahahah');
		Session.set('term',catalogTerm);

	}


});

