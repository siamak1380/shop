import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/Account.scss'
import Option from './Option'
import { Link } from 'react-router-dom'

import './styles/Account.scss'
import { userService } from '../service/user.service'
import { Redirect } from 'react-router'
import { useSelector, connect } from 'react-redux'
function Account({ isLoggedIn }) {
	const [option, setOption] = useState(0)
	const [admin, setAdmin] = useState(true)

	if (!isLoggedIn) {
		console.log('account')
		return <Redirect to='/account/login' />
	}
	return (
		<div className='account'>
			<div className='account__sideOptions'>
				<ul>
					<Link to='/' className='active'>
						<li>خانه</li>
					</Link>

					{admin ? (
						<li onClick={() => setOption(0)}>اضافه کردن کالا</li>
					) : null}
					{admin ? (
						<li onClick={() => setOption(1)}>مدیریت کاربران</li>
					) : null}
					<Link to='/checkout'>
						<li>سبد خرید</li>
					</Link>
					<li onClick={() => setOption(3)}>ویرایش حساب کاربری</li>
					<li
						onClick={() => {
							userService.logout()
							window.location.reload()
						}}>
						خروج از حساب کاربری
					</li>
				</ul>
			</div>
			<div className='account__content'>
				<Option option={option} />
			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	const { isLoggedIn } = state.auth
	return {
		isLoggedIn,
	}
}
export default connect(mapStateToProps)(Account)
