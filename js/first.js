/**
 * Created by Administrator on 2017/6/5.
 */

'use strict';

// var under = require('hello');
var _ = require('underscore')._;

//捕捉异常/处理
function main(s) {
    console.log('BEGIN main()');
    try {
        foo(s);
    } catch (error) {
        console.log('出错了：', error);
    } finally {
        console.log('finally必须要执行的!')
    }
    console.log('END main()');
}

function foo(s) {
    console.log('BEGIN foo()');
    bar(s);
    console.log('END foo()');
}

function bar(s) {
    console.log(navigator.userAgent);
    console.log('BEGIN bar()');
    //抛出错误
    throw new Error('throw error 抛出错误');
    console.log('length = ' + s.length);
    console.log('END bar()');
}

main(null);

function Iterable(a, ...rest) {

    // var rest = []
    // if (arguments.length > 0) {
    //     for (var i = 0; i < arguments.length; i++) {
    //         rest.push(arguments[i])
    //     }
    // }
    // console.log('after push rest: ', rest);
    console.log('get rest: ', rest);


    var obj = {
        name: 'huang',
        age: 23,
    };
    //动态拓展对象属性
    obj.addr = 'cheng';
    console.log(obj);

    var map = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
    console.log(map)
    for (var m of map) {
        if (m[1] === 'y') {
            console.log(m[1]);
            break;
        }
    }
    ;
    // var array = new Array([1, 2, 3, 'a', 'B']);
    var array = [1, 2, 3, 'd', 'a', 'B'];

    console.log('index of: ', array.indexOf(3));
    console.log('slice function: ', array.slice(2, 7));
    console.log('sort: ', array.sort());
    console.log('join connect: ', array.join('/|'));
    console.log('json || string: ', JSON.parse(JSON.stringify(obj).toString()));
    //iterable对象遍历的方法
    array.forEach(function (ele, index, array) {
        console.log(index, ele);
    });
    var arr = array.filter(function (x) {
        return x % 1 === 0
    });
    console.log('after call filter function: ', arr);

    console.log('\n');

    map.forEach(function (ele, index, m) {
        console.log(index, ele);
    });

//    todo for...of与for...in的区别

    var person = {
        name: 'huang',
        height: 173,
    };
    var func = function (v, k) {
        console.log(arguments[0], arguments[1]);
        console.log('argument length is: ', arguments.length);
        console.log(' 使用underscore对象 ', k + '=' + v);
    };

    //    使用underscore对象(常用函数库)
    console.log('use underscore: ', _.map(person, func));

    //没有意义的操作
    var y = 2;
    var z = y - undefined;
    console.log(z);

    return false
}

//修改dom class
function changeWidth() {
    if (window.screen.availWidth < 385) {
        // var th = document.getElementsByTagName('th');
        var th = document.getElementsByClassName('th2');
        console.log('total is: ', th.length);
        for (var i = 0; i < th.length; i++) {
            th[i].style.width = '250px';
        }
    }

}

//异步请求不会阻碍主线程的执行,但是异步请求的回调函数如果有问题会阻碍浏览器的执行
//老版本ajax
function doAjax() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200) {
                alert(req.responseText);
            }else {
                alert(req.responseText);
            }
        }
    };
}
