module.exports = app => {
    const nameController = require('../controllers/names.controllers');
        app.get('/', nameController.showAll);
        app.get('/new/:name', nameController.newName);
        app.get('/remove/:name', nameController.removeName);
        app.get('/:name', nameController.showOne);
};