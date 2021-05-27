const mongoose = require('mongoose');
const Provider = mongoose.model('Provider');
const Service = mongoose.model('Service');


module.exports.addProvider = (req, resp) => {
    console.log("OnAddProvider");
    const provider = {};
    if (req.body.userName)
        provider.userName = req.body.userName;
    if (req.body.email)
        provider.email = req.body.email;
    if (req.body.service)
        provider.serviceType = req.body.service;
    if (req.body.personalImageUrl)
        provider.personalImageUrl = req.body.personalImageUrl;
    if (req.body.city && req.body.street) {
        const address = {}
        address.city = req.body.city;
        address.street = req.body.street;
        provider.address = address;
    }

    Provider.create(provider, (err, createdProvider) => {
        _out(resp, err, createdProvider
            , req.body.service ? req.body.service : null,"add");
    })
}

module.exports.getProviders = (req, resp) => {
    console.log("OnGetProvider");
    Provider.find().exec((err, providers) => {
        _out(resp, err, providers);
    })

}

module.exports.editProvider = (req, resp) => {
    console.log("OnEditProvider Need Impelent");
}

module.exports.deleteProvider = (req, resp) => {
    console.log("OnDeleteProvider Need Impelent");
    const providerId=req.params.providerId;
    Provider.findByIdAndRemove(providerId,(err,deleted)=>{
        _out(resp,err,deleted,
            deleted.serviceType,"delete")
    })
}

module.exports.getOneProvider = (req, resp) => {
    console.log("OnGetOneProvider Need Impelent");
}


const _calculateAge = (birthday) => { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const _addProviderIdToService = (providerId, serviceName) => {

}

const _out = (resp, err, out, serviceType,method) => {
    const response = {
        status: 200,
        message: ''
    }
    if (err) {
        response.status = 500;
        response.message = err
        resp.status(response.status).json(response.message);
    } else {
        if (serviceType&&method==="add") {
            _addProviderToService(resp,serviceType, out._id);
        }
        else if (serviceType&&method==="delete") {
            _deleteProviderToService(resp,serviceType, out._id);
        }

        else {
            response.message = out;
            resp.status(response.status).json(response.message);
        }
    }

}
const _addProviderToService = (resp,serviceType, providerId) => {
    console.log('OnAddProviderToService Need to Impelment');

    Service.find({ name: serviceType })
        .exec((err, service) => {
            if (err) {
                resp.status(501).json(err)
                return;
            }
            if (!service) {
                resp.status(404).json({ "message": "Service is Null" })
                return;
            } if (service) {
                service[0].providers.push(providerId)
                service[0].save((err, saved) => {
                    _out(resp,err, saved);
                });
            }

        });
}
const _deleteProviderToService = (resp,serviceType, providerId) => {
    console.log('OnAddProviderToService Need to Impelment');

    Service.find({ name: serviceType })
        .exec((err, service) => {
            if (err) {
                resp.status(501).json(err)
                return;
            }
            if (!service) {
                resp.status(404).json({ "message": "Service is Null" })
                return;
            } if (service) {
                service[0].providers.filter(p=>p._id==providerId);
                service[0].save((err, saved) => {
                    _out(resp,err, saved);
                });
            }

        });
}
