<template>
  <cv :data="data" />
</template>

<script lang="ts">
import Vue from 'vue'
import en from '~/assets/data/en.js'
import Cv from '~/components/cv.vue'

export default Vue.extend({
  components: {
    Cv
  },
  setup () {
    return {
      data: en
    }
  }
})
</script>
