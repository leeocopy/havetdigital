<template>
  <section id="contact" class="contact-section py-16 md:py-24 relative overflow-hidden">

    <!-- Brand gradient glow background -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none z-0" style="overflow:hidden">
      <!-- main central glow -->
      <div style="
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        width: 900px; height: 600px;
        border-radius: 9999px;
        background: var(--grad-brand);
        opacity: 0.14;
        filter: blur(90px);
      "></div>
      <!-- left accent -->
      <div style="
        position: absolute;
        left: -100px; top: 20%;
        width: 400px; height: 400px;
        border-radius: 9999px;
        background: var(--brand);
        opacity: 0.09;
        filter: blur(80px);
      "></div>
      <!-- right accent -->
      <div style="
        position: absolute;
        right: -100px; bottom: 10%;
        width: 400px; height: 400px;
        border-radius: 9999px;
        background: var(--brand-2);
        opacity: 0.09;
        filter: blur(80px);
      "></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="mb-10 md:mb-12">
        <span class="pill inline-flex mb-4">✉️ Contact</span>
        <h2 class="text-3xl md:text-4xl font-semibold font-sans tracking-tight">
          Contactez-nous
        </h2>
        <p class="text-[var(--text-muted)] mt-2 leading-relaxed max-w-xl">
          Une question, un projet ou simplement envie d'échanger ? On vous répond rapidement.
        </p>
      </div>

      <!-- 2-column grid (desktop: cards left, form right) -->
      <div class="contact-grid">

        <!-- LEFT: 3 Info Cards -->
        <div class="cards-col">

          <!-- Card 1: Sales -->
          <div class="info-card">
            <div class="card-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <defs>
                  <linearGradient id="iconGrad1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5C48B1"/>
                    <stop offset="1" stop-color="#52AFDA"/>
                  </linearGradient>
                </defs>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold font-sans text-[var(--text)] mb-1">Commercial</h3>
              <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                Parlez à notre équipe de vos besoins et de votre projet.
              </p>
              <a href="https://www.havetdigital.fr" target="_blank" rel="noopener noreferrer" class="info-pill-btn">
                Parler à la vente
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Card 2: Help & Support -->
          <div class="info-card">
            <div class="card-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <defs>
                  <linearGradient id="iconGrad2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5C48B1"/>
                    <stop offset="1" stop-color="#52AFDA"/>
                  </linearGradient>
                </defs>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold font-sans text-[var(--text)] mb-1">Aide & support</h3>
              <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                Contactez notre support pour toute question ou assistance.
              </p>
              <a href="mailto:contact@havetdigital.fr" class="info-pill-btn">
                Contacter le support
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Card 3: Give Us a Call -->
          <div class="info-card">
            <div class="card-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <defs>
                  <linearGradient id="iconGrad3" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5C48B1"/>
                    <stop offset="1" stop-color="#52AFDA"/>
                  </linearGradient>
                </defs>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold font-sans text-[var(--text)] mb-1">Appelez-nous</h3>
              <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                Échangez directement avec notre équipe par téléphone.
              </p>
              <a href="https://www.havetdigital.fr" target="_blank" rel="noopener noreferrer" class="info-pill-btn">
                Prendre rendez-vous
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <!-- RIGHT: Form Card -->
        <div class="form-col">
          <div class="form-card">
            <h3 class="text-xl font-semibold font-sans text-center mb-7 text-[var(--text)]">
              Envoyez-nous un message
            </h3>

            <form @submit.prevent="submit" novalidate class="space-y-5">

              <!-- Row 1: First Name + Last Name -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="contact-firstname" class="form-label">Prénom</label>
                  <input
                    id="contact-firstname"
                    v-model="form.firstname"
                    type="text"
                    required
                    autocomplete="given-name"
                    class="form-input"
                    placeholder="Jean"
                    :aria-describedby="errors.firstname ? 'firstname-error' : undefined"
                  />
                  <p v-if="errors.firstname" id="firstname-error" class="form-error">{{ errors.firstname }}</p>
                </div>
                <div>
                  <label for="contact-lastname" class="form-label">Nom</label>
                  <input
                    id="contact-lastname"
                    v-model="form.lastname"
                    type="text"
                    required
                    autocomplete="family-name"
                    class="form-input"
                    placeholder="Dupont"
                    :aria-describedby="errors.lastname ? 'lastname-error' : undefined"
                  />
                  <p v-if="errors.lastname" id="lastname-error" class="form-error">{{ errors.lastname }}</p>
                </div>
              </div>

              <!-- Row 2: Email + Phone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="contact-email" class="form-label">Email</label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    required
                    autocomplete="email"
                    class="form-input"
                    placeholder="jean@exemple.fr"
                    :aria-describedby="errors.email ? 'email-error' : undefined"
                  />
                  <p v-if="errors.email" id="email-error" class="form-error">{{ errors.email }}</p>
                </div>
                <div>
                  <label for="contact-phone" class="form-label">
                    Téléphone <span class="text-[var(--text-muted)] font-normal">(optionnel)</span>
                  </label>
                  <input
                    id="contact-phone"
                    v-model="form.phone"
                    type="tel"
                    autocomplete="tel"
                    class="form-input"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <!-- Message textarea -->
              <div>
                <label for="contact-message" class="form-label">Message</label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="form-input resize-none"
                  style="height: auto; padding-top: 0.75rem; padding-bottom: 0.75rem;"
                  placeholder="Décrivez votre projet ou posez vos questions…"
                  :aria-describedby="errors.message ? 'message-error' : undefined"
                ></textarea>
                <p v-if="errors.message" id="message-error" class="form-error">{{ errors.message }}</p>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="btn-primary w-full mt-2 justify-center"
                :disabled="submitted"
              >
                <template v-if="submitted">
                  ✅ Message envoyé !
                </template>
                <template v-else>
                  Envoyer le message
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </template>
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  message: '',
});

