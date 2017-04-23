<template lang="pug">
.v-toaster
  transition-group(name='v-toast')
    .v-toast(:class="{[t.theme]: t.theme}", v-for='t in items', :key='t.key')
      a.v-toast-btn-clear(@click='remove(t)')
      | {{t.message}}
</template>

<script>

export default {
  props: {
    timeout: {
      type: Number,
      default: 10000
    }
  },
  methods: {
    success (message, {timeout}) { this.add(message, {theme: 'v-toast-success', timeout}) },
    info (message, {timeout}) { this.add(message, {theme: 'v-toast-info', timeout}) },
    warning (message, {timeout}) { this.add(message, {theme: 'v-toast-warning', timeout}) },
    error (message, {timeout}) { this.add(message, {theme: 'v-toast-error', timeout}) },

    add (message, {theme, timeout}) {
      if (!this.$parent) {
        this.$mount()
        document.body.appendChild(this.$el)
      }
      let item = {message, theme, key: `${Date.now()}-${Math.random()}`}
      this.items.push(item)
      setTimeout( () => this.remove(item), timeout || this.timeout)
    },
    remove (item) {
      let i = this.items.indexOf(item)
      if (i >= 0) {
        this.items.splice(i, 1)
      }
    }
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style lang="stylus">
dark-color = #454d5d
toast-variant(color)
  background alpha(color, .9)
  border-color color

.v-toaster
  position fixed
  top 50px
  right 0
  z-index 10000
  width 300px
  padding 10px
  .v-toast
    margin-bottom 10px
    transition all .3s ease
    border 1px solid dark-color
    border-radius 8px
    color #fff
    display block
    padding 1rem
    width 100%
    toast-variant(dark-color)
    &.v-toast-enter, &.v-toast-leave-to
      -webkit-transform translate(100%)
      transform translate(100%)
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

    .v-toast-btn-clear
      background transparent
      border 0
      color currentColor
      height 1.6rem
      line-height 1.6rem
      margin .2rem -.2rem .2rem .4rem
      opacity .45
      padding 0 .2rem
      text-decoration none
      width 1.6rem
      float right
      cursor pointer
      &:hover
        opacity .85
      &::before
        content "\2715"
@media (max-width: 600px)
  .v-toaster
    width 100%
</style>
