import Dialogs from "./Dialogs"
import {addMassage} from '../../redux/dialogsReducer'
import {connect} from "react-redux"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage,
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {addMassage})
)(Dialogs)
