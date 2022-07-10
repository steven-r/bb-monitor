import React, { FC, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	sendEmailVerification,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as Yup from 'yup';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import Logo from '../../../components/Logo';
import useDarkMode from '../../../hooks/useDarkMode';
import showNotification from '../../../components/extras/showNotification';
import { Formik, FormikHelpers } from 'formik';
import { useFirebaseAuth } from '../../../contexts/firebaseContext';

interface ILoginHeaderProps {
	isNewUser?: boolean;
}
const LoginHeader: FC<ILoginHeaderProps> = ({ isNewUser }) => {
	if (isNewUser) {
		return (
			<>
				<div className='text-center h1 fw-bold mt-5'>Create Account,</div>
				<div className='text-center h4 text-muted mb-5'>Sign up to get started!</div>
			</>
		);
	}
	return (
		<>
			<div className='text-center h1 fw-bold mt-5'>Welcome,</div>
			<div className='text-center h4 text-muted mb-5'>Sign in to continue!</div>
		</>
	);
};

type SubmitValues = {
	signupemail: string;
	signupfirstname: string;
	signupSurname: string;
	signupPassword: string;
	signupRepeatpassword: string;
};

type LoginValues = {
	loginemail: string;
	loginpassword: string;
};

type ILoginFormsProps = {
	isNewLogin: boolean;
};

const LoginForms: FC<ILoginFormsProps> = ({ isNewLogin }) => {
	const [usernameInput, setUsernameInput] = useState<boolean>(false);

	const auth = useFirebaseAuth();
	const navigate = useNavigate();

	const submitSignup = (values: SubmitValues, actions: FormikHelpers<SubmitValues>) => {
		return createUserWithEmailAndPassword(auth, values.signupemail, values.signupPassword)
			.then((cred) => {
				updateProfile(cred.user, {
					displayName: values.signupfirstname + ' ' + values.signupSurname,
				}).then(() => {
					sendEmailVerification(cred.user).then(() => {
						showNotification('', 'Please approce the link', 'info');
						navigate('/');
					});
				});
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				actions.setSubmitting(false);
			});
	};

	const submitLogin = (values: LoginValues, actions: FormikHelpers<LoginValues>) => {
		signInWithEmailAndPassword(auth, values.loginemail, values.loginpassword)
			.then((cred) => {
				showNotification('', 'Welcome Back', 'success');
				navigate('/');
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				actions.setSubmitting(false);
			});
	};

	const signInValidationSchema = Yup.object({
		loginemail: Yup.string().email().required(),
		loginpassword: Yup.string().min(8),
	});

	const signUpValidationSchema = Yup.object({
		signupemail: Yup.string().email().required(),
		signupfirstname: Yup.string().required(),
		signupSurname: Yup.string().required(),
		signupPassword: Yup.string().min(8),
		signupRepeatpassword: Yup.string().oneOf(
			[Yup.ref('signupPassword'), null],
			'Passwords must match',
		),
	});
	if (isNewLogin)
		return (
			<Formik<SubmitValues>
				initialValues={{
					signupemail: '',
					signupfirstname: '',
					signupPassword: '',
					signupRepeatpassword: '',
					signupSurname: '',
				}}
				validationSchema={signUpValidationSchema}
				onSubmit={submitSignup}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<form className='row g-4'>
						<div className='col-12'>
							<FormGroup id='signupemail' isFloating label='Your email'>
								<Input
									type='email'
									onBlur={handleBlur}
									onChange={handleChange}
									autoComplete='email'
									value={values.signupemail}
									isTouched={touched.signupemail}
									isValid={errors.signupemail === undefined}
									invalidfeedback={errors.signupemail}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='signupfirstname' isFloating label='Your first-name'>
								<Input
									autoComplete='given-name'
									placeholder='Jon'
									value={values.signupfirstname}
									onBlur={handleBlur}
									onChange={handleChange}
									isTouched={touched.signupfirstname}
									isValid={errors.signupfirstname === undefined}
									invalidfeedback={errors.signupfirstname}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='signupSurname' isFloating label='Your Sur-name'>
								<Input
									autoComplete='sur-name'
									placeholder='Doe'
									value={values.signupSurname}
									onBlur={handleBlur}
									onChange={handleChange}
									isTouched={touched.signupSurname}
									isValid={errors.signupSurname === undefined}
									invalidfeedback={errors.signupSurname}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='signupPassword' isFloating label='Password'>
								<Input
									type='password'
									autoComplete='password'
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.signupPassword}
									isTouched={touched.signupPassword}
									isValid={errors.signupPassword === undefined}
									invalidfeedback={errors.signupPassword}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='signupRepeatpassword' isFloating label='Repeat Password'>
								<Input
									type='password'
									autoComplete='repeat-password'
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.signupRepeatpassword}
									isTouched={touched.signupRepeatpassword}
									isValid={errors.signupRepeatpassword === undefined}
									invalidfeedback={errors.signupRepeatpassword}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<Button
								color='info'
								className='w-100 py-3'
								onClick={handleSubmit}
								isDisable={isSubmitting}>
								Sign Up
							</Button>
						</div>
					</form>
				)}
			</Formik>
		);
	else
		return (
			<Formik<LoginValues>
				initialValues={{ loginemail: '', loginpassword: '' }}
				onSubmit={submitLogin}
				validationSchema={signInValidationSchema}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<form className='row g-4'>
						<div className='col-12'>
							{!usernameInput ? (
								<FormGroup id='loginemail' isFloating label='Your email'>
									<Input
										autoComplete='username'
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.loginemail}
										isTouched={touched.loginemail}
										isValid={errors.loginemail === undefined}
										invalidfeedback={errors.loginemail}
									/>
								</FormGroup>
							) : (
								<FormGroup id='loginpassword' isFloating label='Password'>
									<Input
										type='password'
										autoComplete='password'
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.loginpassword}
										isTouched={touched.loginpassword}
										isValid={errors.loginpassword === undefined}
										invalidfeedback={errors.loginpassword}
									/>
								</FormGroup>
							)}
						</div>
						<div className='col-12'>
							{!usernameInput ? (
								<Button
									color='warning'
									className='w-100 py-3'
									onClick={() => setUsernameInput(true)}>
									Continue
								</Button>
							) : (
								<Button
									color='warning'
									className='w-100 py-3'
									onClick={handleSubmit}
									isDisable={isSubmitting}>
									Login
								</Button>
							)}
						</div>
					</form>
				)}
			</Formik>
		);
};
interface ILoginProps {
	isSignUp?: boolean;
}
const Login: FC<ILoginProps> = ({ isSignUp }) => {
	const { darkModeStatus } = useDarkMode();

	const [isNewUser, setIsNewUser] = useState<boolean | undefined>(isSignUp);
	const [errorString, setError] = useState<string>();

	const navigate = useNavigate();
	const handleOnClick = useCallback(() => navigate('/'), [navigate]);
	const googleProvider = new GoogleAuthProvider();
	const handleGoogleLogin = () => {
		const auth = getAuth();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				//const credential = GoogleAuthProvider.credentialFromResult(result);
				//const token = credential?.accessToken;
				// The signed-in user info.
				//const user = result.user;
				navigate('/'); // go to home/app page
			})
			.catch((error) => {
				console.log(error);
				// Handle Errors here.
				//const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				//const email = error.customData.email;
				// The AuthCredential type that was used.
				//const credential = GoogleAuthProvider.credentialFromError(error);
				setError(errorMessage);
			});
	};

	if (errorString && errorString.length > 0) {
		showNotification('Login problem', errorString, 'danger');
	}

	return (
		<PageWrapper
			title={isNewUser ? 'Sign Up' : 'Login'}
			className={classNames({ 'bg-warning': !isNewUser, 'bg-info': !!isNewUser })}>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center my-5'>
									<Link
										to='/'
										className={classNames(
											'text-decoration-none  fw-bold display-2',
											{
												'text-dark': !darkModeStatus,
												'text-light': darkModeStatus,
											},
										)}>
										<Logo width={200} />
									</Link>
								</div>
								<div
									className={classNames('rounded-3', {
										'bg-l10-dark': !darkModeStatus,
										'bg-lo10-dark': darkModeStatus,
									})}>
									<div className='row row-cols-2 g-3 pb-3 px-3 mt-0'>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={!!isNewUser}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setIsNewUser(!isNewUser);
												}}>
												Login
											</Button>
										</div>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={!isNewUser}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setIsNewUser(!isNewUser);
												}}>
												Sign Up
											</Button>
										</div>
									</div>
								</div>

								<LoginHeader isNewUser={isNewUser} />
								<LoginForms isNewLogin={isNewUser ?? false} />
								{/* BEGIN :: Social Login */}
								<div className='col-12 mt-3 text-center text-muted'>OR</div>
								<div className='col-12 mt-3'>
									<Button
										isOutline
										color={darkModeStatus ? 'light' : 'dark'}
										className={classNames('w-100 py-3', {
											'border-light': !darkModeStatus,
											'border-dark': darkModeStatus,
										})}
										icon='CustomApple'
										onClick={handleOnClick}>
										Sign in with Apple
									</Button>
								</div>
								<div className='col-12'>
									<Button
										isOutline
										color={darkModeStatus ? 'light' : 'dark'}
										className={classNames('w-100 py-3', {
											'border-light': !darkModeStatus,
											'border-dark': darkModeStatus,
										})}
										icon='CustomGoogle'
										onClick={handleGoogleLogin}>
										Continue with Google
									</Button>
								</div>
								{/* END :: Social Login */}
							</CardBody>
						</Card>
						<div className='text-center'>
							<a
								href='/'
								className={classNames('text-decoration-none me-3', {
									'link-light': isNewUser,
									'link-dark': !isNewUser,
								})}>
								Terms of use
							</a>
							<Link
								to='/privacy-policy'
								className={classNames('text-decoration-none', {
									'link-light': isNewUser,
									'link-dark': !isNewUser,
								})}>
								Privacy policy
							</Link>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

Login.propTypes = {
	isSignUp: PropTypes.bool,
};
Login.defaultProps = {
	isSignUp: false,
};

export default Login;
