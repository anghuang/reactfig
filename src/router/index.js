
import React from 'react';
import asyncComponent from '../AsyncComponent'
import {Route} from 'react-router-dom'//导入的方式跟之前有点变化
const App = asyncComponent(() => import('../component/app'));
const Home = asyncComponent(() => import('../component/home'));
const Order = asyncComponent(() => import('../component/order'));
const routers =(
        <div>
        <Route path="/" component={App}/>
        <Route  path="/home" component={Home} />
        <Route  path="/order" component={Order}/>
        </div>
)
export default routers