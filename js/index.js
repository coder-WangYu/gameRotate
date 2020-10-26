// //获取DOM元素
// var btn = document.getElementsByClassName('btn')[0]
// var bigWheel = document.getElementsByClassName('wheel')[0]
// var bool = true
// var num = 0

// // 绑定按钮点击事件
// btn.onclick = function () {
//     if (bool) {
//         num = Math.floor(Math.random() * 360)
//         wheelRun(num)
//         bool = false
//     }
// }

// //转盘旋转功能
// function wheelRun(deg) {
//     var myNum = deg + 16 * 360
//     bigWheel.style.transform = 'rotate(' + myNum + 'deg)'
//     bigWheel.style.transition = 'all 4s'
// }

// //绑定轮子事件监听
// bigWheel.addEventListener('webkitTransitionEnd', function () {
//     bool = true
//     bigWheel.style.transform = 'rotate(' + num + 'deg)'
//     bigWheel.style.transition = 'none'
//     judgeFn(num)
// })

// //判断最终位置功能
// function judgeFn(deg) {
//     if (deg > 10 && deg <  90) {
//         alert('恭喜您，二等奖！')
//     } else if (deg > 90 && deg < 170) {
//         alert('恭喜您，三等奖！')
//     } else if (deg > 170 && deg < 215) {
//         alert('恭喜您，再来一次！')
//     } else if (deg > 215 && deg < 290) {
//         alert('很遗憾，谢谢参与！')
//     } else {
//         alert('恭喜您，一等奖！')
//     }
// }

//-------------------------- 上面的代码为普通写法，有很多不足之处 ---------------------

/**
 * 让代码的可维护性、复用性变强
 * 变量的语义化，能够让人轻易读懂
 * 避免全局变量的污染
 * 
 * 模块化、封装的思想、设计模式
 * 1、函数式编程：最初的封装和模块的思想 ------ 闭包 ---函数式编程：偏函数、函数柯理化
 *      例如封装一个加法的功能：
 *              function (a, b) {
 *                  return a + b
 *              }
 * 2、对象式编程：
 *      例如，单对象编程：
 *              var obj = {
 *                  name : 'laodeng'            
 *                  init : function () {
 *                      this.getName()
 *                  },
 *                  getName : function () {
 * 
 *                  }
 *              }   
 *              obj.init()
 * 3、立即执行函数：
 *             var laodeng = (function (){
 *                 var name = 'laodeng'
 *                 function abc () {
 *                      console.log(name)
 *                 }
 *                 return {
 *                      adc : abc
 *                 }
 *             }())
 * 4、构造函数 new 对象原型 原型链 ------ jQuery（js库）
 */

//---------------------------- 重新构造更为高级的js代码 -------------------------

var pars = {
    rotateNum : 8,
    turnbody : document.getElementsByClassName('wrapper')[0],
    clkFn : clickFn,
    judge : judgeFn
}

var lottety = new Lottery(pars)

function clickFn () {
    var num = Math.floor(Math.random() * 360)
    lottety.wheelRun(num)
}

function judgeFn (deg) {
    if (deg > 10 && deg <  90) {
        alert('恭喜您，二等奖！')
    } else if (deg > 90 && deg < 170) {
        alert('恭喜您，三等奖！')
    } else if (deg > 170 && deg < 215) {
        alert('恭喜您，再来一次！')
    } else if (deg > 215 && deg < 290) {
        alert('很遗憾，谢谢参与！')
    } else {
        alert('恭喜您，一等奖！')
    }
}