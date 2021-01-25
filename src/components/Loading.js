import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store, addTodoAction, toggleLoading } from "./../Redux";

const Loading = () => {
	const isLoading = useSelector((state) => state.loading);
	const loading_time = useSelector(state => state.loading_time);
	const dispatch = useDispatch();
	useEffect(() => {
		setTimeout(() => {
			dispatch(toggleLoading(false))
		}, loading_time);
	}, []);
	return (
		<div className={isLoading ? 'loading' : 'loading dissapear'}>
			<div className="circle"></div>
		</div>
	)
}

export default Loading;