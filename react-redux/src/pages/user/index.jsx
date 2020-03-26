import React from 'react'
import { connect } from 'react-redux'
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  outLogin() {
    this.props.dispatch({ type: 'OUTLOGIN' })
    this.props.history.replace('login')
  }
  render() {
    console.log(this.props.state.user.username)
    return (
      <div>
        欢迎{this.props.state.user.username}回来！
        <br />
        <button type="button" onClick={this.outLogin.bind(this)}>
          安全退出
        </button>
      </div>
    )
  }
}

export default connect(state => ({ state }))(Index)
