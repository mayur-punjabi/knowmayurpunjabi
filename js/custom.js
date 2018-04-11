$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '1302484905',
        limit: 6,
        resolution: 'standard_resolution',
        accessToken: '1302484905.1677ed0.b75d92da797f4879a118d278e6f4a395',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 col-md-6 col-sm-12 instaimg"><a href="{{link}}"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();   


});
