const mongoose = require('mongoose');
const Service = mongoose.model('Service');
const Provider = mongoose.model('Provider');



module.exports.addService = (req, resp) => {
    console.log('onAddService');
    const service = {};
    if (req.body.name)
        service.name = req.body.name;
    if (req.body.imageUrl)
        service.imageUrl = req.body.imageUrl;
    if (req.body.rate)
        service.rate = parseFloat(req.body.rate);

    Service.create(service, (err, createdService) => {
        _out(resp, err, createdService);
    })
}

module.exports.getServices = (req, resp) => {
    console.log('onGetServices');
    Service.find().exec((err, services) => {
        _out(resp, err, services);
    })

}

module.exports.getOneService = (req, resp) => {
    console.log('onGetOnceService');
    const serviceId = req.params.serviceId;
    const find=Service.findById(serviceId);
    find.then((service)=>_OnFindByIdFucation(service,resp)).catch((err)=>{_out(resp, err, null)})

}
const _OnFindByIdFucation=(service,resp) => {
        const providers = [];
    if (service.providers.length === 0){
        _out(resp, null, service);
        return;
    } 
    service.providers.forEach((providerId, index, arr) => {
        Provider.findById(providerId).then((provider)=>{
            providers.push(provider);
            if (index + 1 === arr.length) {
                service.providers = providers;
                _out(resp, null, service);
            }
        }).catch((err)=>{
            _out(resp,err,null)
        })


    });
    
}

module.exports.editService = (req, resp) => {
    console.log('oneEditService');
    const serviceId = req.params.serviceId;
    const service = {};
    if (req.body.name)
        service.name = req.body.name;
    if (req.body.imageUrl)
        service.imageUrl = req.body.imageUrl;
    if (req.body.rate)
        service.rate = parseFloat(req.body.rate);

    Service.findByIdAndUpdate(serviceId,service, (err, updatedService) => {
        _out(resp, err, updatedService);
    })

}
module.exports.deleteService = (req, resp) => {
    console.log('OnDeleteEditService');
    const serviceId = req.params.serviceId;
    Service.findByIdAndDelete(serviceId).then((deletedService)=>{
        _out(resp, null, deletedService)
    }).catch((err)=>_out(resp, err, null));

}

const _getProvider = (id) => {
    console.log("OnGetProvider");
    Provider.findById(id).then((provider)=>provider).catch((err)=>_out(resp,err,null));
}

const _out = (resp, err, out) => {
    const response = {
        status: 200,
        message: ''
    }
    if (err) {
        response.status = 500;
        response.message = err
    } else {
        response.message = out;
    }

    resp.status(response.status).json(response.message);
}