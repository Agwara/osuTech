import React, {useState} from "react"
import { Route, Redirect } from "react-router-dom"

import Header from "../components/Header/Header"
import SideBar from "../components/SideBar/SideBar"
import pageStyle from "./pageStyle.module.css"

import useWindowWidth from "../hooks/useWindowWidth"

const PrivateRoute = ({
	component: Component,
	...rest
}) => {

	const [openSideBar, setOpenSideBar] = useState(false)
	const windowWidth = useWindowWidth()

	return (
		<Route {...rest} component={(props) => (
			true ? (
				<div className={pageStyle.container}>		
					<div 
						className={
							windowWidth >= 800 ? pageStyle.sidebar : 
							openSideBar === true ? pageStyle.openSideBar : pageStyle.closeSideBar}
					>
						<SideBar
							openSideBar={openSideBar}
							setOpenSideBar={setOpenSideBar} 
						/>
					</div>
					<div className={pageStyle.header}>
						<Header
							openSideBar={openSideBar}
							setOpenSideBar={setOpenSideBar}  
						/>
					</div>
					<div className={pageStyle.component}>
						<Component {...props}/>
					</div>		
				</div>
			) : (
				<Redirect to="/login" />	
			)
		)}
	/>
	)
}

export default PrivateRoute;