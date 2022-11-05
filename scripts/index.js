// карточки из коробочки
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//--------------------------------------------------------------------------
// переменные профиля

const editProfileButton = document.querySelector('#editProfileButton');
const profileInfo = document.querySelector('#profileInfo');
const AddCardButton = document.querySelector('#addCardButton');
const profileName = document.querySelector('#profileName');
const profileActivity = document.querySelector('#profileActivity');
const profileAvatar = document.querySelector('#profileAvatar');

//--------------------------------------------------------------------------
// переменные редактирования

const editProfileSection = document.querySelector('#editProfileSection');
const editProfileNameInput = document.querySelector('#editProfileNameInput');
const editProfileActivityInput = document.querySelector('#editProfileActivityInput');
const editProfileAvatarInput = document.querySelector('#editProfileAvatarInput');
const closeEditProfileButton = document.querySelector('#closeEditProfileButton');

//--------------------------------------------------------------------------
// переменные добавления

const addCardSection = document.querySelector('#addCardSection');
const addCardTitleInput = document.querySelector('#addCardTitleInput');
const addCardImageLinkInput = document.querySelector('#addCardImageLinkInput');
const closeAddCardButton = document.querySelector('#closeAddCardButton');

//--------------------------------------------------------------------------
// переменные просмотра

const openImageSection = document.querySelector('#openImageSection');
const openedImage = document.querySelector('#openedImage');
const placeName = document.querySelector('#placeName');
const closeOpenedImage = document.querySelector('#closeOpenedImage');

//--------------------------------------------------------------------------
// переменные создания карточек

const elementsList = document.querySelector('#elementsList');
const cardTemplate = document.querySelector('#cardTemplate').content;

//--------------------------------------------------------------------------
//функция открытия попапа

function openPopup(popup) {
    popup.classList.add('popup_opened');
};

//--------------------------------------------------------------------------
// функция закрытия попапа

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

//--------------------------------------------------------------------------
// функция открытия просмотра фотографии профиля

profileAvatar.addEventListener('click', function () {
    openedImage.setAttribute('src', profileAvatar.src);
    openPopup(openImageSection);
});

//--------------------------------------------------------------------------
// функция сохранения редактирования профиля

function saveEditProfile(event) {
    event.preventDefault();
    profileName.textContent = editProfileNameInput.value;
    profileActivity.textContent = editProfileActivityInput.value;
    profileAvatar.setAttribute('src', editProfileAvatarInput.value);
    closePopup(editProfileSection);
};
saveEditProfileButton.addEventListener('click', saveEditProfile);

//--------------------------------------------------------------------------
// функция сохранения добавления карточки

function saveAddCard(event) {
    event.preventDefault();
    createCards(addCardTitleInput.value, addCardImageLinkInput.value);
    closePopup(addCardSection);
};
saveAddCardButton.addEventListener('click', saveAddCard);

//--------------------------------------------------------------------------
// функция создания карточки

function createCard(text, link) {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector('.element__mask-group');
    const title = card.querySelector('.element__place-name');
    const like = card.querySelector('.element__like');
    const forget = card.querySelector('.element__delete');

    title.textContent = text;
    image.setAttribute('src', link);
    image.setAttribute('alt', text);

    image.addEventListener('click', function () {
        placeName.textContent = text;
        openedImage.setAttribute('src', link);
        openedImage.setAttribute('alt', text);
        openPopup(openImageSection);
    })

    like.addEventListener('click', function (event) {
        event.target.classList.toggle('element__like_active');
    });

    forget.addEventListener('click', function (event) {
        const card = event.target.closest('.elements__item');
        card.remove();
    });

    return card
};

//--------------------------------------------------------------------------
// функция добавления карточки

function addCard(card) {
    elementsList.prepend(card);
};

//--------------------------------------------------------------------------
// функция создания карточек

function createCards(text, link) {
    const newCard = createCard(text, link);
    addCard(newCard);
};

//--------------------------------------------------------------------------
// перебор массива с карточками из коробочки

initialCards.forEach(function (initialCard) {
    createCards(initialCard.name, initialCard.link);
});

//--------------------------------------------------------------------------
// слушатель кнопки редактирования профиля

editProfileButton.addEventListener('click', function () {
    openPopup(editProfileSection);
});

//--------------------------------------------------------------------------
// слушатель кнопки закрытия редактирования профиля

closeEditProfileButton.addEventListener('click', function () {
    closePopup(editProfileSection);
});

//--------------------------------------------------------------------------
// слушатель кнопки добавления карточки

AddCardButton.addEventListener('click', function () {
    openPopup(addCardSection);
});

//--------------------------------------------------------------------------
// слушатель кнопки закрытия добавления карточки

closeAddCardButton.addEventListener('click', function () {
    closePopup(addCardSection);
});

//--------------------------------------------------------------------------
// слушатель кнопки закрытия просматриваемой картинки

closeOpenedImage.addEventListener('click', function () {
    closePopup(openImageSection);
});

//--------------------------------------------------------------------------

// (╯°益°)╯彡┻━┻