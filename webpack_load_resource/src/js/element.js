// import "css-loader!../css/style.css" css-loader内联写法
import "../css/style.css"
import "../css/normal.scss"
import "../font/iconfont.css"

import test from '../img/test.jpg'

const divEl = document.createElement("div");
divEl.className = 'title';
divEl.innerHTML = '您好啊,高俊';

const imgEl = document.createElement("img")
imgEl.src = test

const iEl = document.createElement("i")
iEl.className = "iconfont my-icon-xuanxiang"

document.body.appendChild(imgEl)
document.body.appendChild(divEl)
document.body.appendChild(iEl)