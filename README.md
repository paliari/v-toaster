v-toaster v-toaster

v-toaster
=========

> A Vue.js component

Installation
------------

### Using yarn

`yarn add v-toaster`

### Using npm

`npm i --save v-toaster`

Demo
----

[DEMO](http://paliari.github.io/v-toaster)

Usage
-----

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'

import Toaster from 'v-toaster'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'

// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 5000})
```

### Browser

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="v-toaster/dist/v-toaster.css"></link>
<script src="v-toaster/dist/v-toaster.js"></script>
<script>
  Vue.use(VToaster, {timeout: 5000})
</script>
```

### Usage example

```js
// in your component this.$toaster
// ...
this.$toaster.success('Your toaster success message.')
// or custom timeout
this.$toaster.success('Your toaster success message.', {timeout: 8000})

this.$toaster.info('Your toaster info message.')
this.$toaster.error('Your toaster error message.')
this.$toaster.warning('Your toaster warning message.')

// or custom add method
this.$toaster.add('Your toaster theme message.', {theme: 'info', timeout: 10000})
// ...
```

License
-------

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
