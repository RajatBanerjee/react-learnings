import React, { Component } from 'react';

class Loading extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            text:'Loading'
        }
    }
    componentDidMount() {
        var stopper = 'Loading...';
        this.interval = window.setInterval( ()=> {
            if (this.state.text === stopper) {
              this.setState(function () {
                return {
                  text: 'Loading'
                }
              })
            } else {
              this.setState(function (prevState) {
                return {
                  text: prevState.text + '.'
                }
              });
            }
          }, 100)
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
      }
    render() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
}

export default Loading;