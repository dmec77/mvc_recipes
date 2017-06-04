require('dotenv').config();
const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const recipeRouter   = require('/controllers/recipes');


const PORT = process.argv[2] || process.env.PORT || 3000;


const app = express();
const dir = {
  public:      path.join(__dirname, 'public'),
  jquery:      path.join(__dirname, 'node_modules/jquery/dist'),
  materialize: path.join(__dirname, 'node_modules/materialize-css/dist'),
};


app.use(logger('dev'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(dir.public));
app.use('/vendor/jquery', express.static(dir.jquery));
app.use('/vendor/materialize', express.static(dir.materialize));

// Set up Node to use EJS as templating engine
app.set('view engine', 'ejs');


app.use(methodOverride('_method'));

/* ROUTES */
app.use("/", recipeRouter);
//app.use('/recipes', require('./controllers/recipes');


app.get('/', (req, res) => {
  res.redirect(301, '/home');
});

// Global error handler middleware
// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack, next);
  return res.sendStatus(500);
});

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));
