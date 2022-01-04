const path = require('path'); //guide express.static to public folder
const express = require('express'); //express server
const session = require('express-session'); //import express-session
const exphbs = require('express-handlebars'); // import express-handlebars
const routes = require('./controllers'); //import from controllers routes
const sequelize = require('./config/connection'); //import connection to db
// const exphbs = require('express-handlebars'); //if needed, to use with /utils
const SequelizeStore = require('connect-session-sequelize')(session.Store); //storing sessions

//could be useful to add helpers for hb, routing (withAuth?)
//const hbs = exphbs.create({ helpers })

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  //session
  secret: 'Super secret secret',
  cookie: { maxAge: 1000 * 60 * 10 }, //cookie timer is 10 minutes (60000 ms)
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess)); //middleware for sessions

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine); //use handlebars
app.set('view engine', 'handlebars'); //use handlebars

app.use(express.json()); //middleware request object as json object
app.use(express.urlencoded({ extended: true })); //middleware recognize request object as string/array
app.use(express.static(path.join(__dirname, 'public'))); //middleware to direct to public folder

// turn on routes
app.use(routes);


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});