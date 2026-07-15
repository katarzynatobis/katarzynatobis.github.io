<template>
  <header>
    <h1>{{ data.name }}</h1>
    <address><a :href="'maito:'+data.mail">{{ data.mail }}</a></address>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CvHeader',

  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>
