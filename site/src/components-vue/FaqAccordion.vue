<template>
  <section id="faq" class="py-16 md:py-24">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-14">
        <span class="pill inline-flex mb-4">❓ FAQ</span>
        <h2 class="text-3xl md:text-4xl font-semibold font-sans tracking-tight">
          Questions fréquentes
        </h2>
      </div>

      <div class="space-y-3">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="bento-card overflow-hidden transition-all duration-300"
        >
          <button
            type="button"
            class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-panel-${i}`"
            @click="toggle(i)"
          >
            <span class="font-medium font-sans text-[var(--text)] pr-4">
              {{ item.q }}
            </span>
            <svg
              class="w-5 h-5 text-[var(--text-muted)] shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === i }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            :id="`faq-panel-${i}`"
            role="region"
            class="grid transition-all duration-300"
            :class="openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-5 text-sm text-[var(--text-muted)] leading-relaxed">
                {{ item.a }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { faq } from '../data/landing.fr';

const items = faq;
const openIndex = ref<number | null>(null);

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i;
}
</script>
