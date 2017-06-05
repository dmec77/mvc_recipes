//       // FILE LOCATION: viewsController.js in RES
module.exports = {

formNew(req, res) {
  res.render('recipes/add');
},


handleCreate(req, res) {
  res.format({
  /* REDIRECT TO THE HOME PAGE */
    html() {
      res.redirect('/');
          },
      },
    });

    
