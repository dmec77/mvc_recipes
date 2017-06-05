const db = require('../config/database');

module.exports = {

  save(recipe) {
  debugger;
  return db.one(`
  INSERT INTO recipes (
  recipe_name,
  category,
  main_ingredient,
  keyword,
  date_created,
  ) VALUES (
  $/recipe_name/,
  $/category/,
  $/main_ingredient/,
  $/keyword/,
  $/date_created/,
  )
  RETURNING *
  `, recipe);
  },

          // FILE LOCATION: controller.js in RES
          // create(req, res, next) {
          //   debugger;
          //   Recipe.save(req.body.recipe)
          //     .then((recipe) => {
          //       res.locals.recipe = recipe;
          //       next();
          //     })
          //     .catch(err => next(err));
          // },

              // FILE LOCATION: routes.js
              // ****  .post(controller.create, views.handleCreate);
              //
              //       // FILE LOCATION: viewsController.js in RES
              //       // handleCreate(req, res) {
              //       //   res.format({
              //       //     /* REDIRECT TO THE HOME PAGE */
              //       //     html() {
              //       //       res.redirect('/home');
              //       //     },
              //       //
              //       //     /* SEND OUT JSON */
              //       //     // we don't need a body, just a 201
              //       //     json() {
              //       //       res.location(`/recipes/${res.locals.recipe.id}`)
              //       //       .sendStatus(201);
              //       //     },
              //       //   });
              //       // },

findByCategory(category) {
  return db.one(`
    SELECT *
    FROM recipes
    WHERE category = $1
  `, category);
},

                    // FILE LOCATION: controller.js in RES
                    // getOne(req, res, next) {
                    //   Recipe.findById(req.params.id)
                    //     .then((recipe) => {
                    //       res.locals.recipe = recipe;
                    //       next();
                    //     })
                    //     .catch(() => res.sendStatus(404));
                    // },

                              // FILE LOCATION: routes.js
                              // *****router.get('/:id/edit', controller.getOne, views.formEdit);
                              //
                              //       // FILE LOCATION: viewsController.js in RES
                              //       // formEdit(req, res) {
                              //       //   res.render('recipes/edit', {
                              //       //     recipe: res.locals.recipe,
                              //       //   });
                              //       // };


  findAll() {
    return db.any(`
      SELECT *
      FROM recipes
      ORDER BY id
      DESC
    `);
  },

                //   FILE LOCATION: controller.js in RES
                //   Recipe.findAll()
                //     .then((recipes) => {
                //       res.locals.recipes = recipes;
                //       next();
                //     })
                //     .catch(err => next(err));
                // },

                      // FILE LOCATION: routes.js
                      // *****router.get('/new', views.formNew);
                      //   //above is saying when you get a request on the /new URL
                      //
                      //       // FILE LOCATION: viewsController.js in RES
                      //       // formNew(req, res) {
                      //       //   res.render('recipes/new');
                      //       // },


update(recipe) {
return db.one(`
UPDATE recipes
SET recipe_namee = $/recipe_name/,
category = $/category/,
main_ingredient = $/main_ingredient/,
keyword = $/keyword/,
date_created = $/date_created/,
WHERE id = $/id/
RETURNING *
`, recipe);
},

******** FIX SO DOES NOT CHANGE EXISTING********
          // FILE LOCATION: controller.js in RES
          // update(req, res, next) {
          //   Recipe.findById(req.params.id)
          //     .catch(() => res.sendStatus(404))
          //     .then((oldHotel) => {
          //       const newHotel = {};
          //       // body.hotel + oldhotel = newHotel
          //       Object.assign(newHotel, oldHotel, req.body.hotel);
          //       return Hotel.update(newHotel);
          //     })
          //     .then((hotel) => {
          //       res.locals.hotel = hotel;
          //       next();
          //     })
          //     .catch(err => next(err));
          // },

                  // FILE LOCATION: routes.js
                  // .put(controller.update, views.handleUpdate)
                  //
                  //       // FILE LOCATION: viewsController.js in RES
                  //       // handleUpdate(req, res) {
                  //       //   res.format({
                  //       //     /* REDIRECT TO THE HOME PAGE */
                  //       //     html() {
                  //       //       res.redirect('/home');
                  //       //     },
                  //       //
                  //       //     /* SEND OUT JSON */
                  //       //     // we don't need a body, just a 201
                  //       //     json() {
                  //       //       res.location(`/recipes/${res.locals.recipe.id}`)
                  //       //       .sendStatus(200);
                  //       //     },
                  //       //   });
                  //       // },



********* THIS IS TO DELETE ********* ?????

//   destroy(id) {
//     return db.none(`
//       DELETE
//       FROM hotels
//       WHERE id = $1
//     `, id);
//   },
// };
//
//                       // FILE LOCATION: controller.js in RES
//                       // destroy(req, res, next) {
//                       //   Hotel.destroy(req.params.id)
//                       //     .then(() => next())
//                       //     .catch(err => next(err));
//                       // },
//                       // };
//
//                             FILE LOCATION: routes.js
//                             ****  .delete(controller.destroy, views.handleDelete);
//
//                                   // FILE LOCATION: viewsController.js in RES
//                                   // handleDelete(req, res) {
//                                   //   res.format({
//                                   //     /* REDIRECT TO THE HOME PAGE */
//                                   //     html() {
//                                   //       res.redirect('/hotels');
//                                   //     },
//                                   //
//                                   //     /* SEND OUT JSON */
//                                   //     // we don't need a body, just a 202
//                                   //     json() {
//                                   //       res.sendStatus(204);
//                                   //     },
//                                   //   });
//                                   // },
