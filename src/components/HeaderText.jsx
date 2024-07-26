import React from "react"

const HeaderText = ({ children }) => {
  return (
    <>
      <span className="font-bold leading-none text-2xl mr-3 inline-block align-text-bottom whitespace-nowrap ">
        {children}
      </span>
    </>
  )
}

export default HeaderText
