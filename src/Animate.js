import React from 'react'
import Anime from 'react-anime'

const Animate = props => (
  <div>
    <Anime delay={ (e, i) => i * 1000 } width={ [ '0%', '100%', ] } duration={ 1500 }>
      <div className="blue" style={ { background: 'dodgerblue', } }>
        Blue
      </div>
      <div className="green" style={ { background: 'springgreen', } }>
        Green
      </div>
      <div className="red" style={ { background: 'tomato', } }>
        Red
      </div>
    </Anime>
  </div>
)

export default Animate
