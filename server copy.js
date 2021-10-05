// /* === External Modules === */
// const express = require('express');
// const methodOverride = require('method-override');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// require('./config/db.connection');
// require('dotenv').config();

// // module instance
// const app = express();

// // PORT
// const PORT = 3000;

// /* === Internal Modules === */
// const controllers = require('./controllers');

// // App Config
// app.set("view engine", "ejs");

// // Session Controller
// app.use(
//   session({
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGODB_URI
//     }),
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
//     },
//   })
// );

// /* === Middleware === */

// app.use((req, res, next) => {
//   res.locals.user = req.session.currentUser;
//   return next();
// });

// app.use(express.static("public"));


// app.use(express.urlencoded({
//   extended: true
// }));

// app.use(methodOverride("_method"));

// app.use(require('./utils/logger'));

// app.get('/', (req, res) => {
//   if (!req.session.currentUser) {
//     return res.redirect('/albums');
//   }
//   return res.redirect(`/users/${req.session.currentUser.id}`);
// });

// /* === Routes === */
// app.use('/', controllers.auth);
// app.use('/albums', controllers.album);
// app.use('/comments', controllers.comment);
// app.use('/users', controllers.user);


// // 404
// app.get("/*", (req, res) => {
//   const context = {
//     error: req.error,
//     session: req.session.currentUser,
//   };

//   res.render("error/404", context);
// });

// app.listen(process.env.PORT || 3000, () => console.log(`Listening for some tunes on port:`, PORT));