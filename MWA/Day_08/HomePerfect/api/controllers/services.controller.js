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
    Service.findById(serviceId).exec((err, service) => {
        const providers = [];
        service.providers.forEach((providerId, index, arr) => {
            if (arr.length === 0) _out(resp, err, service);
            Provider.findById(providerId).exec((err, provider) => {
                if (!err) providers.push(provider)
                if (index + 1 === arr.length) {
                    service.providers = providers;
                    _out(resp, err, service);
                }
            })
            
        });
    })

}

module.exports.editService = (req, resp) => {
    console.log('oneEditService Need Impelent');

}
module.exports.deleteService = (req, resp) => {
    console.log('oneEditService Need Impelent');

}

const _getProvider = (id) => {
    console.log("OnGetProvider");
    Provider.findById(id).exec((err, provider) => {
        if (!err) return provider
    })
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