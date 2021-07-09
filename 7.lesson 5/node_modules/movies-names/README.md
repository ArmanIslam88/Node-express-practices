# Movies Names 
  Contains a list of 1900-2018 hollywood movies from Wikipedia in convenient form: an array of objects, each representing a movie, with a title string, year integer, a cast array and a genres array -- each representing the text content of those respective columns in the Wikipedia tables"
  
## Installation
Use npm to install movies-names package
```npm
npm install movies-names
```

## Usage
```javascript
var moviesNames = require('movies-names');
moviesNames.all # returns all movies
moviesNames.random() # returns a random movie name
moviesName.random(2) # returns specified number of random movies
moviesNames.getmovieName('The Dark Knight') # returns specified movie 

```

## Purpose
This package came out of my curiosity to learn how to develop and deploy/publish an npm package. Using `Travis CI`, `semantic-release`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
