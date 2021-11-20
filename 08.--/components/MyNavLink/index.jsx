import React, { Component } from 'react'
import {Link,NavLink,NBrowserRouter,Route} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        console.log(this.props);
        const {to, title} = this.props
        return (
            // <NavLink activeClassName="my-active" className="list-group-item" {...this.props}>{title}</NavLink>
            <NavLink activeClassName="my-active" className="list-group-item" {...this.props}>{this.props.children}</NavLink>
        )
    }
}
