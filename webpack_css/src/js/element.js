// import "css-loader!../css/style.css" css-loader内联写法
import "../css/style.css"
import "../css/normal.scss"
const divEl = document.createElement("div");
divEl.className = 'title';
divEl.innerHTML = '您好啊,高俊';

document.body.appendChild(divEl)