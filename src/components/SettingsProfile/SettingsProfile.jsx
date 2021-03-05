import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Button, Checkbox } from 'antd'
import { Formik } from 'formik'
import { CustomInput } from '../common/CustomInput/CustomInput'
import { getProfileUser, savePhoto } from '../../redux/profileReducer'
import Preloader from '../common/Preloader/Preloader'
import avatar from '../../assets/img/avatar.png'
import './SettingsProfile.sass'
import { clearedProfileNotifications, sendProfileSettings } from '../../redux/settingsProfile/actionCreators';

const SettingsProfile = () => {
	const dispatch = useDispatch()
	const authId = useSelector(({ auth }) => auth.id)
	const profile = useSelector(({ profilePage }) => profilePage.profile)
	const isSending = useSelector(({ settingsProfile }) => settingsProfile.isSending)
	const errors = useSelector(({ settingsProfile }) => settingsProfile.errors)
	const isSentCompleted = useSelector(({ settingsProfile }) => settingsProfile.isSentCompleted)

	useEffect(() => {
		if (authId !== profile?.userId) {
			dispatch(getProfileUser(authId))
		}

		return () => dispatch(clearedProfileNotifications())

		// eslint-disable-next-line
	}, [])


	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			dispatch(savePhoto(e.target.files[0]))
		}
	}

	const handleOnSubmit = (data) => {
		dispatch(sendProfileSettings(data))
	}


	return (
		<>
			{authId !== profile?.userId
				? <Preloader/>
				: <div className="profileSettingsWrapper">
					<h2>Profile Settings</h2>
					<div className="formPhotoWrapper">
						<div className="form">
							<Formik initialValues={{ ...profile }} onSubmit={handleOnSubmit}>
								{({ handleSubmit, values, handleChange }) => {
									return (
										<>
											<form onSubmit={handleSubmit}>
												<h3>General settings</h3>
												<CustomInput
													label="Full Name"
													onChange={handleChange}
													value={values.fullName}
													name="fullName"
												/>

												<Checkbox
													onChange={handleChange}
													name="lookingForAJob"
													checked={values.lookingForAJob}>Looking For A Job
												</Checkbox><br/><br/>

												<CustomInput
													label="Looking For A Job Description"
													type="textarea"
													onChange={handleChange}
													value={values.lookingForAJobDescription}
													name="lookingForAJobDescription"
												/>

												<CustomInput
													label="About Me"
													type="textarea"
													onChange={handleChange}
													value={values.aboutMe}
													name="aboutMe"
												/>

												<h3>Contacts Settings</h3>

												{Object.keys(profile?.contacts).map((k, i) => {
													return (
														<CustomInput
															key={i}
															label={k.charAt(0).toUpperCase() + k.slice(1)}
															onChange={handleChange}
															value={values.contacts[k]}
															name={`contacts.${k}`}
														/>
													)
												})}
												<Button htmlType="submit" type="primary" loading={isSending}>Save changes</Button>
											</form>
										</>
									)
								}}
							</Formik>
						</div>
						<div className="changePhotoWrapper">
							<h3>Avatar Settings</h3>
							<img src={profile.photos.large || avatar} alt="Avatar"/>
							<input type="file" onChange={onMainPhotoSelected}/>
						</div>
					</div>
					<div className="errorsWrapper">
						{errors && errors.map(i => <Alert className="error" message={i} type="error" showIcon closable/>)}
						{isSentCompleted &&
						<Alert className="error" message="All settings saved" type="success" showIcon closable/>
						}
					</div>
				</div>
			}
		</>
	)
}


export default SettingsProfile
