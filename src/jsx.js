import React,{Component} from 'react';
class Person extends React.Component {
    handdle() {
        console.log('====');
    }
    render() {
        return <h1 onClick={this.handdle} >Hello world </h1>
    }
}
