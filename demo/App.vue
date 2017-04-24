<template lang="pug">
div.toaster-demo(style='text-align: center;')
  p
    textarea(v-model='message')
  p
    select(v-model='theme', :class='{[theme]: true}')
      option(value='') default
      option(value='v-toast-info') info
      option(value='v-toast-success') success
      option(value='v-toast-warning') warning
      option(value='v-toast-error') error
    button.btn(@click='show', :class='{[theme]: true}') show
  p
    button.btn.v-toast-info(@click='$toaster.info(message, {})') info
    button.btn.v-toast-success(@click='$toaster.success(message)') success
    button.btn.v-toast-warning(@click='$toaster.warning(message)') warning
    button.btn.v-toast-error(@click='$toaster.error(message)') error
</template>

<script>
import Vue from 'vue'
import Toaster from '../src/v-toaster.js'
Vue.use(Toaster)

export default {
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
<style src="./style.css"></style>
<style lang="stylus">
toast-variant(color)
  color #fff
  background-color color
  border-color color

.toaster-demo
  textarea
    border-radius 5px
    border 2px solid #155799
    min-width 500px
  select
    height 2.2em
  .btn, select
    background-color #159957
    font-size 1.5em
    padding 10px
    margin 10px
    &.v-toast-success
      toast-variant(#32b643)
    &.v-toast-warning
      toast-variant(#ffb700)
    &.v-toast-info
      toast-variant(#5bc0de)
    &.v-toast-error
      toast-variant(#e85600)
    &.v-toast-primary
      toast-variant(#428bca)

</style>
