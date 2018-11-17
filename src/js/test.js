import Vue from 'vue'

let test = {};

test.install = function (Vue, options) {
	Vue.prototype.$msg = 'Hello I am test.js';
	Vue.prototype.$netErr = (tag, err) => {
        console.log(`Error find in interface ${tag}: ${err}`)
    }
}

export default test