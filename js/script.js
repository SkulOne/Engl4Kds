class LevelCard {

    constructor(index) {
        if (index < 0) throw new Error("Индекс < 0");
        this.createContainer();
        this.container.appendChild(this.createBackground());
        this.container.appendChild(this.createImage(index));
        this.container.appendChild(this.createTitle(index));
        this.container.setAttribute('onclick', `createWorldCards("${this.title.textContent}")`)
    }

    createContainer() {
        this.container = document.createElement('a');
        this.container.classList.add("card");
    }

    createBackground() {
        this.background = document.createElement('div');
        this.background.classList.add("background");
        return this.background;
    }

    createImage(index) {
        let urls = {
            0: "assets/Animal(B)/bird.f0a80efa.jpg",
            1: "assets/action(B)/swim.bddf0687.jpg",
            2: "assets/action(C)/drop.8cb9f43a.jpg",
            3: "assets/Adjective/friendly.ebfd8e9a.jpg",
            4: "assets/Animal(A)/cat.e91220bb.jpg",
            5: "assets/action(A)/dance.c70cc103.jpg",
            6: "assets/Clothes/blouse.37a6d8fa.jpg",
            7: "assets/Emotion/smile.f55cb470.jpg"
        };
        this.image = document.createElement('img');
        this.image.setAttribute('src', urls[index]);
        this.image.classList.add("image-class");
        return this.image;
    }

    createTitle(index) {
        let titles = {
            0: "Action (set A)",
            1: "Action (set B)",
            2: "Action (set C)",
            3: "Adjective",
            4: "Animal (set A)",
            5: "Animal (set B)",
            6: "Clothes",
            7: "Emotion",
        };
        this.title = document.createElement('p');
        this.title.textContent = titles[index];
        this.title.classList.add("card-title");
        return this.title
    }

}

class WordCard {
    constructor(section, index) {
        if (typeof section === "undefined") throw new Error("Объект не инициализирован");
        this.createContainer();
        this.container.appendChild(this.createFront());
        this.container.appendChild(this.createBack());

        this.front.appendChild(this.createImages(section, index));
        this.back.appendChild(this.createImages(section, index));
        this.front.appendChild(this.createWord(section, index));
        this.back.appendChild(this.createTranslate(section, index));
        this.front.appendChild(this.createRotateButton());
    }

    createContainer() {
        this.container = document.createElement("div");
        this.container.classList.add("flip-card");
        return this.container;
    }

    createFront() {
        this.front = document.createElement("div");
        this.front.classList.add("front");
        return this.front;
    }

    createBack() {
        this.back = document.createElement("div");
        this.back.classList.add("back");
        this.back.classList.add("back-static");
        return this.back;
    }

    createImages(section, index) {
        this.image = document.createElement("img");
        this.image.src = section[index].photo;
        this.image.classList.add("card-img");
        return this.image;
    }

    createWord(section, index) {
        this.word = document.createElement("p");
        this.word.textContent = section[index].word;
        this.word.classList.add("word");
        return this.word;
    }

    createTranslate(section, index) {
        this.translate = document.createElement("p");
        this.translate.textContent = section[index].translate;
        this.translate.classList.add("word");
        return this.translate;
    }

    createRotateButton() {
        this.rotateButton = document.createElement("button");
        this.rotateButton.classList.add("rotate-button");
        return this.rotateButton;
    }
}

