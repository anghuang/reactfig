import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import queryString from 'query-string'
class order extends Component {
    constructor (props) {
        super();
        console.log(queryString.parse(props.location.search), props.location.state)
    }
    render() {
        return (
            <QueueAnim>
            <div key="b">
                222
            </div>
            </QueueAnim>
        );
    }
}

export default order;