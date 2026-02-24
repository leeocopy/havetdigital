<template>
  <section id="offres" class="py-16 md:py-24 pricing-bg">
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Toggle -->
      <div class="text-center mb-14">
        <span class="pill inline-flex mb-4">💰 Tarifs transparents</span>
        <h2 class="text-3xl md:text-4xl font-semibold font-sans tracking-tight mb-6">
          {{ activeTab === 'unique' ? oneTime.sectionTitle : sub.sectionTitle }}
        </h2>
        <p class="text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mb-8">
          {{ activeTab === 'unique' ? oneTime.sectionSubtitle : sub.sectionSubtitle }}
        </p>

        <!-- Segmented control -->
        <div
          class="inline-flex bg-[var(--surface-2)] rounded-[var(--r-lg)] p-1 border border-[color:var(--border)]"
          role="tablist"
           aria-label="Type de tarification"
        >
          <button
            type="button"
            role="tab"
            :aria-selected="activeTab === 'unique'"
            class="relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300"
            :class="activeTab === 'unique'
              ? 'bg-white text-[var(--brand)] shadow-[var(--shadow-sm)]'
              : 'text-[var(--text-muted)] hover:text-[var(--text)]'"
            @click="activeTab = 'unique'"
          >
            Paiement unique
          </button>
          <button
            type="button"
            role="tab"
            :aria-selected="activeTab === 'abo'"
            class="relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300"
            :class="activeTab === 'abo'
              ? 'bg-white text-[var(--brand)] shadow-[var(--shadow-sm)]'
              : 'text-[var(--text-muted)] hover:text-[var(--text)]'"
            @click="activeTab = 'abo'"
          >
            Abonnement
          </button>
        </div>
      </div>

      <!-- Cards grid -->
      <Transition name="fade" mode="out-in">
        <div :key="activeTab" class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(plan, i) in activePlans"
            :key="plan.name"
            :class="[
              plan.highlight ? 'bento-card ring-1 ring-[var(--brand)] shadow-[var(--shadow-md)]' : 'bento-card',
              'p-8 flex flex-col transition-all duration-300',
            ]"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <!-- Badge -->
            <div v-if="plan.badge" class="mb-4">
              <span class="pill text-xs">⭐ {{ plan.badge }}</span>
            </div>

            <!-- Name -->
            <h3 class="text-xl font-bold font-sans mb-2">{{ plan.name }}</h3>

            <!-- Price -->
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-4xl font-extrabold font-sans text-[var(--brand)]">
                {{ plan.price }}
              </span>
              <span class="text-sm text-[var(--text-muted)]">{{ plan.unit }}</span>
            </div>

            <!-- Features -->
            <ul class="space-y-3 flex-1 mb-8">
              <li
                v-for="feat in plan.features"
                :key="feat"
                class="flex items-start gap-2.5 text-sm"
              >
                <svg
                  class="w-4.5 h-4.5 mt-0.5 shrink-0"
                  :class="plan.highlight ? 'text-[var(--brand)]' : 'text-green-500'"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-[var(--text-muted)]">{{ feat }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <a
              href="#audit"
              :class="plan.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'"
            >
              Choisir {{ plan.name }}
            </a>
          </div>
        </div>
      </Transition>

      <!-- Note -->
      <p
        v-if="activeTab === 'unique'"
        class="text-center text-sm text-[var(--text-muted)] mt-8 italic max-w-xl mx-auto"
      >
        {{ oneTime.note }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { pricingOneTime, pricingSub } from '../data/landing.fr';

const oneTime = pricingOneTime;
const sub = pricingSub;

const activeTab = ref<'unique' | 'abo'>('unique');

const activePlans = computed(() =>
  activeTab.value === 'unique' ? oneTime.plans : sub.plans
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
