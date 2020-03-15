import React, { Component } from 'react'
import "./assets/css/app.css"


class App extends Component{
  constructor(){
    super()
    this.state={
      users:[
        {name:"张三",checked:true,},
        {name:"李四",checked:false,},
        {name:"王五",checked:false,},
        {name:"赵六",checked:false,},
      ],
      isAllSelected:false
    }
  }
  selectUser(index){
    let tmpUsers = this.state.users
    //
    let isAllSelected = true
    tmpUsers[index].checked = !tmpUsers[index].checked
    for (let i = 0; i < tmpUsers.length; i++) {
      if (!tmpUsers[i].checked) {
        isAllSelected = false
        break
      }
    }
    this.setState({users:tmpUsers,isAllSelected})
  }
  selectAllusers(){
    let isAllSelected = this.state.isAllSelected
    isAllSelected = !isAllSelected
    let tmpUsers = this.state.users
    tmpUsers.forEach(item=>{
      item.checked = isAllSelected
    })
    this.setState({users:tmpUsers,isAllSelected})
  }
  deleteUser(index){
    let tmpUsers = this.state.users
    let isAllSelected = true
    tmpUsers.splice(index,1)
    if (tmpUsers.length<=0) {
      isAllSelected=false
    }else{
      for (let i = 0; i < tmpUsers.length; i++) {
        if (!tmpUsers[i].checked) {
          isAllSelected = false
          break
        }
      }
    }
    this.setState({users:tmpUsers,isAllSelected})
  }
  delAllUsers(){
    let tmpUsers = this.state.users,
        isChecked = false,
        isAllSelected = this.state.isAllSelected
    for(let i=0;i<tmpUsers.length;i++){
      if (tmpUsers[i].checked) {
        isChecked=true
        break
      }
    }
    if (!isChecked) {
      alert("请选择要删除的会员")
      return
    }else{
      tmpUsers = tmpUsers.filter(item=>{
        return item.checked===false
      })
      // for (let i = 0; i < tmpUsers.length; i++) {
      //   if (tmpUsers[i].checked) {
      //     tmpUsers.splice(i,1)
      //     i--
      //   }
      // }
    }
    if (tmpUsers.length<=0) {
      isAllSelected=false
    }
    this.setState({users:tmpUsers,isAllSelected})
  }
  render(){
    return (
      <div className="App">
        <table  width="100%" border="1" cellSpacing="0" cellPadding="0">
          <thead>
            <tr style={{color:"#fff",fontSize:"14px"}}>
              <td height="40" align="center" bgcolor="#0099cc">
                <label>
                  <input type="checkbox" 
                    onChange={()=>this.selectAllusers()}
                    checked={this.state.isAllSelected}
                  />全选
                </label>
              </td>
              <td align="center" bgcolor="#0099cc">姓名</td>
              <td align="center" bgcolor="#0099cc">管理</td>
            </tr>
          </thead>
          <tbody>
          {
            this.state.users.map((item,index)=>{
              return (
              <tr key={index}>
                <td height="40" align="center">
                  <input type="checkbox"
                    checked={item.checked}
                    onChange={()=>this.selectUser(index)}
                  />
                </td>
                <td align="center">{item.name}</td>
                <td align="center" onClick={()=>this.deleteUser(index)} >删除</td>
              </tr>
              )
            })
          }
          </tbody>
          <tfoot>
            <tr >
              <td height="40" colSpan="3" align="center">
                <button onClick={()=>this.delAllUsers()} type="button">批量删除</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}



export default App
