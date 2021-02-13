import $ from 'jquery'
import './css/1.css'
//导入单文件组件
//import App from './components/App.vue'

$(function () {
	$('li:odd').css('backgroundColor', 'black')
	$('li:even').css('backgroundColor', 'lightblue')
})

//---------------------------------------------------
import Vue from 'vue' //导入包得到一个构造函数，相当于引入js文件
import App from './components/App.vue' //导入单文件组件

const vm = new Vue({
	el: '#app',//指定el区域
	render: h => h(App)//render函数指定要渲染的根组件
})
