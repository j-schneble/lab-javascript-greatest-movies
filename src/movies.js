// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const directors = ["Steven Spielberg", "Cristopher Nolan", "Steven Spielberg"];

function getAllDirectors(moviesArr) {
  return moviesArr
    .map(function (movie) {
      return movie.director;
    })
    .filter(function (director, index, sourceArray) {
      return sourceArray.indexOf(director) === index;
    });
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(Arr) {
  return moviesArr.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length == 0) {
    return 0;
  }
  return Math.round((movies.reduce((a,b) => a + (b.score ? b.score: 0), 0) / movies.length) * 100) / 100
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore() {}
const dramaMoviesScore = (arr) => {
  let total = 0,
  len = 0;
arr.forEach((element) => {
  if (element.genre.includes("Drama")) {
    total += element.score;
    len++;
  }
});
return len == 0 ? 0 : Math.round((total / len) * 100) / 100;
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies) {
  let newArr = [...movies]
let byYear = newArr.sort(function(a,b) {

if (a.year < b.year) {
  return -1
} else if (a.year > b.year) {
  return 1
} else return a.title.localeCompare(b.title)

})
return byYear
} 

// let byYear = newArr.sort(function (a, b)) {
// byYear.sort((a,b) => {return} (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0 })
// return newArr
// return (a.year < b.year) ? -1 : (a.year > b.year) ? 1 : a.title.localeCompare(b.title)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.map(element => element.title).sort().slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
};
