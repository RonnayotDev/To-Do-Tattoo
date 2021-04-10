import React,{ Component } from "react";

export default class TattooInput extends Component{
    render(){
        const {HandleSubmit,item,HandleChange,editItem} = this.props;
        return(
           <div className="card card-body my-3">
               <form onSubmit={HandleSubmit}>
                   <div className="form-group">
                   <p>กรุณาใส่ชื่อรอยสัก</p>
                   <input type="text" className="form-control" value={item} onChange={HandleChange}/>
                   </div>
                   <input type="submit" disabled={item?false:true} 
                   className={editItem?"btn btn-warning my-3":"btn btn-success my-3"}
                    value={editItem?"แก้ไขรายการ":"บันทึกรายการ"}/>
               </form>
           </div>
        )
    }
}