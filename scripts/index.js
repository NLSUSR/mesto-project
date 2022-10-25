// (✿◠‿◠)
// люблю писать коментарии в коде, ведь это значительно упрощает понимание кода!
// смена аватара
const profileAvatar = document.querySelector('#profileAvatar');
const popupChangeAvatarSection = document.querySelector('#changeAvatarSection')
const urlChangeAvatarInput = document.querySelector('#urlChangeAvatarInput');
const saveChangeAvatarButton = document.querySelector('#saveChangeAvatarButton');
const closeChangeAvatarButton = document.querySelector('#closeChangeAvatarButton');
// функция открытия редактирования аватара 
function openAvatarReplacement() {
    popupChangeAvatarSection.classList.add('popup_opened');
};
profileAvatar.addEventListener('click', openAvatarReplacement);
// функция вставки ссылки на картинку аватара
function saveAvatar() {
    profileAvatar.setAttribute('src', `${urlChangeAvatarInput.value}`);
    return closeAvatarReplacement() // закрытие после сохранения
}
saveChangeAvatarButton.addEventListener('click', saveAvatar);
// функция закрытия редактирования аватара
function closeAvatarReplacement() {
    popupChangeAvatarSection.classList.remove('popup_opened');
};
closeChangeAvatarButton.addEventListener('click', closeAvatarReplacement);
// вообще я хотел добавить в редактирование профиля инпут , 
// а по нажатию на аватар открывался бы аватар , 
// но не стал отходить от макета поэтому as it is!

// --------------------------------------------------------------------------

// редактирование имени и сферы деятельности
const editProfileButton = document.querySelector('#editProfileButton');
const editProfileSection = document.querySelector('#editProfileSection');
const profileNameInput = document.querySelector('#profileNameInput');
const profileActivityInput = document.querySelector('#profileActivityInput');
const saveEditProfileButton = document.querySelector('#saveEditProfileButton');
const closeEditProfileButton = document.querySelector('#closeEditProfileButton');

// функция открытия редактирования профиля
function openProfileReplacement() {
    editProfileSection.classList.add('popup_opened');
}
editProfileButton.addEventListener('click', openProfileReplacement);
// функция сохранения данных пользователя
function saveProfileReplacement() {
    profileName.innerText = `${editProfileNameInput.value}`;
    profileActivity.innerText = `${editProfileActivityInput.value}`;
    return closeProfileReplacement() // закрытие после сохранения
}
saveEditProfileButton.addEventListener('click', saveProfileReplacement);
// функция закрытия редактирования профиля
function closeProfileReplacement() {
    editProfileSection.classList.remove('popup_opened');
};
closeEditProfileButton.addEventListener('click', closeProfileReplacement);

// --------------------------------------------------------------------------

// добавление карточки
const addCardButton = document.querySelector('#addCardButton');
const addCardSection = document.querySelector('#addCardSection');
const elementsList = document.querySelector('#elementsList')
const addCardTitleInput = document.querySelector('#addCardTitleInput');
const addCardImageLinkInput = document.querySelector('#addCardImageLinkInput');
const saveAddCardButton = document.querySelector('#saveAddCardButton');
const closeAddCardButton = document.querySelector('#closeAddCardButton');
// функция открытия добавления карточки
function openEditCard() {
    addCardSection.classList.add('popup_opened');
}
addCardButton.addEventListener('click', openEditCard);
// функция сохранения добавления карточки
function saveEditCard() {
    elementsList.insertAdjacentHTML('afterbegin', `
    <li class="elements__item">
        <div class="element">
            <button type="button" class="element__delete"></button>
            <img class="element__mask-group link-hover" src="${addCardImageLinkInput.value}" alt="фото карточки">
            <div class="element__description">
                <h2 class="element__place-name">${addCardTitleInput.value}</h2>
                <button type="button" class="element__like"></button>
            </div>
        </div>
    </li>
`);
    return closeEditCard(); // закрытие после сохранения
}
saveAddCardButton.addEventListener('click', saveEditCard);
// функция закрытия добавления карточки
function closeEditCard() {
    addCardSection.classList.remove('popup_opened');
}
closeAddCardButton.addEventListener('click', closeEditCard);

// --------------------------------------------------------------------------

// // удаление карточки
// const elementDeleteButton = document.querySelector('element__delete');

// // функция удаления карточки
// function deleteCard() {

// }
// elementDeleteButton.addEventListener('click', deleteCard);

// --------------------------------------------------------------------------


const elementLikeButton = document.querySelectorAll('.element__like');

elementLikeButton.forEach((item, i) => {
    item.addEventListener('click', () => {
        elementLikeButton[i].classList.toggle('element__like_active');
    });
});





// (╯°益°)╯彡┻━┻