<template lang="pug">
div(style='text-align: center;')
  h1 Toaster
  p
    textarea(v-model='message')
  p
    select(v-model='theme')
      option(value='') default
      option(value='v-toast-info') info
      option(value='v-toast-success') success
      option(value='v-toast-warning') warning
      option(value='v-toast-error') error
  p
    button(@click='show') show
  p
    button(@click='$toaster.info(message, {})') info
    button(@click='$toaster.success(message)') success
    button(@click='$toaster.warning(message)') warning
    button(@click='$toaster.error(message)') error
</template>

<script>
import Vue from 'vue'
import Toaster from '../dist/v-toaster'
import '../dist/v-toaster.css'

Vue.use(Toaster)

export default {
  components: {Toaster},
  data () {
    return {
      theme: 'v-toast-info',
      message: 'My Toaster message.',
    }
  },
  methods: {
    show () {
      this.$toaster.add(this.message, {theme: this.theme})
    },
  },
}
</script>
