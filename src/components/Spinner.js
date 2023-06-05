// import PropTypes from 'prop-types'
import React  from 'react'
// import loading from './loading.gif'
const Spinner=()=>  {
 //static propTypes = {}

    return (
      <div className="text-center" >
          <div className="spinner-border text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
      </div>
    )
  
}

export default Spinner