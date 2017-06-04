//       // FILE LOCATION: viewsController.js in RES
module.exports = {
formNew(req, res) {
  res.render('recipes/new');
},

//       // FILE LOCATION: viewsController.js in RES
formEdit(req, res) {
  res.render('recipes/edit', {
    recipe: res.locals.recipe,
    });
},”

// FILE LOCATION: viewsController.js in RES
handleCreate(req, res) {
  res.format({
          /* REDIRECT TO THE HOME PAGE */
    html() {
      res.redirect('/recipes');
          },

      json() {
        res.location(`/recipes/${res.locals.recipe.id}`)
            .sendStatus(201);
          },
        });
      },

handleUpdate(req, res) {
  res.format({
          /* REDIRECT TO THE HOME PAGE */
    html() {
      res.redirect('/home');
},

      json() {
        res.location(`/recipes/${res.locals.recipe.id}`)
            .sendStatus(200);
          },
        });
      },
