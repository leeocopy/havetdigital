<template>
  <section id="faq" class="py-16 md:py-24 bg-[var(--bg)]">
    <!-- Centered Container -->
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      
      <!-- Intro Area (Top) -->
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-12 lg:mb-16">
        <div class="max-w-lg">
          <h2 class="text-3xl md:text-4xl font-semibold font-sans tracking-tight mb-3">
            Vos questions, nos réponses
          </h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-4">
            Retrouvez les réponses aux questions les plus fréquentes sur nos offres, nos méthodes et notre accompagnement.
          </p>
          <a href="#contact" class="inline-flex items-center text-sm font-medium text-[var(--brand)] hover:underline transition-colors">
            Encore des questions ? Discutons-en ! 
            <span class="ml-1" aria-hidden="true">→</span>
          </a>
        </div>
        
        <!-- Illustration (Top Right) -->
        <div class="hidden sm:flex shrink-0 w-32 h-32 md:w-40 md:h-40 items-center justify-center">
          <svg class="w-full h-full text-[var(--text-muted)] opacity-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
             <!-- Placeholder SVG for illustration -->
             <path d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 12 3c4.6 0 7.41 3.23 7.41 6.88 0 2.82-2.15 4.22-3.87 6.01-.86.89-1.34 2.16-1.34 3.11H10.6c0-1.9.49-3.7 1.47-5.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
          </svg>
        </div>
      </div>

      <!-- Accordion List (Bottom) -->
      <div class="border-t border-[color:var(--border)]">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="border-b border-[color:var(--border)] group"
        >
          <button
            type="button"
            class="w-full flex items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] transition-colors"
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-panel-${i}`"
            @click="toggle(i)"
          >
            <span class="font-medium font-sans text-base md:text-lg text-[var(--text)] group-hover:text-[var(--brand)] transition-colors pr-4">
              {{ item.q }}
            </span>
            <!-- Circular Icon Button (matches screenshot) -->
            <span 
              class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#F1F3F5] text-[#111827] group-hover:bg-[#E2E8F0] transition-colors"
              aria-hidden="true"
            >
              <!-- Plus icon (closed) -->
              <svg v-if="openIndex !== i" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <!-- Cross icon (open) -->
              <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>

          <div
            :id="`faq-panel-${i}`"
            role="region"
            class="grid transition-all duration-300"
            :class="openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
            @transitionend="(e) => e.stopPropagation()"
          >
            <div class="overflow-hidden">
              <p class="pb-6 pr-14 text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
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
