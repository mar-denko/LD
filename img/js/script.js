const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelector('.lock-padding')
const MenuBody = document.querySelector('.menu__body');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        //функция нужна если есть второй попап/второе онко
        // const popupActive = querySelector('.popup.open');
        // if(popupActive){
        //     popupClose(popupActive, false);
        // }
        // else{
        bodyLock();
        // }

        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        body.classList.remove('lock');
    }

}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.warper').offsetWidth + 'px';

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.lastChild; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

const MenuIcon = document.querySelector('.menu__icon');
const MenuLink = document.querySelectorAll('.menu__link');
const MenuOverlay = document.querySelector('.menu__overlay');
if (MenuIcon) {
    const MenuBody = document.querySelector('.menu__body');
    MenuIcon.addEventListener("click", function (e) {
        MenuIcon.classList.toggle("active");
        MenuBody.classList.toggle("active");
        MenuOverlay.classList.toggle("active");
        body.classList.toggle("lock");

        for (let index = 0; index < MenuLink.length; index++) {
            const link = MenuLink[index];
            link.addEventListener("click", function (e) {
                MenuIcon.classList.remove("active");
                MenuBody.classList.remove("active");
                MenuOverlay.classList.remove("active");
                body.classList.remove("lock");

            });
        }
        //document.getElementsByClassName('html')[0].style = 'overflow: hidden';
        // document.body.style.overflow = 'hidden';
    });



}
//  else {document.body.style.overflow = 'scroll';}

//  const MenuLinks = document.querySelectorAll(".")