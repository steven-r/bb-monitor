import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import Alert, { AlertHeading } from '../../../components/bootstrap/Alert';
import Button from '../../../components/bootstrap/Button';
import showNotification from '../../../components/extras/showNotification';
import { useFirebase } from '../../../contexts/firebaseContext';

const EmailVerificationMissing = () => {
	const { user, isAuthenticated } = useFirebase();
	const resendEmail = () => {
		if (user)
			sendEmailVerification(user)
				.then(() => {
					showNotification(
						'Send verification link',
						`We have send an email to ${user.email}`,
						'info',
					);
				})
				.catch((err) => {
					console.log(err);
					showNotification('Error sending email', err.message, 'warning');
				});
		return false;
	};
	if (!user || isAuthenticated) return <></>;
	else
		return (
			<Alert icon='Envelope' isLight color='primary' isDismissible>
				<AlertHeading tag='h2' className='h4'>
					Congratulations! 🎉
				</AlertHeading>
				<span>
					You should confirm the link in the email we've sent to you. If you do not have
					received the email, we can{' '}
					<Button href='#' onClick={resendEmail} tag='a' color='link'>
						resend
					</Button>{' '}
					it.
				</span>
			</Alert>
		);
};
export default EmailVerificationMissing;
