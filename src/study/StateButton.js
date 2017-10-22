/**
 * Created by z on 2017/7/30.
 */

import React from "react";


var StateChangeButton =React.createClass({

    getInitialState:function(){
        return {clickCount: 0};
    },
    handleClick: function(){
        this.setState(
            state =>{
                return {clickCount:state.clickCount+1};
            }
        );
    },
    render: function(){

        return (<h2 onClick={this.handleClick}>点击次数为:{this.state.clickCount}</h2>)

    }




});

export default StateChangeButton ;








