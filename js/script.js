window.onload = preloadPage();
function preloadPage() {
    const body = document.querySelector('.wrapper');
    const wrapperForPreloadPage = document.createElement('div');
    wrapperForPreloadPage.classList.add('wrapperForPreloadPage');
    body.append(wrapperForPreloadPage)
    const NAME_PROJECT = document.createElement('h1');
    NAME_PROJECT.innerHTML = "Gem-Puzzle";
    wrapperForPreloadPage.append(NAME_PROJECT);
    const CHOOSE_TEXT = document.createElement('h2');
    CHOOSE_TEXT.innerHTML = 'Choose size';
    wrapperForPreloadPage.append(CHOOSE_TEXT);
    const CHOOSE_BUTTON = document.createElement('div');
    wrapperForPreloadPage.append(CHOOSE_BUTTON);
    CHOOSE_BUTTON.classList.add('CHOOSE_BUTTON')
    const size_4x4 = document.createElement('button');
    size_4x4.innerHTML = '4x4';
    size_4x4.classList.add('size')
    CHOOSE_BUTTON.append(size_4x4);
    const size_5x5 = document.createElement('button');
    size_5x5.innerHTML = '5x5';
    size_5x5.classList.add('size')
    CHOOSE_BUTTON.append(size_5x5);
    const size_6x6 = document.createElement('button');
    size_6x6.innerHTML = '6x6';
    size_6x6.classList.add('size')
    CHOOSE_BUTTON.append(size_6x6);
    const size_7x7 = document.createElement('button');
    size_7x7.innerHTML = '7x7';
    size_7x7.classList.add('size')
    CHOOSE_BUTTON.append(size_7x7);
    const size_8x8 = document.createElement('button');
    size_8x8.innerHTML = '8x8';
    size_8x8.classList.add('size')
    CHOOSE_BUTTON.append(size_8x8);
    const BLOCK_START = document.createElement('div');
    BLOCK_START.classList.add('block_start');
    wrapperForPreloadPage.append(BLOCK_START);
    const Button_Start = document.createElement('button');
    Button_Start.innerHTML = "START";
    Button_Start.classList.add('Button_Start');
    BLOCK_START.append(Button_Start);
}
const button = document.querySelectorAll('.size');
console.log(button)
button.forEach(el => el.addEventListener('click', () => {
    console.log(el)
    if (el) {
        el.classList.add('active')
    } else {
        el.classList.remove('active')
    }

}))