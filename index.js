require('dotenv').config();
const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const recipeRouter   = require('../controller/recipes');


const PORT = process.argv[2] || process.env.PORT || 3000;


const app = express();
const dir = {
  public:      path.join(__dirname, 'public'),
  jquery:      path.join(__dirname, 'node_modules/jquery/dist'),
  materialize: path.join(__dirname, 'node_modules/materialize-css/dist'),
};


app.use(logger('dev'));

const marked = require("marked");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(dir.public));
app.use('/vendors/jquery', express.static(dir.jquery));
app.use('/vendors/materialize', express.static(dir.materialize));

// Set up Node to use EJS as templating engine
app.set('view engine', 'ejs');


app.use(methodOverride('_method'));

/* ROUTES */
app.use("/", recipeRouter);
//app.use('/recipes', require('./controllers/recipes');

app.get('/recipes', (req, res) => {
    res.render(recipes.ejs, 'recipes');
   });

app.get('/', (req, res) => {
  res.redirect(301, '/home');
});

app.post("/recipes", (req, res) => {
    //Take the contents of the form textarea and parse them into HTML
    const parsedContent = marked(req.body.markdown);

    res.render("markdown", {
        content: parsedContent
    });
});

// Global error handler middleware
// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack, next);
  return res.sendStatus(500);
});

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));
