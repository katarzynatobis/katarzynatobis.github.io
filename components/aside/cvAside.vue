<template>
  <aside class="cv-aside cv-aside--spacing" aria-labelledby="aside-title">
    <h2 id="aside-title" class="cv-aside__hidden-h2">
      More info
    </h2>
    <cv-section v-for="item in data.sections" :key="item.title" small>
      <template #title>
        <span v-html="item.title" />
      </template>
      <p v-html="item.description" />
    </cv-section>
    <blockquote class="cv-aside__agreement">
      {{ data.agreement }}
    </blockquote>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import CvSection from '../cvSection.vue'

export default Vue.extend({
  components: {
    CvSection
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.cv-aside {
  border-left: 1px solid var(--primary);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: env(--tablet)) {
    border: none;
  }

  &.cv-aside--spacing {
    padding-right: calc(var(--unit) * 15);
    padding-left: calc(var(--unit) * 10);

    @media screen and (max-width: env(--tablet)) {
      padding-top: calc(var(--unit) * 4);
    }

    @media print {
      padding-right: 0;
    }
  }

  &__hidden-h2 {
    height: 0;
    width: 0;
    overflow: hidden;
  }

  &__agreement {
    margin: 0;
    margin-top: auto;
    font-size: calc(var(--paragraph-size) * 0.7);
    break-inside: avoid-page;

    @media screen and (max-width: env(--tablet)) {
      font-size: calc(var(--paragraph-size) * 0.8);
      margin-top: calc(var(--unit) * 15);
    }
  }
}
</style>
