const smallGlasses = document.querySelectorAll('.glass-small');
const litersEl = document.getElementById('liters');
const remainedEl = document.getElementById('remained');
const filledEl = document.getElementById('filled');
const filledTextEl = document.querySelector('.filled-text');

const totalGlasses = smallGlasses.length;
const glassVolume = 250; // ml
const totalVolume = totalGlasses * glassVolume; // 2000ml = 2L

updateBigGlass();

smallGlasses.forEach((glass, idx) => {
    glass.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    // This function handles filling/emptying the small water glasses when clicked
    
    // First check if we should empty the clicked glass:
    // - If the clicked glass is already full AND
    // - Either it's the last glass OR the next glass is empty
    // Then we'll empty this glass by decreasing the index
    if (smallGlasses[idx].classList.contains('full') && 
        (idx === totalGlasses - 1 || !smallGlasses[idx + 1].classList.contains('full'))) {
        idx--;
    }

    // Loop through all glasses and update their state:
    // - Any glass up to and including the clicked index gets filled
    // - Any glass after the clicked index gets emptied
    smallGlasses.forEach((glass, idx2) => {
        if (idx2 <= idx) {
            glass.classList.add('full');    // Fill glass by adding 'full' class
        } else {
            glass.classList.remove('full'); // Empty glass by removing 'full' class
        }
    });

    // After updating the small glasses, update the big glass display
    updateBigGlass();
}

function updateBigGlass() {
    const fullGlasses = document.querySelectorAll('.glass-small.full').length;
    const filledPercentage = (fullGlasses / totalGlasses) * 100;
    const remainingPercentage = 100 - filledPercentage;
    const filledVolume = fullGlasses * glassVolume;
    const remainingVolume = totalVolume - filledVolume;

    // Update the filled portion
    filledEl.style.height = `${filledPercentage}%`;
    
    // Update the remaining portion
    remainedEl.style.height = `${remainingPercentage}%`;

    // Update the remaining text
    litersEl.textContent = `${remainingVolume/1000}Liter(s) Remaining`;
    
    // Update the filled text
    if (filledPercentage > 0) {
        filledTextEl.textContent = `${(filledVolume/1000).toFixed(1)}Liter(s) Filled`;
    } else {
        filledTextEl.textContent = '';
    }

    // Hide the remained text when full
    if (filledPercentage === 100) {
        remainedEl.style.visibility = 'hidden';
    } else {
        remainedEl.style.visibility = 'visible';
    }
}
