import React, { Component } from "react";
import "./App.css";
import TattooInput from "./Components/TattooInput";
import TattooList from "./Components/TattooList";
import uuid from "react-uuid";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  }
  
  HandleSubmit=(e)=> {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      name: this.state.item,
    };
    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      editItem: false,
    });
    // console.log("Submit Data");
  };
  HandleChange=(e)=> {
    this.setState({
      item: e.target.value, //เพื่อให้พิมได้
    });
    // console.log("Data Change");
  };
  clearList=()=> {
    this.setState({
      items:[]
    })
  };
  HandleDelete=(id)=> {
    const Filteritems = this.State.items.filter(item=>item.id !== id)
    this.setState({
      items:Filteritems
    })
  };
  HandleEdit=(id)=> {
    const Filteritems = this.state.items.filter(item=>item.id!== id)
    const Selectitems = this.state.items.find(item=>item.id=== id)
    this.setState({
      items:Filteritems,
      item:Selectitems.name,
      id:id,
      editItem:true
    })
  };

  render() {
    return (
      <div className="container">
        <h2 align="center" className="my-5">EAZYLOOK TATOO LIST</h2>
        <div className="row">
          <TattooInput
            item={this.state.item}
            HandleSubmit={this.HandleSubmit}
            HandleChange={this.HandleChange}
            editItem={this.state.editItem}
          />
        </div>
        <TattooList
          items={this.state.items}
          HandleDelete={this.HandleDelete}
          HandleEdit={this.HandleEdit}
          clearList={this.clearList}
        />
      </div>
    );
  }
}
