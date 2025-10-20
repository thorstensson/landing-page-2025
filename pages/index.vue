<script setup lang="ts">
definePageMeta({
  layout: "default",
})

useHead({
  title: "Thomas Thorstensson - Creative Developer",
  meta: [
    {
      name: "description",
      content:
        "Creative Developer Thomas Thorstensson. New portfolio launching October 2025 at www.thomasthorstensson.com",
    },
    {
      name: "keywords",
      content:
        "Thomas Thorstensson, Creative Developer, Web Developer, Portfolio, thomasthorstensson.com",
    },
    { name: "author", content: "Thomas Thorstensson" },
    { name: "robots", content: "noindex, nofollow" },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.thomasthorstensson.com/" },
    {
      property: "og:title",
      content: "Thomas Thorstensson - Creative Developer",
    },
    {
      property: "og:description",
      content:
        "Creative Developer Thomas Thorstensson. New portfolio launching October 2025.",
    },
    { property: "og:site_name", content: "Thomas Thorstensson" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.thomasthorstensson.com/" },
    {
      name: "twitter:title",
      content: "Thomas Thorstensson - Creative Developer",
    },
    {
      name: "twitter:description",
      content:
        "Creative Developer Thomas Thorstensson. New portfolio launching October 2025.",
    },

    // Additional SEO
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
  ],
  link: [
    {
      rel: "alternate",
      hreflang: "en",
      href: "https://www.thomasthorstensson.com/",
    },
  ],
})

const scrollConfig = reactive({
  text: "Redirecting to new portfolio...",
})
</script>

<template>
  <div class="page-wrapper">
    <div class="launch">
      <h1 class="launch__heading">
        New Folio<br />@ www.thomasthorstensson.com
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-y: hidden;
}

.launch {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  text-align: center;

  &__heading {
    font-family: $sans-text;
    color: $secondary;
    font-size: 1.5rem;
    font-weight: $sans-text-wgt;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  &__subtext {
    font-family: $sans-text;
    color: $secondary;
    font-size: 2.2rem;
    font-weight: $sans-text-wgt;
    margin-bottom: 1.5rem;
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  &__link {
    font-family: $sans-text;
    color: $secondary;
    font-size: 1rem;
    font-weight: $sans-text-wgt;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $accent1;
    }
  }
}
</style>
