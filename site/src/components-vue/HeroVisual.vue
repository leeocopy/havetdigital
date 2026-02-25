<template>
  <div class="hero-visual-wrapper" ref="wrapper" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    
    <!-- Background subtle "+" grid -->
    <div class="micro-grid"></div>

    <!-- Parallax Container -->
    <div class="parallax-container" :style="parallaxStyle">
      
      <!-- Connectors SVG (Static relative to main rotation, so lines don't break) -->
      <svg class="connectors-svg" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Lines connecting to badges -->
        <!-- Top Left -->
        <path d="M300 300 Q200 200 130 180" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 6" class="moving-dash" stroke-linecap="round"/>
        <!-- Top -->
        <path d="M300 300 Q300 150 280 100" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 6" class="moving-dash" stroke-linecap="round"/>
        <!-- Top Right -->
        <path d="M300 300 Q400 200 450 140" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 6" class="moving-dash" stroke-linecap="round"/>
        <!-- Right -->
        <path d="M300 300 Q450 300 480 260" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 6" class="moving-dash" stroke-linecap="round"/>
        <!-- Bottom Right -->
        <path d="M300 300 Q400 450 420 500" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 6" class="moving-dash" stroke-linecap="round"/>
        <!-- Bottom -->
        <path d="M300 300 Q280 400 320 480" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 6" class="moving-dash" stroke-linecap="round"/>
        <!-- Bottom Left -->
        <path d="M300 300 Q150 400 140 450" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 6" class="moving-dash" stroke-linecap="round"/>
        <!-- Left -->
        <path d="M300 300 Q150 300 100 350" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 6" class="moving-dash" stroke-linecap="round"/>
        
        <defs>
          <linearGradient id="lineGrad" x1="100" y1="100" x2="500" y2="500" gradientUnits="userSpaceOnUse">
            <stop stop-color="rgba(92, 72, 177, 0.4)"/>
            <stop offset="1" stop-color="rgba(82, 175, 218, 0.4)"/>
          </linearGradient>
        </defs>
      </svg>

      <!-- Oscillating Stacked Layers -->
      <div class="oscillating-stack">
        <div class="paper-layer layer-1"></div>
        <div class="paper-layer layer-2"></div>
        <div class="paper-layer layer-3"></div>
        <div class="paper-layer layer-4">
          <!-- Central Target Graphic -->
          <div class="target-center">
            <div class="target-ring ring-lg"></div>
            <div class="target-ring ring-md"></div>
            <div class="target-ring ring-sm"></div>
            <div class="target-ring ring-core pulsing-core"></div>
            <div class="crosshair-h"></div>
            <div class="crosshair-v"></div>
            <div class="center-dot pulsing-dot"></div>
          </div>
        </div>
      </div>

      <!-- Floating Badges -->
      <div class="badges-layer">
        <div class="float-badge" style="left: 15%; top: 28%; animation-delay: 0.1s;">
          <span class="badge-dot" style="background: var(--brand)"></span> Livré en 7 jours
        </div>
        <div class="float-badge" style="left: 40%; top: 12%; animation-delay: 0.7s;">
          <span class="badge-dot" style="background: var(--brand-2)"></span> Sur-mesure
        </div>
        <div class="float-badge" style="left: 72%; top: 20%; animation-delay: 1.2s;">
          <span class="badge-dot" style="background: var(--brand-3)"></span> SEO local
        </div>
        <div class="float-badge" style="left: 78%; top: 40%; animation-delay: 0.4s;">
          <span class="badge-dot" style="background: var(--brand)"></span> Performant
        </div>
        <div class="float-badge" style="left: 68%; top: 82%; animation-delay: 1.5s;">
          <span class="badge-dot" style="background: var(--brand-2)"></span> 100% Mobile
        </div>
        <div class="float-badge" style="left: 50%; top: 78%; animation-delay: 0.9s;">
          <span class="badge-dot" style="background: var(--brand-3)"></span> Évolutif
        </div>
        <div class="float-badge" style="left: 18%; top: 73%; animation-delay: 0.2s;">
          <span class="badge-dot" style="background: var(--brand)"></span> Conversion
        </div>
        <div class="float-badge" style="left: 7%; top: 56%; animation-delay: 1.8s;">
          <span class="badge-dot" style="background: var(--brand-2)"></span> Sans jargon
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const wrapper = ref<HTMLElement | null>(null);
const mouseX = ref(0);
const mouseY = ref(0);
const isHovering = ref(false);
const prefersReducedMotion = ref(false);

let reqFrame: number;
let currentX = 0;
let currentY = 0;

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion.value) {
    animateParallax();
  }
});

onUnmounted(() => {
  cancelAnimationFrame(reqFrame);
});

function onMouseMove(e: MouseEvent) {
  if (!wrapper.value || prefersReducedMotion.value) return;
  isHovering.value = true;
  const rect = wrapper.value.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  
  // Normalize mouse position between -1 and 1
  mouseX.value = (e.clientX - cx) / (rect.width / 2);
  mouseY.value = (e.clientY - cy) / (rect.height / 2);
}

function onMouseLeave() {
  isHovering.value = false;
  mouseX.value = 0;
  mouseY.value = 0;
}

