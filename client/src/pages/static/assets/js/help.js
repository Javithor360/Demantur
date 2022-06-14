export const accordion = document.getElementsByClassName('contentBx');
let i;
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}