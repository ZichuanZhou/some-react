import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
    }

    componentWillMount() {
        
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("will receive porps",nextProps);
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        console.log("should update",nextProps,nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("will update",nextProps, nextState);
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("did update", prevProps, prevState);
    } 

    componentWillUnmount() {
        console.log("will unmount");
    }

    onClickHandler() {
        this.setState({
            display: !this.state.display
        });
    }

    render() {
        console.log("rendering")
        let content = "";
        if(this.state.display) {
            content = (
                <div>
                    {this.props.name}
                    <br/>
                </div>
            );
            
        }
        return (
            <div>
                {content}
                <button onClick={this.onClickHandler.bind(this)}>(un)mount</button>
            </div>
            
        );
    }
}

Layout.propTypes = {

};

export default Layout;
