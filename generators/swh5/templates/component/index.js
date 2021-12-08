import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import "./index.less"

/**
 * <%= className%>
 * 
 * @author <%= username%>
 * @param 
 * @example
 * <<%= className%>
 * />
 */
const <%= className%> = { className } => {
  return (
    <div className={cn("<%= styleName%>", { className })}></div>
  )
}

<%= className%>.defaultProps = {}
<%= className%>.propTypes = {
  /**
   * 组件样式名称
   */
   className: PropTypes.string
}

export default <%= className%>
