document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const popupAd = document.getElementById('popupAd');
    const closeBtn = document.getElementById('closeBtn');
    const clock = document.getElementById('clock');

    let showPopupAd = true;

    if (localStorage.getItem('popupAdShown')) {
        showPopupAd = false;
    }

    setTimeout(function() {
        if (showPopupAd) {
            popupAd.classList.remove('hidden');
            localStorage.setItem('popupAdShown', true);
        }
    }, 5000);

    dropdownBtn.addEventListener('click', function() {
        if (showPopupAd) {
            popupAd.classList.remove('hidden');
            localStorage.setItem('popupAdShown', true);
        }
    });

    closeBtn.addEventListener('click', function() {
        popupAd.classList.add('hidden');
    });

    setInterval(function() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clock.textContent = hours + ':' + minutes;
    }, 60000);
});
