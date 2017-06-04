const router     = require('express').Router();
const controller = require('./controller');
const views      = require('./viewsController');



// FILE LOCATION: routes.js
router.get('/new', views.formNew);
  //above is saying when you get a request on the /new URL

// FILE LOCATION: routes.js
router.get('/:id/edit', controller.getOne, views.formEdit);
 .post(controller.create, views.handleCreate);

 .put(controller.update, views.handleUpdate)


 .put(controller.update, views.handleUpdate)

       FILE LOCATION: viewsController.js in RES
       handleUpdate(req, res) {
         res.format({
           /* REDIRECT TO THE HOME PAGE */
           html() {
             res.redirect('/home');
           },
           /* SEND OUT JSON */
           // we don't need a body, just a 201
           json() {
             res.location(`/recipes/${res.locals.recipe.id}`)
             .sendStatus(200);
           },
         });
       },