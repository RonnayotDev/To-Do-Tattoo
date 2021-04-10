import React, { Component } from 'react'
import Tattooitems from './Tattooitems.css'

export default class Tattooitem extends Component {
    render() {
        const {name,HandleDelete,HandleEdit}=this.props;
        return (
                <li className="list-group-item my-2">{name}
                <div className="icons">
                <span onClick={HandleEdit} className="text-warning"><i className="far fa-edit mx-4"></i></span>
                <span onClick={HandleDelete} className="text-danger"><i className="far fa-trash-alt"></i></span>
                </div>
                </li>
        )
    }
}
