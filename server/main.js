import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    console.log('starting up');
    if(movies.find().count() <= 0){
        Assets.getText('output.txt', function(err, data) {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
           
            data = JSON.parse(data);
            for(var i= 0; i< data.length; i++){
                //console.log(data[i]);
                movies.insert(data[i]);
            }
        });
    }
});
