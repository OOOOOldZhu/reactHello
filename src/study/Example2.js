/**
 * Created by z on 2017/7/30.
 */
import React from "react";

var WebSite = React.createClass({
    
    render: function () {
        return <div>
                  <Name name={this.props.name}/>
                  {/*<Link link={this.props.site}/>*/}
               </div>
    }
    
    
});

var Name = React.createClass({
    
    render: function () {

        return <h1>{this.props.name}</h1> ;
    }
    
    
});

var Link = React.createClass({

    render: function(){
        return /*<a href={this.props.link}>
                  {this.props.link}
               </a>*/
        <h1>{this.props.site}</h1> ;

    }

});

export default WebSite ;

