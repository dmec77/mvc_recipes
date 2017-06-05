const Recipe = require('../../models/recipes');

// FILE LOCATION: controller.js in RES
create(req, res, next) {
  debugger;
  Recipe.save(req.body.recipe)
    .then((recipe) => {
      res.locals.recipe = recipe;
      next();
    })
    .catch(err => next(err));
},

// FILE LOCATION: controller.js in RES
getOne(req, res, next) {
  Recipe.findByCategory(req.params.category)
    .then((recipes.category) => {
      res.locals.recipe = recipe;
      next();
    })
    // res.render ('recipe.ejs', {
    //   cat: category
    // })
    .catch(() => res.sendStatus(404));
},



//   FILE LOCATION: controller.js in RES
// Recipe.findAll()
//     .then((recipes) => {
//       res.locals.recipes = recipes;
//       next();
//     })
//     .catch(err => next(err));
// },


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
