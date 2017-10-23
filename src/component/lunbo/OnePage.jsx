/**
 * Created by z on 2017/10/22.
 */

//import  'lunbocss.css';
import React from 'react';

class OnePage  extends React.Component{

    render(){

        return(
            <div>
                <img width="400" height="250" src="http://up.enterdesk.com/edpic/cf/10/5f/cf105f0a7ab3599550ef2950284b07ea.jpg"/>
            </div>

        );
    }


};
export default OnePage;

// alt 属性用来为图像定义一串预备的可替换的文本。替换文本属性的值是用户定义的
// <img src="boat.gif" alt="Big Boat">在浏览器无法载入图像时，
// 替换文本属性告诉读者她们失去的信息。此时，浏览器将显示这个替代性的文本而不是图像。
// 为页面上的图像都加上替换文本属性是个好习惯，这样有助于更好的显示信息，
// 并且对于那些使用纯文本浏览器的人来说是非常有用的。