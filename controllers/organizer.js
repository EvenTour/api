const Organizer = require('../models').Organizer;

module.exports = {
    listOrganizers(req,res){
        return Organizer.findAll({
            order:[
                ['createdAt','DESC'],
            ]
        })
            .then((organizers) => res.status(200).send(organizers))
            .catch((error)=>{ res.status(400).send(error); });
    },
    addOrganizer(req,res){
        return Organizer.create({
            urlImage : req.body.urlImage,
            name: req.body.name,
            contactUrl: req.body.contactUrl,
            field: req.body.field,
            event_id: req.body.event_id
        })
            .then((organizer) => res.status(201).send(organizer))
            .catch((error)=>{ res.status(400).send(error); });
    }
};