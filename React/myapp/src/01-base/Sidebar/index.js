import React from 'react'

export default function Sidebar(props) {
  console.log(props)
  let { bg, width, position } = props;

  var obj1 = {
    left :0
  }
  var obj2 = {
    right :0
  }
  var obj={
    background:bg,
    width:width,
    position:"fixed"
  }

  var styleobj = position==="left"?{...obj,...obj1}:{...obj,...obj2}
  return (
    <div style={styleobj}>
      <ul>
        <li>1</li>
        <li>22</li>
        <li>3</li>
      </ul>
    </div>
  )
}


