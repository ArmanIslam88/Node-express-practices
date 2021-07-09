var chai = require('chai'),
    expect = chai.expect;

var movies = require('./index');

describe('movies-names',function(){
    describe('all',function(){
        it('should be an array of objects',function(){
            expect(movies.all).to.satisfy(isArrayOfObjects);

        it('should get movie by title',function(){
            var movie = movies.movieByName('Gandhi');
            expect(movie[0].title).to.equal('Gandhi');
        });

        it('should not be `0` in length or undefined',function(){
            expect(movies.all).to.not.equal(0 || undefined);
        });
        function isArrayOfObjects(array){
            return array.every(function(item){
                return typeof item === 'object';
            });
        }
        });

    }); 

    describe('random',function(){
        it('should not be null or empty',function(){
            expect(movies.random()).to.not.equal({});
        });

        it('should return a random item from movies.all',function (){
            var randomItem = movies.random();
            expect(movies.all).to.include(randomItem);
        });

        it('should return an array of random objects if passed a number',function(){
            var randomItems = movies.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach((item) => {
                expect(movies.all).to.include(item);
            });
        });

    });

    describe('movieByName()',function(){
        it('should log `The Movie youre looking for is not found` if movie is not found',function(){
            var movieNotInTheArray = movies.movieByName('');
            console.log();
            expect(movies.movieByName('')).to.equal(movieNotInTheArray);
        });

        it('should not be empty',function(){
            var movieNotInTheArray = movies.movieByName('Gandhi');
            console.log();
            expect(movies.movieByName('Gandhi')).to.not.equal({});
        });

        it('should return generes only',function(){
            let genresArray = [];
            movies.all.forEach(item => {
                genresArray = genresArray.concat(item.genres).filter((item,i,arr)=>arr.indexOf(item) === i);
            })            
            //expect(genresArray).to.include('Superhero','Independent','Dance','Supernatural','Legal','Found Footage');
            expect(genresArray).to.be.an('array').that.include('Superhero','Independent','Dance','Supernatural','Legal','Found Footage');
            //expect(movies.all).to.deep.include( { title: "Kingsman: The Secret Service",year: 2015,cast: ["Samuel L. Jackson", "Colin Firth", "Taron Egerton", "Mark Strong"],genres: ["Action"]});
        });
    });

});