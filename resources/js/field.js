Nova.booting((Vue, router, store) => {
  Vue.component('index-laravel-nova-qr-code', require('./components/IndexField'))
  Vue.component('detail-laravel-nova-qr-code', require('./components/DetailField'))
  Vue.component('form-laravel-nova-qr-code', require('./components/FormField'))
})
