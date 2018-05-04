import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import {connect} from "react-redux";
class home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            openId:1,
            isShow:true
        }
    }
    render() {
        return (
            <QueueAnim delay={300} className="demo-content">
            <div className="demo-thead" key="a">
                <div onClick={this.getState.bind(this)}>{this.state.isShow?<span>显示</span>:<span>不显示</span>}</div>
                <div onClick={this.handClick.bind(this)}>点我{this.state.open}</div>
                <div onClick={this.handClick1.bind(this)}>减一{this.state.open}</div>
            </div>
            </QueueAnim>
        );
    }
    getState () {
        this.setState({isShow:!this.state.isShow})
    }
    handClick(){
        console.log(this.props)
        let open=this.state.open;
        this.setState({open:open+=1})
        console.log(this.props)
        // this.props.history.push({pathname: '/order',search:'?uid=2&openid=2'});
    }
    handClick1(){
        let open=this.state.open;
        this.setState({open:open-=1})
    }
    componentDidMount(){//组件加载完
        this.setState({open:5}, ()=> {
            console.log(this.state.open)
        })
    }
    componentDidUpdate(){//检测函数
        console.log(this.state.open)
    }
}

const mapStateToProps = function(state) {
    console.log(state)
    return {
        text: state.appReducer.text
    };
};
// connect(mapStateToProps)
// 连接 store，作为 props
export default home;