const CARDS_COUNT = 8;
const cardsContainer = document.querySelector(".cards");
let cards = {
    "Action (set A)": {
        0: {
            word: "cry",
            translate: "плакать",
            photo: "assets/action(A)/cry.26a84a2c.jpg"
        },
        1: {
            word: "dance",
            translate: "танцевать",
            photo: "assets/action(A)/dance.c70cc103.jpg"
        },
        2: {
            word: "dive",
            translate: "плавать",
            photo: "assets/action(A)/dive.41b7d509.jpg"
        },
        3: {
            word: "draw",
            translate: "рисовать",
            photo: "assets/action(A)/draw.82be9665.jpg"
        },
        4: {
            word: "fish",
            translate: "ловить рыбу",
            photo: "assets/action(A)/fish.27eb7746.jpg"
        },
        5: {
            word: "fly",
            translate: "летать",
            photo: "assets/action(A)/fly.6122fa03.jpg"
        },
        6: {
            word: "hug",
            translate: "обнимать",
            photo: "assets/action(A)/hug.9dda3c46.jpg"
        },
        7: {
            word: "jump",
            translate: "прыгать",
            photo: "assets/action(A)/jump.ac945820.jpg"
        }
    },
    "Action (set B)": {
        0: {
            word: "open",
            translate: "открывать",
            photo: "assets/action(B)/open.191b88af.jpg"
        },
        1: {
            word: "play",
            translate: "играть",
            photo: "assets/action(B)/play.75cbc10c.jpg"
        },
        2: {
            word: "point",
            translate: "указывать",
            photo: "assets/action(B)/point.ba50996a.jpg"
        },
        3: {
            word: "ride",
            translate: "ездить",
            photo: "assets/action(B)/ride.b7a77474.jpg"
        },
        4: {
            word: "run",
            translate: "бегать",
            photo: "assets/action(B)/run.0e8d157f.jpg"
        },
        5: {
            word: "sing",
            translate: "петь",
            photo: "assets/action(B)/sing.d2d52786.jpg"
        },
        6: {
            word: "skip",
            translate: "пропускать, прыгать",
            photo: "assets/action(B)/skip.081bf61e.jpg"
        },
        7: {
            word: "swim",
            translate: "плавать",
            photo: "assets/action(B)/swim.bddf0687.jpg"
        }
    },
    "Action (set C)": {
        0: {
            word: "argue",
            translate: "спорить",
            photo: "assets/action(C)/argue.06b9a73a.jpg"
        },
        1: {
            word: "build",
            translate: "строить",
            photo: "assets/action(C)/build.0ddc52ca.jpg"
        },
        2: {
            word: "carry",
            translate: "нести",
            photo: "assets/action(C)/carry.4e29617e.jpg"
        },
        3: {
            word: "catch",
            translate: "ловить",
            photo: "assets/action(C)/catch.02ee0391.jpg"
        },
        4: {
            word: "drive",
            translate: "водить машину",
            photo: "assets/action(C)/drive.7756db52.jpg"
        },
        5: {
            word: "drop",
            translate: "падать",
            photo: "assets/action(C)/drop.8cb9f43a.jpg"
        },
        6: {
            word: "pull",
            translate: "тянуть",
            photo: "assets/action(C)/pull.958b53a6.jpg"
        },
        7: {
            word: "push",
            translate: "толкать",
            photo: "assets/action(C)/push.f5183491.jpg"
        }
    },
    "Adjective": {
        0: {
            word: "big",
            translate: "большой",
            photo: "assets/Adjective/big.15366658.jpg"
        },
        1: {
            word: "small",
            translate: "маленький",
            photo: "assets/Adjective/small.a9f7a59d.jpg"
        },
        2: {
            word: "fast",
            translate: "быстрый",
            photo: "assets/Adjective/fast.2d5d071e.jpg"
        },
        3: {
            word: "slow",
            translate: "медленный",
            photo: "assets/Adjective/slow.7bbcaa16.jpg"
        },
        4: {
            word: "friendly",
            translate: "дружелюбный",
            photo: "assets/Adjective/friendly.ebfd8e9a.jpg"
        },
        5: {
            word: "unfriendly",
            translate: "недружелюбный",
            photo: "assets/Adjective/unfriendly.9bb158bd.jpg"
        },
        6: {
            word: "young",
            translate: "молодой",
            photo: "assets/Adjective/young.7498933a.jpg"
        },
        7: {
            word: "old",
            translate: "старый",
            photo: "assets/Adjective/old.76174203.jpg"
        }
    },
    "Animal (set A)": {
        0: {
            word: "cat",
            translate: "кошка",
            photo: "assets/Animal(A)/cat.e91220bb.jpg"
        },
        1: {
            word: "chick",
            translate: "цыплёнок",
            photo: "assets/Animal(A)/chick.11bf9adb.jpg"
        },
        2: {
            word: "chicken",
            translate: "курица",
            photo: "assets/Animal(A)/chicken.915430df.jpg"
        },
        3: {
            word: "dog",
            translate: "собака",
            photo: "assets/Animal(A)/dog.109811ba.jpg"
        },
        4: {
            word: "horse",
            translate: "лошадь",
            photo: "assets/Animal(A)/horse.8a825b3b.jpg"
        },
        5: {
            word: "pig",
            translate: "свинья",
            photo: "assets/Animal(A)/pig.72810927.jpg"
        },
        6: {
            word: "rabbit",
            translate: "кролик",
            photo: "assets/Animal(A)/rabbit.7242c16a.jpg"
        },
        7: {
            word: "sheep",
            translate: "овца",
            photo: "assets/Animal(A)/sheep.8d2deb43.jpg"
        }
    },
    "Animal (set B)": {
        0: {
            word: "bird",
            translate: "птица",
            photo: "assets/Animal(B)/bird.f0a80efa.jpg"
        },
        1: {
            word: "fish",
            translate: "рыба",
            photo: "assets/Animal(B)/fish1.296cfcd4.jpg"
        },
        2: {
            word: "frog",
            translate: "жаба",
            photo: "assets/Animal(B)/frog.e8a07dca.jpg"
        },
        3: {
            word: "giraffe",
            translate: "жираф",
            photo: "assets/Animal(B)/giraffe.32ab22c7.jpg"
        },
        4: {
            word: "lion",
            translate: "лев",
            photo: "assets/Animal(B)/lion.273c0650.jpg"
        },
        5: {
            word: "mouse",
            translate: "мышка",
            photo: "assets/Animal(B)/mouse.a73259d9.jpg"
        },
        6: {
            word: "turtle",
            translate: "черепаха",
            photo: "assets/Animal(B)/turtle.b1e5849e.jpg"
        },
        7: {
            word: "dolphin",
            translate: "дельфин",
            photo: "assets/Animal(B)/dolphin.905447d1.jpg"
        }
    },
    "Clothes": {
        0: {
            word: "skirt",
            translate: "юбка",
            photo: "assets/Clothes/skirt.b0ee2c91.jpgg"
        },
        1: {
            word: "pants",
            translate: "брюки",
            photo: "assets/Clothes/pants.197f1069.jpg"
        },
        2: {
            word: "blouse",
            translate: "блузка",
            photo: "assets/Clothes/blouse.37a6d8fa.jpg"
        },
        3: {
            word: "dress",
            translate: "платье",
            photo: "assets/Clothes/dress.264b02bf.jpg"
        },
        4: {
            word: "boot",
            translate: "ботинки",
            photo: "assets/Clothes/boot.1a1ae11a.jpgа"
        },
        5: {
            word: "shirt",
            translate: "рубашк",
            photo: "assets/Clothes/shirt.3bed1473.jpg"
        },
        6: {
            word: "coat",
            translate: "пальто",
            photo: "assets/Clothes/coat.8017b6ca.jpg"
        },
        7: {
            word: "shoe",
            translate: "туфли",
            photo: "assets/Clothes/shoe.5522fbfd.jpg"
        }
    },
    "Emotion": {
        0: {
            word: "sad",
            translate: "грустный",
            photo: "assets/Emotion/sad.5942f979.jpg"
        },
        1: {
            word: "angry",
            translate: "сердитый",
            photo: "assets/Emotion/angry.66b1074a.jpg"
        },
        2: {
            word: "happy",
            translate: "счастливый",
            photo: "assets/Emotion/happy.996126dd.jpg"
        },
        3: {
            word: "tired",
            translate: "уставший",
            photo: "assets/Emotion/tired.a169662a.jpg"
        },
        4: {
            word: "surprised",
            translate: "удивлённый",
            photo: "assets/Emotion/surprised.0667ed30.jpg"
        },
        5: {
            word: "scared",
            translate: "испуганный",
            photo: "assets/Emotion/scared.e2747b49.jpg"
        },
        6: {
            word: "smile",
            translate: "смех",
            photo: "assets/Emotion/smile.f55cb470.jpg"
        },
        7: {
            word: "laugh",
            translate: "laugh",
            photo: "assets/Emotion/laugh.8bbca0b9.jpg"
        }
    }
};

