<template>
  <section id="contact" class="py-16 md:py-24">
    <div class="max-w-2xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-10">
        <span class="pill inline-flex mb-4">✉️ Contact</span>
        <h2 class="text-3xl md:text-4xl font-semibold font-sans tracking-tight mb-4">
          Contactez-nous
        </h2>
        <p class="text-[var(--text-muted)] leading-relaxed">
          Une question ? Un projet ? Écrivez-nous ou réservez directement votre audit gratuit.
        </p>
      </div>

      <form
        class="bento-card p-8 space-y-5"
        @submit.prevent="submit"
        novalidate
      >
        <!-- Name -->
        <div>
          <label for="contact-name" class="block text-sm font-medium mb-1.5 text-[var(--text)]">
            Nom complet
          </label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            required
            autocomplete="name"
            class="bento-input"
            placeholder="Jean Dupont"
            :aria-describedby="errors.name ? 'name-error' : undefined"
          />
          <p v-if="errors.name" id="name-error" class="text-xs text-red-500 mt-1">
            {{ errors.name }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <label for="contact-email" class="block text-sm font-medium mb-1.5 text-[var(--text)]">
            Email
          </label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            class="bento-input"
            placeholder="jean@exemple.fr"
            :aria-describedby="errors.email ? 'email-error' : undefined"
          />
          <p v-if="errors.email" id="email-error" class="text-xs text-red-500 mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Phone -->
        <div>
          <label for="contact-phone" class="block text-sm font-medium mb-1.5 text-[var(--text)]">
            Téléphone <span class="text-[var(--text-muted)]">(optionnel)</span>
          </label>
          <input
            id="contact-phone"
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            class="bento-input"
            placeholder="06 12 34 56 78"
          />
        </div>

        <!-- Message -->
        <div>
          <label for="contact-message" class="block text-sm font-medium mb-1.5 text-[var(--text)]">
            Message
          </label>
          <textarea
            id="contact-message"
            v-model="form.message"
            required
            rows="4"
            class="bento-textarea"
            placeholder="Décrivez votre projet ou posez vos questions…"
            :aria-describedby="errors.message ? 'message-error' : undefined"
          ></textarea>
          <p v-if="errors.message" id="message-error" class="text-xs text-red-500 mt-1">
            {{ errors.message }}
          </p>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="btn-primary w-full"
          :disabled="submitted"
        >
          <template v-if="submitted">
            ✅ Message envoyé !
          </template>
          <template v-else>
            Envoyer le message
          </template>
        </button>

        <p class="text-center text-xs text-[var(--text-muted)]">
          Ou écrivez-nous directement à
          <a href="mailto:contact@havetdigital.fr" class="text-[var(--brand)] font-medium underline hover:no-underline">
            contact@havetdigital.fr
          </a>
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const errors = reactive<Record<string, string>>({
  name: '',
  email: '',
  message: '',
});

const submitted = ref(false);

function validate(): boolean {
  let valid = true;
  errors.name = '';
  errors.email = '';
  errors.message = '';

  if (!form.name.trim()) {
    errors.name = 'Veuillez saisir votre nom.';
    valid = false;
  }
  if (!form.email.trim()) {
    errors.email = 'Veuillez saisir votre email.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Veuillez saisir un email valide.';
    valid = false;
  }
  if (!form.message.trim()) {
    errors.message = 'Veuillez saisir un message.';
    valid = false;
  }

  return valid;
}

function submit() {
  if (!validate()) return;

  // In production, replace with actual API call
  // For now, simulate success
  submitted.value = true;
  setTimeout(() => {
    submitted.value = false;
    form.name = '';
    form.email = '';
    form.phone = '';
    form.message = '';
  }, 3000);
}
</script>
