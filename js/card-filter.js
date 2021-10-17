import {cards} from "./card-projects.js";

const filterContainerEl = document.querySelector('.filter');
const cardContainerEl = document.querySelector('.projects');

filterContainerEl.addEventListener('click', categoryFilter)

function categoryFilter(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
    cardContainerEl.innerHTML = ''
    const keyWord = e.target.textContent;
    if (keyWord === 'Все') {
        cardContainerEl.innerHTML = cardBuilder(cards);
        return
    }

    const newList = cards.filter(card => card.categorie === keyWord)
    cardContainerEl.innerHTML = cardBuilder(newList)
}

function cardBuilder(cards) {
    return cards.map(card => `<li class="projects__card">
                        <a href="" class="projects__link link">
                            <div class="projects__thumb">
                                <img srcset="${card.image}" src="./images/portfolio-1.jpg" alt="${card.imageAlt}"
                                    width="370">
                                <p class="projects__description">Технокряк это современная площадка распространения
                                    коронавируса. Компании используют
                                    эту платформу для цифрового
                                    шпионажа и атак на защищённые сервера конкурентов.</p>
                            </div>
                            <div class="projects__name-block">
                                <h2 class="projects__title">${card.title}</h2>
                                <p class="projects__variant">${card.categorie}</p>
                            </div>
                        </a>
                    </li>`).join('');
}
