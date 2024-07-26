import React from "react"

const HeaderText = ({ children }) => {
  return (
    <>
      <span className="font-bold leading-8 text-2xl  inline-block align-text-bottom text-center">
        {children}
      </span>
    </>
  )
}

export default HeaderText
