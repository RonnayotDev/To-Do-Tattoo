import React, { Component } from 'react'
import Tattooitem from './Tattooitem'
export default class TattooList extends Component {
    render() {
        const {items,HandleEdit,HandleDelete,clearList}=this.props;
        return (
            <ul className="list-group">
                <h3>รายการรอยสัก</h3>
                {items.map(item=>{
                    return(
                        <Tattooitem 
                        key={item.id} 
                        name={item.name}
                        HandleEdit={()=>HandleEdit(item.id)}
                        HandleDelete={()=>HandleDelete(item.id)}
                        />
                    )
                })} 
                <button className="btn btn-danger my-5 font-weight-bold" onClick={clearList}>ClearTattoo</button>
            </ul>
           
        )
    }
}
