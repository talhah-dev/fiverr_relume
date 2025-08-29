const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
    class="bottomToTop fadeIn w-12 cursor-pointer z-40 bg-[#033F2D] h-12 fixed bottom-5 right-5 hover:opacity-80 transition-all duration-500 hidden text-zinc-100 flex items-center justify-center rounded-full "><i class="fa-solid fa-angle-up"></i>
</div>`

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".bottomToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

AOS.init({
    once: true,
    duration: 1000
});

// loader

let loaderStartTime = 0;

function showLoader() {
    const loader = document.getElementById('global-loader');
    loader.classList.remove('hidden');
    requestAnimationFrame(() => loader.classList.add('opacity-100'));
    loaderStartTime = Date.now();
}

function hideLoader() {
    const loader = document.getElementById('global-loader');
    const elapsed = Date.now() - loaderStartTime;
    const remainingTime = 500 - elapsed; // ensure at least 0.5s

    setTimeout(() => {
        loader.classList.remove('opacity-100');
        setTimeout(() => loader.classList.add('hidden'), 300); // wait for fade-out
    }, Math.max(0, remainingTime));
}

// Example usage:
showLoader();
// simulate some async task (like fetch or form submission)
setTimeout(() => {
    hideLoader();
}, 200); // even if task is fast, loader will stay at least 0.5s

const openBtns = document.getElementsByClassName('openLeadModal');
const modal = document.getElementById('leadModal');
const overlay = document.getElementById('leadOverlay');
const panel = document.getElementById('leadPanel');
const closeBtn = document.getElementById('leadCloseBtn');

function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => {
        overlay.classList.remove('opacity-0');
        panel.classList.remove('opacity-0', '-translate-y-4', 'scale-95');
        setTimeout(() => { panel.querySelector('input')?.focus(); }, 150);
    });
    document.addEventListener('keydown', onEsc);
}

function closeModal() {
    overlay.classList.add('opacity-0');
    panel.classList.add('opacity-0', '-translate-y-4', 'scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
    }, 250);
    document.removeEventListener('keydown', onEsc);
}

function onEsc(e) { if (e.key === 'Escape') closeModal(); }

// Loop through all buttons with the class
Array.from(openBtns).forEach(btn => {
    btn.addEventListener('click', openModal);
});

overlay?.addEventListener('click', closeModal);
closeBtn?.addEventListener('click', closeModal);

const form = document.getElementById('contact-form');
const successPopup = document.getElementById('success-popup');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form reload

    const formData = new FormData(form);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            // Show success popup
            successPopup.classList.remove('hidden');

            // Auto-hide after 3 seconds
            setTimeout(() => {
                successPopup.classList.add('hidden');
            }, 3000);

            // Reset form
            form.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error(error);
        alert('Error while submitting the form. Please check your connection.');
    }
});
