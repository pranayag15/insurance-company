import React from "react"
import PropTypes from "prop-types"
import { Select } from "antd"

const Option = Select.Option

const Cascader = props => {
  return (
    <div>
      <label>{props.label}</label>
      <Select
        showArrow
        allowClear
        style={props.style}
        placeholder={props.placeholder}
        optionFilterProp="children"
        onChange={props.handleChange}
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
        filterOption={props.filterOptions}
      >
        {props.optionArray ? (
          props.optionArray.map((data, index) => {
            return <Option value={data}>{data}</Option>
          })
        ) : (
          <Option value="noData" disabled>
            No Data Found
          </Option>
        )}
      </Select>
    </div>
  )
}

Cascader.defaultProps = {
  optionArrray: [],
  placeholder: "Select One",
  style: { width: "100%" }
}

export default Cascader