function removeSectionCards() {
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
}

function createSections() {
    removeSectionCards();
    for (let i = 0; i < CARDS_COUNT; i++) {
        let card = new LevelCard(i).container;
        cardsContainer.appendChild(card);
    }
}

function createWorldCards(sectionName) {
    removeSectionCards();

    let section = cards[sectionName];
    for (let i = 0; i < CARDS_COUNT; i++) {
        let card = new WordCard(section, i).container;
        cardsContainer.appendChild(card);
    }
    const reverseButton = document.querySelectorAll(".rotate-button");
    reverseButton.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();

            const front = button.parentElement;
            const back = front.nextElementSibling;
            const card = front.parentElement;

            front.classList.add("front-rotate");
            back.classList.add("back-rotate");
            back.classList.remove("back-static");

            card.addEventListener("mouseleave", () => {
                front.classList.remove("front-rotate");
                back.classList.remove("back-rotate");
                back.classList.add("back-static");
            })
        })
    });

}


window.addEventListener("DOMC" +
    "" +
    "fontentLoaded", function () {
    createSections();

    const checkBox = document.querySelector('.switch-input');
    const train = document.querySelector('.train');
    const play = document.querySelector('.play');
    let cardsBackground = document.querySelectorAll('.background');
    checkBox.addEventListener('click', () => {
        if (checkBox.checked) {
            train.style.display = '';
            play.style.display = 'none';
            cardsBackground.forEach(cards => cards.classList.remove('background-orange'));
        } else {
            train.style.display = 'none';
            play.style.display = 'block';
            cardsBackground.forEach(card => card.classList.add('background-orange'));
         }
    });

    const menuBtn = document.querySelector('.menu-btn-container');
    const menu = document.querySelector('.menu-list');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menu.classList.remove('menu-list-open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menu.classList.add('menu-list-open');
            menuOpen = false;
        }
    });
});

