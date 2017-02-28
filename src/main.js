// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TreeView from 'vue-json-tree-view'

Vue.use(TreeView)

import App from './App'

function init (json) {
  const d = document
  // clean the DOM first
  d.body.innerText = ''

  const app = d.createElement('div')
  app.setAttribute('id', 'app')
  d.body.appendChild(app)

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: `<App :json="json" />`,
    components: { App },
    data () {
      return {
        json
      }
    }
  })
}

(() => {
  let json = document.body.innerText
  if (json && json.length) {
    try {
      json = JSON.parse(json)
      if (typeof json === 'object') {
        init(json)
      }
    } catch (e) {
      // Not a JSON document leave as it is.
    }
  }
})()
