const Name = require('../models/name.model')

exports.showAll = (req, res) => {
    console.log("showing all people");
    Name.find()
        .then(names => res.json(names))
        .catch(err => res.json(err))
}
exports.newName = (req, res) => {
    console.log("adding name");
    const name = new Name();
    name.name = req.params.name;
    name.save()
        .then(names => res.redirect('/'))
        .catch(err => res.json(err))
}
exports.removeName = (req, res) => {
    console.log('removing name');
    Name.findOne({name: req.params.name}) 
        .then(name => {
            Name.remove({name: req.params.name})
                .then(name => res.redirect('/'))
                .catch(err => res.json(err))
        .catch(err => res.json(err))
        })
}
exports.showOne = function(req, res){
    console.log('showing name');
    Name.findOne({name: req.params.name})
        .then(name => res.json(name))
        .catch(err => res.json(err))
}