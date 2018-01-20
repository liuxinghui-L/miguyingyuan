import React, {Component} from "react";
import "./index.scss";
import Nav from '@/Components/Root/Nav'

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            {this.props.children}
            <Nav></Nav>
        </div>
    }
}

export default Root;