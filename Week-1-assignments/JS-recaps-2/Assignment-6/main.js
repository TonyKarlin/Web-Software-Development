const favouriteMovies = [
  {
    title: '',
    rating: null,
  },
];

const numberOfMovies = prompt('How many movies do you want to add?');
const amount = parseInt(numberOfMovies);

while (favouriteMovies.length < amount) {
  favouriteMovies.title = prompt('Enter the title of your favourite movie:');
  favouriteMovies.rating = prompt('Enter the rating of your favourite movie:');
  favouriteMovies.push(favouriteMovies);
}

const descendingOrder = favouriteMovies.sort((a, b) => b.rating - a.rating);

const highestRated = descendingOrder[0];

const divElement = document.createElement('div');
document.body.appendChild(divElement);

const h1Element = document.createElement('h1');
h1Element.textContent = `The highest rated movie is: ${highestRated.title} with a rating of ${highestRated.rating}`;
divElement.appendChild(h1Element);

const movieList = document.createElement('p');
for (let i = 0; i < favouriteMovies.length; i++) {
  movieList.textContent += `${favouriteMovies[i].title} - ${favouriteMovies[i].rating}`;
}
divElement.appendChild(movieList);
