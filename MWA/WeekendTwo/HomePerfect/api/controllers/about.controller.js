const mongoose=require('mongoose');
const About=mongoose.model('About');


module.exports.addAbout=(req,resp)=>{

    console.log("Add About Fan");
    const about={};
    if(req.body.lang)
    about.lang=req.body.lang;
    if(req.body.about)
    about.about=req.body.about;

    About.create(about,(err,createdAbout)=>{
        if(err)
        resp.status(500).json(err)
        else
        resp.status(201).json(createdAbout);
    })

}

module.exports.getAllAbout=(req,resp)=>{
    
    console.log("Get About Fan");
    About.find().exec((err,abouts)=>{
        if(err)
        resp.status(500).json(err)
        else
        resp.status(201).json(abouts);        
    })

}
module.exports.getAbout=(req,resp)=>{

    console.log("Get About Fan,");
    // if(req.body.lang)
    // const lang=req.body.lang;
    About.find({lang:req.params.lang})
    .exec((err,about)=>{
        if(err)
        resp.status(500).json(err)
        else
        resp.status(201).json(about); 
    })
}
module.exports.editAbout=(req,resp)=>{

    console.log("Get About Fan, Neet to Impelent");
}
