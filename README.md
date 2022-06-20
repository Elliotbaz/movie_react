# Movies_React
a react project for movies

the project get an API call from https://www.themoviedb.org/ to get the informations needed to render

components:
likedMovie and movie folder contains the layout of how we intend the information of the project to be rendered when we navigate to the root path (showing all movie) or the /liked path (showing only liked movies)

the LikedMovieRouter and MovieRouter simple renders the movies gotten from (likedMovie & movie, as state above), this Routers files will be used by the App.js to render a Route path element. 

the store folder is a Context API where i used needed to access the state of the button clicked to passing the object of the data cliked, which is located in the movies. I did not want to keep forwarding props so i move the data to the App.js using props function, and wrapped the entire App element with the Provider to make it accessible to other components. 

I use the context hook to access the data gotten from the Movies.js over to the App.js to be access in the LikedMoviesRouter, so i can access this data and loop over it. 

So as user keeps clicking the like movie it keeps adding to the liked state array, which is found in the App.js to keep track of the liked movies to send over to the context provider as data