const errors = reactive<Record<string, string>>({
  firstname: '',
  lastname: '',
  email: '',
  message: '',
});

const submitted = ref(false);

function validate(): boolean {
  let valid = true;
  errors.firstname = '';
  errors.lastname = '';
  errors.email = '';
  errors.message = '';

  if (!form.firstname.trim()) { errors.firstname = 'Veuillez saisir votre prénom.'; valid = false; }
  if (!form.lastname.trim())  { errors.lastname  = 'Veuillez saisir votre nom.';   valid = false; }
  if (!form.email.trim()) {
    errors.email = 'Veuillez saisir votre email.'; valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Veuillez saisir un email valide.'; valid = false;
  }
  if (!form.message.trim()) { errors.message = 'Veuillez saisir un message.'; valid = false; }

  return valid;
}

function submit() {
  if (!validate()) return;
  submitted.value = true;
  setTimeout(() => {
    submitted.value = false;
    form.firstname = '';
    form.lastname  = '';
    form.email     = '';
    form.phone     = '';
    form.message   = '';
  }, 3000);
}
</script>

<style scoped>
/* ── 2-col layout grid ── */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: 360px 1fr;
    gap: 2.5rem;
  }
}

.cards-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* form-col = glow wrapper */
.form-col {
  border-radius: 26px;
  box-shadow:
    0 0 0 1px rgba(92, 72, 177, 0.12),
    0 0 40px rgba(92, 72, 177, 0.10),
    0 0 80px rgba(82, 175, 218, 0.07);
}


.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.info-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.card-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(92, 72, 177, 0.07);
  flex-shrink: 0;
}

/* Outline pill button inside each card */
.info-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8125rem;
  font-weight: 500;
  font-family: var(--font-sans);
  color: var(--brand-3);
  border: 1px solid var(--brand-3);
  border-radius: 9999px;
  padding: 0.3rem 0.875rem;
  background: transparent;
  text-decoration: none;
  transition: background 0.18s ease;
  cursor: pointer;
}
.info-pill-btn:hover {
  background: rgba(72, 116, 203, 0.08);
}

/* ── Form card (right column) ── */

.form-card {
  background: white;
  border-radius: 24px;
  padding: 2rem 2.25rem;
}

/* Form inputs */
.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.375rem;
}

.form-input {
  width: 100%;
  height: 46px;
  padding: 0 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: white;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--text);
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
  outline: none;
}

.form-input::placeholder {
  color: var(--text-muted);
  opacity: 0.65;
}

.form-input:focus {
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-soft);
}

textarea.form-input {
  height: auto;
}

.form-error {
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.25rem;
}

/* Responsive: on mobile collapse */
@media (max-width: 640px) {
  .form-card {
    padding: 1.5rem 1.25rem;
  }
}
</style>
