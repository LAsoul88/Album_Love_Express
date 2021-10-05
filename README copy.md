# <a href="https://album-love.herokuapp.com/">Album Love</a>

In the age of streaming music, we have removed the necessity for physical media when it comes to our listening needs. One casualty of the current musical epoch is the loss of album art. It's not that we no longer have beautiful visual representations of sonic media, but rather we no longer get to see it in all its glory. Album art has been reduced to thumbnails and social media posts on our phones, hardly enough to do the medium justice! 

Album Love seeks to bridge the gap and bring album art back into our lives with large, high definition versions that will unite us (from streamers to vinyl-lovers) as we listen to AND look at music!

## Technologies used

Album Love is a full stack application built primarily on the NEM stack (Node, Express, MongoDB) for the back-end and EJS for dynamically templating the front-end. In addition, AXIOS was used to format API queries correctly. The database is hosted on one of MongoDB's Atlas servers, and the application is deployed to the web through Heroku.

## Installation

I used Spotify's Web API to populate all art and information from the albums throughout the site. This was made possible by the <a href="https://developer.spotify.com/">Spotify for Developers</a> platform. If you are interested in developing with this fantastic database or tinkering with Album Love, you will need to start there.

To make proper API queries to Spotify, you must make a developer account and create an app in their interface. Once done, Spotify will provide you with a Client Id and Client Secret, both of which are necessary for queries. In addition, you will need to learn how to create and refresh access tokens, which are the third item necessary for proper authorization. You will also find useful documentation and information on how to use many of the other functionalities they offer once you set up an account. 

NOTE: I did not make use of any user information (playlists, profiles, etc) or actual music in my site. This made my task quite a bit easier, as my users are not required to log into their own Spotify accounts to use the application.

You will also need to set up a database to store user and comment information. Local or remote will do, but I recommend local for testing and development. The application slowed down quite a bit when it was still offline but using an online database.

Otherwise, forking and cloning the Album Love repo will provide you with almost everything to get started. The last bit you will need are the list of dependencies in the following section. If you choose to play with the application, have fun! 

### Dependencies

axios: 0.21.4 - for formatting API querys correctly <br>
bcryptjs: 2.4.3 - for hashing, salting, and comparing passwords <br>
connect-mongo: 4.5.0 - for creating a MongoDB instance <br>
dotenv: 10.0.0 - for storing secret strings securely <br>
ejs: 3.1.6 - for dynamically rendering template views <br>
express: 4.17.1 - for building out the back-end (server) <br>
express-session: 1.17.2 - for creating and tracking sessions <br>
method-override: 3.0.0 - used to include PUT and DELETE routes <br>
mongoose: 6.0.5 - an object data modeling library for MongoDB and Node <br>
querystring: 0.2.1 - used with AXIOS to properly format strings for API querys (this dependency was deprecated during development of this application, URLSearchParams API is recommended in its place)

## Looking to the Future

Creating this application by myself and with a strict time limit, I was faced with many difficult decisions when it came to design, functionality, and styling. In this section, I will outline current issues and where I want to take Album Love.

### Big Picture

The first change I make will likely be a large-scale refactor of the front end of the site. Right now, EJS is handling the templating and rendering the individual web pages, but I would like to replace EJS with React. While I am proud of what I have created, the website does look a bit dated in many ways. It is a social media site, but it bears more of a resemblance to Myspace than to Facebook. There are many components in this application, and it would be convenient to compartmentalize said components in smaller chunks.

The second task will be to apply more mobile responsive styling. Where it stands now, Album Love doesn't look great on smaller laptop screens or mobile devices. In this day and age, that is not an acceptable feature. Especially on the individual album page, there is more work to do when it comes to organizing the elements in a logical way that doesn't lead to overlapping or strange spacing. In addition, it may be wise to completely reimagine the structure of the CSS in this application. While it works for the most part, it still feels clunky and disorganized to me. 

For the comments, ultimately I would like to develop in one of two directions. For one, it would be great to allow users to respond and reply to each other directly when it comes to comments. Alternatively, I could develop something more akin to a modern forum. Either way would allow for conversations to more organically unfold on the platform.

### Smaller Picture

While the color scheme is not awful, I found designing around it to be more of a chore than a joy at times. This may come with the territory of design, but I think there might be simple changes that would yield a much more intuitive design. 

I would like to implement more functionality around profiles and editing. As it stands, the user's avatar is the only part of their profile that can be edited, and even that doesn't fully work unless the user logs out and back in. My goal is to allow for the user to fully change their username, password, email, and avatar. This will likely get its own page, instead of being a part of the record collection page.

I didn't have time to finish the footer and about sections. I would like to fully flesh those out for personal purposes and to give proper credit to Spotify as their Web API made this possible.

#### Unsolved Problems

There is a small chance that users will be sent to the error page when attempting to view an album page. I haven't been able to narrow down why this happens yet, but this will be a key bug to fix.

Certain animations on links/buttons don't quite work the way I anticipated. This hasn't stopped the application from working, but it does contribute to an inconsistent, less satisfying user experience.

## Planning Materials

For a look at the planning materials and logic behind the development of this application, see the PLANNING.md document in this repo. There you will find user stories, wireframes, entity relationship diagrams, and more from the initial stages of development. 

<a href="https://github.com/LAsoul88/Album_Love/blob/court/PLANNING.md">Planning</a>
