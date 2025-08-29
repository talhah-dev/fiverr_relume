# Tailwind Modal Form (Copy‑Paste)

Minimal, production‑ready modal form built with **Tailwind CSS**. Opens with a button, closes on **overlay click**, **X button**, or **Esc**. Uses a **class** selector (`openLeadModal`) so you can have multiple openers.

---

## 1) Full demo page — copy/paste as `index.html`

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Modal Demo</title>
    <!-- Tailwind (CDN for quick use) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome (optional; used for other icons if needed) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  </head>
  <body class="antialiased bg-white text-gray-900">

    <!-- Trigger Button(s) -->
    <div class="flex items-center justify-center py-16">
      <a href="#" class="openLeadModal md:w-auto py-3 px-8 font-medium text-center text-[#000302] rounded-xl bg-white border border-gray-200 shadow hover:opacity-70 transition-all duration-500">Jetzt teilnehmen</a>
    </div>

    <!-- Modal Root -->
    <div id="leadModal" class="fixed inset-0 z-[100] hidden" aria-hidden="true">
      <!-- Overlay (click to close) -->
      <button id="leadOverlay" class="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 transition-opacity duration-300" aria-label="Overlay – Popup schließen"></button>

      <!-- Center wrapper -->
      <div class="relative z-[101] flex min-h-screen items-center justify-center p-4">
        <!-- Panel -->
        <div id="leadPanel" role="dialog" aria-modal="true" aria-labelledby="leadTitle" class="w-full max-w-xl rounded-2xl bg-white shadow-2xl opacity-0 -translate-y-4 scale-95 transition duration-300">
          <!-- Header -->
          <div class="flex items-start justify-between gap-6 p-6 pb-2">
            <div>
              <h2 id="leadTitle" class="text-2xl font-bold">Prüfe jetzt, ob du dein iPhone 15 sichern kannst</h2>
              <p class="mt-1 text-sm text-gray-600">Trage deine Daten ein – wir melden uns innerhalb weniger Stunden bei dir.</p>
            </div>
            <button type="button" id="leadCloseBtn" class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50" aria-label="Popup schließen">
              <!-- X icon -->
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 pt-2">
            <form class="space-y-5" onsubmit="event.preventDefault(); /* TODO: handle submit */">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label for="vorname" class="mb-1 block text-sm font-medium text-gray-700">Vorname</label>
                  <input id="vorname" name="vorname" type="text" required class="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20" placeholder="Max" />
                </div>
                <div>
                  <label for="nachname" class="mb-1 block text-sm font-medium text-gray-700">Nachname</label>
                  <input id="nachname" name="nachname" type="text" required class="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20" placeholder="Mustermann" />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label for="email" class="mb-1 block text-sm font-medium text-gray-700">E‑Mail‑Adresse</label>
                  <input id="email" name="email" type="email" required class="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20" placeholder="du@beispiel.de" />
                </div>
                <div>
                  <label for="plz" class="mb-1 block text-sm font-medium text-gray-700">Postleitzahl</label>
                  <input id="plz" name="plz" type="text" inputmode="numeric" pattern="^\d{4,5}$" required class="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20" placeholder="10115" title="Bitte eine gültige PLZ mit 4 oder 5 Ziffern eingeben" />
                </div>
              </div>

              <div>
                <label for="phone" class="mb-1 block text-sm font-medium text-gray-700">Telefonnummer</label>
                <input id="phone" name="phone" type="tel" inputmode="tel" required class="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20" placeholder="+49 170 1234567" />
              </div>

              <p class="rounded-xl bg-gray-50 p-3 text-sm text-gray-600">Deine Daten sind bei uns sicher. Wir verwenden sie ausschließlich zur Abwicklung der Aktion und um dir passende Energieangebote vorzustellen.</p>

              <div class="space-y-2">
                <label class="flex items-start gap-3">
                  <input type="checkbox" required class="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600" />
                  <span class="text-sm text-gray-700">Ich stimme der <a href="#datenschutz" class="underline">Datenschutzerklärung</a> zu.</span>
                </label>
                <label class="flex items-start gap-3">
                  <input type="checkbox" class="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600" />
                  <span class="text-sm text-gray-700">Ich möchte über aktuelle Aktionen von SmartVolt informiert werden.</span>
                </label>
              </div>

              <button type="submit" class="w-full rounded-xl bg-emerald-600 py-3 text-center font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600/30">Jetzt kostenlos teilnehmen</button>
              <p class="text-center text-xs font-medium text-emerald-700">⚡ Nur noch wenige iPhones verfügbar – sichere dir jetzt dein Geschenk!</p>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal JS -->
    <script>
      const openBtns = document.getElementsByClassName('openLeadModal');
      const modal    = document.getElementById('leadModal');
      const overlay  = document.getElementById('leadOverlay');
      const panel    = document.getElementById('leadPanel');
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

      Array.from(openBtns).forEach(btn => btn.addEventListener('click', openModal));
      overlay?.addEventListener('click', closeModal);
      closeBtn?.addEventListener('click', closeModal);
    </script>
  </body>
</html>
```

---

## 2) Already have a page? Copy/paste only the parts you need

### Trigger button (can duplicate — all will open the modal)

```html
<a href="#" class="openLeadModal py-3 px-8 font-medium text-[#000302] rounded-xl bg-white border border-gray-200 shadow hover:opacity-70 transition-all duration-500">Jetzt teilnehmen</a>
```

### Modal markup

```html
<div id="leadModal" class="fixed inset-0 z-[100] hidden" aria-hidden="true">
  <button id="leadOverlay" class="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 transition-opacity duration-300" aria-label="Overlay – Popup schließen"></button>
  <div class="relative z-[101] flex min-h-screen items-center justify-center p-4">
    <div id="leadPanel" role="dialog" aria-modal="true" aria-labelledby="leadTitle" class="w-full max-w-xl rounded-2xl bg-white shadow-2xl opacity-0 -translate-y-4 scale-95 transition duration-300">
      <!-- header/body/form … same as above -->
    </div>
  </div>
</div>
```

### Modal JS (class‑based openers)

```html
<script>
  const openBtns = document.getElementsByClassName('openLeadModal');
  const modal    = document.getElementById('leadModal');
  const overlay  = document.getElementById('leadOverlay');
  const panel    = document.getElementById('leadPanel');
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

  Array.from(openBtns).forEach(btn => btn.addEventListener('click', openModal));
  overlay?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
</script>
```

---

## 3) Notes

* **Validation:** PLZ field uses `pattern="^\d{4,5}$"` and `inputmode="numeric"` for better mobile UX.
* **Accessibility:** Focus moves into the modal on open; Esc closes it; overlay is a button with a label.
* **Multiple openers:** Any element with class `openLeadModal` opens the same modal.
* **Styling:** Tailwind CDN is used for speed; for production, consider compiling Tailwind.
