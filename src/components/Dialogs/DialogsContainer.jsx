// import React from "react";
import Dialogs from "./Dialogs";
import {addMassageActionCreator, updateMassageActionCreator} from '../../redax/dialogsReducer';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage,
		tempMassage: state.dialogsPage.tempMassage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		hendleUpdateMassage: (text) => {
			dispatch(updateMassageActionCreator(text));
		},
		hendleAddMassage: () => {
			dispatch(addMassageActionCreator());
		}
	};
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;