const mongoose = require('mongoose');
const Person = mongoose.model("person");


module.exports.getAllLaur = (req, resp) => {
    console.log('OnGetAllPerson');

    let count = 0;
    let offset = 0;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
    }

    _getAll(offset, count, resp);
}

const _getAll = (offset, count, resp) => {

    if (count !== 0) {
        Person.find().limit(count).exec((err, per) => {
            const response = {
                status: 200,
                message: ""
            }
            if (err) {
                response.status = 404;
                response.message = err
            }
            else {
                response.message = per;
            }
            resp.status(response.status).json(response.message)
        })

    } else {
        Person.find().exec((err, per) => {
            resp.status(200).json(per);

        })
    }
}

module.exports.getOne = (req, resp) => {
    console.log("OnGetOnePerson");
    const perID = req.params.perId;

    Person.findById(perID, (err, per) => {
        const response = {
            status: 200,
            message: ""
        }
        if (err) {
            response.status = 500;
            response.message = err
        } else if (!per) {
            response.status = 200;
            response.message = ({ "message": "You Don't have this Person" })
        }
        else {
            response.message = per;
        }
        resp.status(response.status).json(response.message)
    })
}
module.exports.deleteOne = (req, resp) => {
    console.log("OnDeleteOnePerson");
    const perID = req.params.perId;

    Person.findByIdAndDelete(perID, (err, per) => {
        const response = {
            status: 200,
            message: ""
        }
        if (err) {
            response.status = 500;
            response.message = err
        } else if (!per) {
            response.status = 200;
            response.message = ({ "message": "You Don't have this Person" })
        }
        else {
            response.message = per;
        }
        resp.status(response.status).json(response.message)
    })
}
module.exports.addOne = (req, resp) => {
    console.log('OnAddOne');
    const newOne = {};
    if (req.body.firstname)
        newOne.firstname = req.body.firstname;
    if (req.body.surmname)
        newOne.surmname = req.body.surmname;
    if (req.body.born)
        newOne.born = req.body.born;
    if (req.body.bornCountry)
        newOne.bornCountry = req.body.bornCountry;
    if (req.body.bornCity)
        newOne.bornCity = req.body.bornCity;
    if (req.body.year)
        newOne.year = parseInt(req.body.year);
    if (req.body.category)
        newOne.category = req.body.category;
    if (req.body.gender)
        newOne.gender = req.body.gender;
    if (req.body.affiliation)
        newOne.affiliation = req.body.affiliation;

    Person.create(newOne, (err, created) => {
        const response = {
            status: 200,
            message: ""
        }
        if (err) {
            response.status = 400;
            response.message = err
        } else {
            response.status = 201;
            response.message = created
        }
        resp.status(response.status).json(response.message);
    })

}
module.exports.search = (req, resp) => {
    console.log('OnSearch');
    let cat = '';
    if (req.query && req.query.cat) {
        cat = req.query.cat;
        Person.find({"category":cat}).exec((err, pers) => {
            const response = {
                status: 200,
                message: ""
            }
            if (err) {
                response.status = 404;
                response.message = err
            }
            else {
                response.message = pers;
            }
            resp.status(response.status).json(response.message)
        })
    
    }
}