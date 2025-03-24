const favouriteMovies = [];

const numberOfMovies = prompt('How many movies do you want to add?');
const amount = parseInt(numberOfMovies);

while (favouriteMovies.length < amount) {
  const movie = {
    title: prompt('Enter the title of your favourite movie:'),
    rating: parseFloat(prompt('Enter the rating of your favourite movie:')),
  };
  favouriteMovies.push(movie);
}

const descendingOrder = favouriteMovies.sort((a, b) => b.rating - a.rating);

const highestRated = descendingOrder[0];

const divElement = document.createElement('div');
document.body.appendChild(divElement);

const h1Element = document.createElement('h1');
h1Element.textContent = `The highest rated movie is: ${highestRated.title} with a rating of ${highestRated.rating}`;
divElement.appendChild(h1Element);

const movieList = document.createElement('or');
for (let i = 0; i < favouriteMovies.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent += `${favouriteMovies[i].title} - ${favouriteMovies[i].rating}\n`;
  movieList.appendChild(listItem);
}

divElement.appendChild(movieList);
