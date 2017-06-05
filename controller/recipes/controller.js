const Recipe = require('../../models/recipes');


// edit(req, res, next) {
//
// }
const controller = {}

controller.create = (req, res, next) => {
  Recipe.save(req.body.recipe)
    .then((recipe) => {
      res.locals.recipe = recipe;
      next();
    })
    .catch(err => next(err));
}


controller.getOne = (req, res, next) => {
  Recipe.findByCategory(req.params.category)
    .then((recipes) => {
      res.locals.recipe = recipe.category;
      next();
    })
    res.render ('recipe.ejs', {
      cat: category
    })
    .catch(() => res.sendStatus(404));
}
