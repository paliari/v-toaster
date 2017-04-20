const Toaster = require('./Toaster.vue')

Toaster.install = (Vue, options) => {
  Vue.prototype.$toaster = new (Vue.extend(Toaster))({propsData: options})
  if (process.env.NODE_ENV === 'development') window.$toaster = Vue.prototype.$toaster
}
module.exports = Toaster
