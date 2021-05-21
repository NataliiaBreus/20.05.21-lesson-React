// Task сделать простейший рендер карточки пользователя. Использовать ESModules

function createUserCard({name = '', description = ''}) {
  const card = document.createElement('article');
  const heading = document.createElement('h2');
  heading.innerText = name;
  const cardDescription = document.createElement('p');
  cardDescription.innerText = description;
  card.append(heading, cardDescription);
  return card;
}

function renderCard(user) {
  const rootElem = document.getElementById('root');
  rootElem.append(createUserCard(user));
}
export default renderCard;