<template>
  <div class="page">
    <label class="data-switcher" for="data-select" aria-hidden>
      <span class="data-switcher__label">Data</span>
      <select id="data-select" v-model="selectedData" @change="onDataChange">
        <option value="en">Katarzyna</option>
        <option value="enArtur">Artur</option>
      </select>
    </label>
    <cv :data="data" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import en from '~/assets/data/en.js'
import enArtur from '~/assets/data/en-artur.js'
import Cv from '~/components/cv.vue'

export default Vue.extend({
  components: {
    Cv
  },
  data () {
    return {
      selectedData: 'en',
      data: en
    }
  },
  mounted () {
    this.applyTheme()
  },
  methods: {
    onDataChange () {
      this.data = this.selectedData === 'enArtur' ? enArtur : en
      this.applyTheme()
    },
    applyTheme () {
      const color = this.data.primary || '#278384'
      const lightColor = this.data.primaryLight || color
      const darkColor = this.data.primaryDark || '#153334'
      const serifFont = this.data.font?.serif || 'didonesque'
      const sansSerifFont = this.data.font?.sansSerif || 'karu'

      document.documentElement.style.setProperty('--primary', color)
      document.documentElement.style.setProperty('--primary-light', lightColor)
      document.documentElement.style.setProperty('--primary-dark', darkColor)
      document.documentElement.style.setProperty('--serif', serifFont)
      document.documentElement.style.setProperty('--sans-serif', sansSerifFont)
    }
  }
})
</script>

<style lang="postcss" scoped>
.page {
  position: relative;
}

.data-switcher {
  position: fixed;
  top: calc(var(--unit) * 2);
  right: calc(var(--unit) * 2);
  z-index: 10;
  align-items: center;
  gap: calc(var(--unit) * 2);
  padding: calc(var(--unit) * 1.5) calc(var(--unit) * 2);
  border-radius: calc(var(--unit) * 1);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: inline-flex;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.data-switcher:hover,
.data-switcher:focus-within {
  opacity: 1;
}

.data-switcher__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
}

.data-switcher select {
  border: 1px solid var(--primary-light);
  border-radius: calc(var(--unit) * 0.5);
  padding: calc(var(--unit) * 0.75) calc(var(--unit) * 1.25);
  font: inherit;
  background: white;
}
</style>
