const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create();



const sess = {
  secret: "process.env.SECRET",
  cookie: {_expires: 300000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ //stores session in db
    db: sequelize
  })
};

//asking express to initiate session middleware, and declaring session params in variable above//
app.use(session(sess));


// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
});