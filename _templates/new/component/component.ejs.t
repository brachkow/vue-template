---
to: src/<%= folder %>/<%= name %>/<%= name %>.vue
---

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n({
    locale: 'en',
    messages: {},
  });
</script>

<template>
  <div><%= name %></div>
</template>
