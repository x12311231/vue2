export default {
    install(Vue) {
        Vue.directive('say', {
            bind: function(el) {
                console.log('el:', el)
            }
        })
    }
}