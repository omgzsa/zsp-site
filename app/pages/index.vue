<script setup lang="ts">
const images = [
    { src: '/img/best-of/1.jpg', alt: 'Image 1' },
    { src: '/img/best-of/2.jpg', alt: 'Image 2' },
    { src: '/img/best-of/3.jpg', alt: 'Image 3' },
    { src: '/img/best-of/4.jpg', alt: 'Image 4' },
    { src: '/img/best-of/5.jpg', alt: 'Image 5' },
    { src: '/img/best-of/6.jpg', alt: 'Image 6' },
    { src: '/img/best-of/7.jpg', alt: 'Image 7' },
    { src: '/img/best-of/8.jpg', alt: 'Image 8' },
]
</script>

<template>
    <UContainer as="section" class="pb-10">
        <h1
            class="font-serif text-left pt-12 pb-20 font-medium text-4xl md:text-6xl lg:text-8xl"
            data-aos="fade-up"
        >
            A passionate <span class="highlight">photographer</span> traveling
            the world
        </h1>

        <section
            class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 lg:gap-6 lg:space-y-6"
        >
            <NuxtImg
                v-for="(image, index) in images"
                :key="image.alt"
                :src="image.src"
                :alt="image.alt"
                data-aos="fade-up"
                :data-aos-delay="300 + index * 100"
                class="w-full rounded-[var(--ui-radius)] shadow-md"
            />
        </section>
    </UContainer>
</template>

<style scoped>
.highlight {
    position: relative;
    display: inline-block;
    z-index: 1;
}
.highlight::after {
    content: '';
    position: absolute;
    left: -0.1em;
    bottom: -0.5em;
    width: 105%;
    height: 1em;
    mask-image: url('/line.svg');
    -webkit-mask-image: url('/line.svg');
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: cover;
    -webkit-mask-size: cover;
    mask-position: left center;
    -webkit-mask-position: left center;
    background: var(--ui-primary);
    opacity: 0.85;
    /* Add a second mask for the drawing animation */
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
    -webkit-mask-image: linear-gradient(
            to right,
            black 0%,
            black 50%,
            transparent 50%
        ),
        url('/line.svg');
    mask-image: linear-gradient(to right, black 0%, black 50%, transparent 50%),
        url('/line.svg');
    -webkit-mask-size:
        200% 100%,
        cover;
    mask-size:
        200% 100%,
        cover;
    -webkit-mask-position:
        right center,
        left center;
    mask-position:
        right center,
        left center;
}

@media (prefers-reduced-motion: no-preference) {
    .highlight::after {
        animation: drawMask 0.8s ease-out forwards;
    }
}

@keyframes drawMask {
    0% {
        -webkit-mask-position:
            right center,
            left center;
        mask-position:
            right center,
            left center;
    }
    100% {
        -webkit-mask-position:
            left center,
            left center;
        mask-position:
            left center,
            left center;
    }
}
</style>
