// CommonJs 模块化

/**
 * 核心模块：内部封装号的模块
 * 用户模块：自定义的模块
 * 
 * 1、CommonJs 模块化
 *  通过exports导出，一个对象
 *  通过module.exports直接导出
 *  通过require导入
 * 
 * 
 * 2、Node V13.2.0之后开始实验性的支持ESM模块化,可以通过添加package.json文件，指定"type": "module"，
 *  使用es6的export导出
 *  使用import导入
 *
 */

// CommonJs 模块化
// const utils = require('./utils')
// const addFunc2 = require('./utils2')

// console.log(utils, utils.addFunc(1,5), addFunc2, addFunc2(1,2))

// es6模块化
import addFunc3 from "./utils3.js";

console.log(addFunc3, addFunc3(1, 3));
