const Event = require('../models').Event;

module.exports = {
  list(req,res){
      return Event.findAll({
          order:[
              ['createdAt','DESC'],
          ]
      })
          .then((events) => res.status(200).send(events))
          .catch((error)=>{ res.status(400).send(error); });
  },
    add(req,res){
      return Event.create({
          event_name : req.body.event_name,
          startDate : req.body.startDate,
          endDate : req.body.endDate,
          duration : req.body.duration
      })
          .then((events) => res.status(201).send(events))
          .catch((error)=>{ res.status(400).send(error); });
    }
};