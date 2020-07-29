import Dialogs from "./Dialogs";
import {addMassageActionCreator, updateMassageActionCreator} from '../../redux/dialogsReducer';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage,
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
};

const DialogsRedirect = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsRedirect);

export default DialogsContainer;