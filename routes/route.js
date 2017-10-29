exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCountry',
                    headline:'Believing in cities of tomorrow starts with building today'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='rome'){
       title="Rome";
       heading="Rome: Spartacus was here";
    }
    else if(cityName==='africa'){
       title="Africa";
       heading="Africa: Mother Nature will reward the humanity";
    }
   
    else if(cityName==='japan'){
       title="Japan";
       heading="Japan: Engineering redefined";
    
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
