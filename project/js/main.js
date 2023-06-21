const rating = document.querySelectorAll('.rate');
const printRating = document.getElementById('after-rate');
const beforeRate = document.getElementById('before-rate');
const btn = document.querySelector('.submit-rate');
const selectedRatingText = document.getElementById('selectedRating');
const relatedBtn = document.querySelector('.related-btn');

btn.disabled = true;
btn.classList.add('notSelectedBtn');

rating.forEach(element => {
    element.addEventListener('click', () => {
        btn.disabled = false;
        btn.classList.remove('notSelectedBtn');
        selectedRatingText.textContent =  element.innerHTML;
    });
});

btn.addEventListener('click' ,() => {
    printRating.classList.add('disFlex');
    beforeRate.classList.add('disNone');
});

relatedBtn.addEventListener('click' ,() => {
    printRating.classList.remove('disFlex');
    beforeRate.classList.remove('disNone');
    btn.disabled = true;
    btn.classList.add('notSelectedBtn');
});
