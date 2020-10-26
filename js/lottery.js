(function (win) {
    //设置默认属性
    var defaultPar = {
        rotateNum: 5,
        turnbody: document.getElementsByTagName('body'),
        clkFn: function () {},
        judge: function () {}
    }

    function Lottery(pars) {
        this.pars = Object.assign(defaultPar, pars) //不传参走默认，传参走pars
        this.bool = true
        this.init()
    }

    win.Lottery = Lottery   //与外界产生接口

    Lottery.prototype.init = function () {
        var self = this
        console.log(this.pars)
        this.pars.btn = this.pars.turnbody.getElementsByClassName('btn')[0]
        this.pars.bigWheel = this.pars.turnbody.getElementsByClassName('wheel')[0]

        this.pars.btn.onclick = function () {
            if (self.bool) {
                self.pars.clkFn()
                self.bool = false
            }
        }

        this.pars.bigWheel.addEventListener('webkitTransitionEnd', function () {
            self.bool = true
            self.pars.bigWheel.style.transform = 'rotate(' + self.pars.myNum + 'deg)'
            self.pars.bigWheel.style.transition = 'none'
            self.pars.judge(self.pars.myNum)
        })
    }

    Lottery.prototype.wheelRun = function (deg) {
        var myNum = deg + this.pars.rotateNum * 360
        this.pars.bigWheel.style.transform = 'rotate(' + myNum + 'deg)'
        this.pars.bigWheel.style.transition = 'all 4s'
        this.pars.myNum = deg
    }
}(window))