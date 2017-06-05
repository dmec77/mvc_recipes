const router     = require('express').Router();
const controller = require('./controller');
const views      = require('./viewsController');


router.get('/add', controller.create, views.formNew);

router.post('/recipes', controller.create, views.handleCreate);

router.get('/', controller.getOne)
