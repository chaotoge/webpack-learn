import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';
/*
* 代码拆分配置
* */

// var cats = require.ensure(["./cats"], function(require) {
// 	// a named chunk
// //	var c = require("c");
// }, "my own chunk");

 $('<h1>Cats</h1>').appendTo('body');
 const ul = $('<ul></ul>').appendTo('body');
 for (const cat of cats) {
     $('<li></li>').text(cat).appendTo(ul);
 }

