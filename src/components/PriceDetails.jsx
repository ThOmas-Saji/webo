import React from 'react'

const PriceDetails = (props) => {
  return (
    <div className="flex flex-col gap-2 transition-all hover:outline outline-offset-8 outline-2 outline-[#FFC867]">{props.children}</div>
  )
}

export default PriceDetails