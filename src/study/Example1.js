/**
 * Created by z on 2017/7/30.
 */
import React, {Component} from 'react';

var Example1 = React.createClass({
    render: function() {
       return <h3>例子1：传入的props是{this.props.title}</h3>;
    }
});

export default Example1;