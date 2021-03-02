const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin *::before,.skin *::after {
    box-sizing: border-box;
}

.skin {
    position: relative;
    background-color: yellow;
    min-height: 50vh;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(5deg);
    }
    66% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: 50% 100%;
    /* 旋转中心点 */
    animation: wave 300ms infinite linear
}

.nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    /* transparent 透明的 */
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}

.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    /* 左上角 右上角 右下角 左下角 */
    background: black;
}

.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: "";
    display: block;
    border: 1px solid #000;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 2px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
    top: -25px;
}

.mouth .up .lip {
    border: 3px solid black;
    height: 32px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    z-index: 2;
    background: yellow;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
    left: 50%;
    margin-left: -50px;
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(13deg)translateX(53px);
    right: 50%;
    margin-right: -50px;
}

.mouth .up .lip::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
}

.mouth .up .lip.left::before {
    right: -6px;
    background: yellow;
}

.mouth .up .lip.right::before {
    left: -6px;
    background: yellow;
}

.mouth .down {
    height: 180px;
    position: absolute;
    width: 100%;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b0109;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    border: 1px solid green;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
}

.face {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    top: 230px;
    left: 50%;
    margin-left: -44px;
    background: #ea0102;
    border-radius: 50%;
    z-index: 3;
}

.face.left {
    transform: translateX(-143px);
}

.face.right {
    transform: translateX(143px);
}

.face>img {

    position: absolute;
    left: 50%;
    bottom: -50%;
}

.face.left>img {
    transform-origin: 0 0;
    transform: rotateY(3.142rad);
}
`
export default string
// 将其导出为string