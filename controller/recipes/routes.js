const router     = require('express').Router();
const controller = require('./controller');
const views      = require('./viewsController');


router.get('/add', controller.create, views.formNew);

router.post('/recipes', controller.create, views.handleCreate);

router.get('/', controller.getOne, )


// FILE LOCATION: routes.js
  //above is saying when you get a request on the /new URL

// FILE LOCATION: routes.js
// router.get('/:id/edit', controller.getOne, views.formEdit);


 // .put(controller.update, views.handleUpdate)
 //
 //
 // .put(controller.update, views.handleUpdate)
 //
 //       FILE LOCATION: viewsController.js in RES
 //       handleUpdate(req, res) {
 //         res.format({
 //           /* REDIRECT TO THE HOME PAGE */
 //           html() {
 //             res.redirect('/home');
 //           },
 //           /* SEND OUT JSON */
 //           // we don't need a body, just a 201
 //           json() {
 //             res.location(`/recipes/${res.locals.recipe.id}`)
 //             .sendStatus(200);
 //           },
 //         });
 //       },