function animateParallax() {
  // Smooth lerp for parallax
  currentX += (mouseX.value - currentX) * 0.05;
  currentY += (mouseY.value - currentY) * 0.05;
  reqFrame = requestAnimationFrame(animateParallax);
}

const parallaxStyle = computed(() => {
  if (prefersReducedMotion.value) return {};
  // Max tilt: ~6 degrees
  const rotateX = -currentY * 6;
  const rotateY = currentX * 6;
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  };
});
</script>

<style scoped>
/* ── Wrapper ── */
.hero-visual-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Protect layout */
  overflow: visible;
}

/* ── Micro + Grid Background ── */
.micro-grid {
  position: absolute;
  inset: -10%; /* extend slightly beyond wrapper */
  background-image: radial-gradient(circle, rgba(92, 72, 177, 0.15) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.6;
  pointer-events: none;
  z-index: 0;
}

/* ── Parallax Container ── */
.parallax-container {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

/* ── Connectors SVG ── */
.connectors-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.moving-dash {
  animation: moveDash 30s linear infinite;
}

@keyframes moveDash {
  from { stroke-dashoffset: 400; }
  to { stroke-dashoffset: 0; }
}

/* ── Oscillating Stacked Layers ── */
.oscillating-stack {
  position: relative;
  width: 60%;
  height: 60%;
  max-width: 340px;
  max-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  z-index: 2;
  animation: stackOscillate 14s ease-in-out infinite alternate;
}

@keyframes stackOscillate {
  0% { transform: rotate(-12deg) scale(1); }
  100% { transform: rotate(12deg) scale(1.04); }
}

/* Paper Layer Panels */
.paper-layer {
  position: absolute;
  border: 1px solid rgba(92, 72, 177, 0.08); /* Kept as requested in screenshot */
  /* Added width and height fallback to 100% to ensure rings do not collapse without parent size, 
     but strictly removing them from standard properties class as asked by the visual override */
}

.layer-1 {
  transform: translateZ(-60px) rotate(15deg) scale(0.85);
  box-shadow: 0 10px 40px rgba(92, 72, 177, 0.04);
}
.layer-2 {
  transform: translateZ(-40px) rotate(5deg) scale(0.9);
  box-shadow: 0 10px 30px rgba(92, 72, 177, 0.06);
}
.layer-3 {
  transform: translateZ(-20px) rotate(-8deg) scale(0.95);
  box-shadow: 0 10px 20px rgba(92, 72, 177, 0.08);
}
.layer-4 {
  transform: translateZ(0px) rotate(0deg) scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  /* Ensure target-center can still size itself correctly since we removed 100% width/height */
  inset: 0; 
}

/* ── Central Target Graphic ── */
.target-center {
  position: relative;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.target-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid;
}

.ring-lg { width: 100%; height: 100%; border-color: rgba(92, 72, 177, 0.1); }
.ring-md { width: 70%; height: 70%; border-color: rgba(92, 72, 177, 0.2); }
.ring-sm { width: 40%; height: 40%; border-color: rgba(92, 72, 177, 0.3); }
.ring-core {
  width: 20%; height: 20%; 
  border-color: rgba(92, 72, 177, 0.5); 
  background: rgba(92, 72, 177, 0.06);
}

.crosshair-h, .crosshair-v {
  position: absolute;
  background: rgba(82, 175, 218, 0.25);
}
.crosshair-h { width: 100%; height: 1px; }
.crosshair-v { width: 1px; height: 100%; }

.center-dot {
  position: absolute;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--brand);
}

/* Pulses */
.pulsing-core {
  animation: pulseCore 4s ease-in-out infinite alternate;
}
.pulsing-dot {
  animation: pulseDot 4s ease-in-out infinite alternate;
  box-shadow: 0 0 12px rgba(92, 72, 177, 0.6);
}

@keyframes pulseCore {
  0% { transform: scale(0.95); opacity: 0.8; }
  100% { transform: scale(1.05); opacity: 1; }
}

@keyframes pulseDot {
  0% { transform: scale(0.8); box-shadow: 0 0 8px rgba(92, 72, 177, 0.5); }
  100% { transform: scale(1.2); box-shadow: 0 0 16px rgba(92, 72, 177, 0.8); }
}


/* ── Floating Badges ── */
.badges-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
}

.float-badge {
  position: absolute;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: white;
  border: 1px solid rgba(92, 72, 177, 0.12);
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  box-shadow: 0 4px 12px rgba(92, 72, 177, 0.06);
  white-space: nowrap;
  animation: floatBadge 6s ease-in-out infinite alternate;
  pointer-events: auto; /* allow hover */
  transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
}

.float-badge:hover {
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 8px 24px rgba(92, 72, 177, 0.12);
  color: var(--brand);
  z-index: 10;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

@keyframes floatBadge {
  0% { transform: translate(-50%, -50%) translateY(-8px); }
  100% { transform: translate(-50%, -50%) translateY(8px); }
}

/* ── Reduced Motion ── */
@media (prefers-reduced-motion: reduce) {
  .oscillating-stack, .moving-dash, .float-badge, .pulsing-core, .pulsing-dot {
    animation: none !important;
  }
}
</style>
