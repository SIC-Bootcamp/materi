import React from 'react'

function Form(props) {
  return (
    <div>
      <h1>Component Form</h1>
      <div>
        <input type="text" value={props.domisili} onChange={(event)=> props.setDomisili(event.target.value)}/>
      {/* <input type="text" value={domisili} onChange={(event)=> setDomisili(event.target.value)}/> */}
      </div>
    </div>
  )
}

export default Form
