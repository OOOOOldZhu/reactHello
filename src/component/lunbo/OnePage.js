/**
 * Created by z on 2017/10/22.
 */

import  'lunbocss.css';
import React from 'react';

const OnePage = React.createClass({

    propsTypes: {
        intervalTime: React.PropTypes.number, //interval间隔
        autoPlay: React.PropTypes.bool,
        currentIndex: React.PropTypes.bool,
        defaultShowIndex: React.PropTypes.bool,
        direction: React.PropTypes.oneOf['right', 'left'],
        picNumber: React.PropTypes.number,
        hrefUrl: React.PropTypes.string,
    },
    render(){

        return
        <div  >
            <li>
                <a id="a1">
                    <img width="445" height="308" alt="这个时代 你所追求的是什么？"
                         src="http://images.rednet.cn/ArticleImage/2016/07/15/20161039492816424.jpg"/>
                </a>
                <p>
                    <span>这个时代 你所追求的是什么？</span>
                    <a href="http://sc.chinaz.com/" class="imgs-scroll-btn">分享</a>
                </p>
            </li>
        </div>
    }


});

export default OnePage;

// alt 属性用来为图像定义一串预备的可替换的文本。替换文本属性的值是用户定义的
// <img src="boat.gif" alt="Big Boat">在浏览器无法载入图像时，
// 替换文本属性告诉读者她们失去的信息。此时，浏览器将显示这个替代性的文本而不是图像。
// 为页面上的图像都加上替换文本属性是个好习惯，这样有助于更好的显示信息，
// 并且对于那些使用纯文本浏览器的人来说是非常有用的。