/**
 * Created by z on 2017/10/22.
 */


import React, {Component} from 'react';
import style from './lunbocss.css'; // 导入之前必须加绝对路径
import OnePage from './../lunbo/OnePage.jsx';
class LunBoComponent extends Component {
    componentDidMount() {
        let array = ["http://images.rednet.cn/ArticleImage/2016/07/15/20161039492816424.jpg",
            "http://up.enterdesk.com/edpic/d5/f0/d1/d5f0d13732a30b6ac5cc816c30a24d76.jpg",
            "http://up.enterdesk.com/edpic/0a/43/81/0a43812c14e98b64d7f357035ed06ded.jpg"];
        let append = document.getElementById('append');
        for (let i = 0; i < 3; i++) {
            let oneImg = document.createElement("img");
            oneImg.setAttribute("id", "newImg");
            oneImg.src = array[i];
            append.appendChild(oneImg);
            console.log("此时");
        }
        window.onload = function () {
            var images = document.getElementsByTagName('img');
            var pos = 0;
            var len = images.length;
            setInterval(function () {
                images[pos].style.display = 'none';
                pos = ++pos == len ? 0 : pos;
                images[pos].style.display = 'inline';
            }, 2000);
        };
    }

    render() {
        return (
            <div>
                <div className="tab">
                    <OnePage/>
                    <div id="append"/>
                </div>
            </div>
        );
    }
}
;

export default LunBoComponent;
