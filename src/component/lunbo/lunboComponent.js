/**
 * Created by z on 2017/10/22.
 */


import  'lunbocss.css';
import React from 'react';

const LunBoComponent=React.createClass({

    propsTypes:{
        intervalTime:React.PropTypes.number, //interval间隔
        autoPlay:React.PropTypes.bool,
        currentIndex:React.PropTypes.bool,
        defaultShowIndex:React.PropTypes.bool,
        direction:React.PropTypes.oneOf['right','left'],
        picNumber:React.PropTypes.number,
        boxStyle:React.PropTypes.string,
    },

    //  方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。
    // 当用户点击组件，导致状态变化，this.setState 方法就修改状态值，
    // 每次修改以后，自动调用 this.render 方法，再次渲染组件。
    getInitialState(){
        return{
            currentIndex:this.props.defaultShowIndex?this.props.defaultShowIndex:0,
            direction:this.props.direction?this.props.direction:'right',
        }
    },
    getDefaultProps(){
        return{
            intervalTime:2000,
            autoPlay:true,
            defaultShowIndex:0,
            direction:'right'
        }
    },
    //函数在进入状态之前调用 3种状态，5种生命周期方法，2特殊方法
    componentWillMount(){

    },
    componentDidMount(){

    },
    /*componentWillUpdate(object nextProps, object nextState){

    },*/
    /*componentDidUpdate(object prevProps, object prevState){

    },*/
    /*componentWillUnmount(){

    },*/
    //此外，React 还提供两种特殊状态的处理函数。
    //已加载组件收到新的参数时调用
    /*componentWillReceiveProps (object nextProps){

    },*/
    //组件判断是否重新渲染时调用
    componentWillUnmount(){

    },

    render(){
        let{
            intervalTime,
            autoPlay,
            currentIndex,
            defaultShowIndex,
            direction,
            picNumber,
            boxStyle
        }=this.props;
        return
        <div  className={boxStyle} >
            <ul>

            </ul>
        </div>
    }
});

export default LunBoComponent;
