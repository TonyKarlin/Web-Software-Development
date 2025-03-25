import {fetchData} from '../lib/fetchData.js';

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
let restaurants = [];

async function getRestaurants() {
  try {
    restaurants = await fetchData(apiUrl + '/restaurants');
  } catch (e) {
    console.error(e);
  }
}

async function getMenu(id, lang) {
  try {
    return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
  } catch (e) {
    console.error(e);
  }
}

function sortRestaurants() {
  restaurants.sort((a, b) => {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });
}

function createModal(restaurant, modal) {
  const modalHeader = document.createElement('h2');
  modalHeader.innerText = restaurant.name;
  modal.appendChild(modalHeader);
  const modalParagraph = document.createElement('p');
  modalParagraph.innerText = `Address: ${restaurant.address}\n
        Postal Code: ${restaurant.postalCode}\n
        City: ${restaurant.city}\n
        Phone nr: ${restaurant.phone}\n
        Company: ${restaurant.company}`;
  modal.append(modalParagraph);
}

function createRestaurantCells(restaurant, tr) {
  const nameData = document.createElement('td');
  nameData.innerText = restaurant.name;

  const addressData = document.createElement('td');
  addressData.innerText = restaurant.address;

  const city = document.createElement('td');
  city.innerText = restaurant.city;
  tr.append(nameData, addressData, city);
}

function createMenuHtml(courses) {
  let html = '';
  for (const course of courses) {
    html += `
    <article class="menu">
      <p><strong>${course.name}</strong>,
      ${course.price}€,
      Diet: ${course.diets}</p>
    </article>`;
  }

  return html;
}

function displayRestaurants() {
  const table = document.querySelector('table');
  const modal = document.querySelector('#modal');

  let previousHighlight;

  restaurants.forEach((restaurant) => {
    const tr = document.createElement('tr');
    tr.addEventListener('click', async () => {
      try {
        if (previousHighlight) {
          previousHighlight.classList.remove('highlight');
        }

        tr.classList.add('highlight');

        const courseResponse = await getMenu(restaurant._id, 'fi');

        const menuHtml = createMenuHtml(courseResponse.courses);

        previousHighlight = tr;

        modal.innerHTML = '';
        modal.showModal();
        createModal(restaurant, modal);
        modal.insertAdjacentHTML('beforeend', menuHtml);
      } catch (e) {
        console.log(e);
      }
    });

    createRestaurantCells(restaurant, tr);
    table.append(tr);
  });
}

async function main() {
  try {
    await getRestaurants();
    sortRestaurants();
    displayRestaurants();
  } catch (e) {
    console.error(e);
  }
}

main();
