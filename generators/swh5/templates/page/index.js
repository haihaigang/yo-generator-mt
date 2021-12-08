'use strict'

import React from "react"
import ReactDOM from "react-dom"
import {
  default as registerServiceWorker,
  unregister,
} from "registerServiceWorker"
import ToptipsLayout from "common/toptips_layout.js"
import Actions from "./action.js"
import Store from "./store.js"
import "./index.less"

/**
 * 页面 <%= className%>
 * 
 * @author <%= username%>
 * create at <%= createAt%>
 */
class <%= className %> extends ToptipsLayout {
  constructor(props) {
    super(props)

    this.state = {
      // TODO add yourself state
    }

    this.stores = [Store]
  }
  
  /**
   * 不需要登录状态的数据获取
   */
  awaitTokenData() {}
  
  /**
   * 要求登录状态的数据获取
   */
  authData() {}

  render() {
    return null
  }
}

ReactDOM.render(<<%= className %> id="<%= styleName%>" />, document.getElementById("root"))

if (process.env.REACT_APP_SW_ENABLE) {
  registerServiceWorker()
} else {
  unregister()
}
