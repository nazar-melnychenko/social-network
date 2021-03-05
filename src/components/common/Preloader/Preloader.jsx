import React from 'react'
import './Preloader.sass'
import spinner from '../../../assets/img/spinner.gif'

let Preloader = () => {
	return (
		<div className="preloader">
			<img src={spinner} alt="spinner"/>
		</div>
	)
}

export default Preloader
