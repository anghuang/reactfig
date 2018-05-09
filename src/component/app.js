import {data} from '../mock/mock'
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'//导入的方式跟之前有点变化
import appAction from '../redux/modules/app/action';
import { connect } from 'react-redux';
import 'whatwg-fetch'
import {bindActionCreators} from 'redux';


class App extends Component {
    constructor (props) {
        super(props);
        console.log(props)
        this.state = {
            openId:1
        }
    }
    render() {
        const {appReducer}=this.props
        console.log(this.props)
        return (
            <div className="app">
                <ul>
                    <li>{appReducer.text}</li>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to={{pathname:'/order',search:'?uid=1&openid=1',state: { fromDashboard: true }}}>order</NavLink>
                </ul>
                {this.props.children}
            </div>
        );
    }
    componentDidMount(){
        fetch('/todoList.mock',{
            method: 'POST',
        }) // 返回一个Promise对象
            .then((res)=>{
                res.json().then((res)=>{
                    console.log(res,'5666')
                })
            })
            .then((res)=>{
                // console.log(res) // res是最终的结果
            })


        this.props.appAction.getMemberList(1111).then((data)=>{
            console.log(data)
        })
        console.log(this.props.appAction.addd(222))
    }
}
const mapStateToProps = function(state) {
    return {
        appReducer: state.appReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        appAction: bindActionCreators(appAction, dispatch)
    }
};
// 连接 store，作为 props
export default connect(mapStateToProps,mapDispatchToProps)(App) ;
