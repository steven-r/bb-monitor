import { FC, useState } from 'react';
import {
  FormGroup,
  Label,
  Input,
  Anchor,
  Button,
  Alert,
} from '@stevenr/components';
import { useForm } from 'react-hook-form';
import { hasKey } from '@stevenr/shared/methods';
import {
  StyledWrap,
  StyledTitle,
  StyledDesc,
  StyledLabelWrap,
  StyledDivider,
  StyledBottomText,
} from './style';
import { FirebaseReducer, useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AuthIsLoaded from '../auth/AuthIsLoaded/main';
import { Navigate } from 'react-router-dom';

interface IFormValues {
  email: string;
  password: string;
}

const SigninForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const [error, setError] = useState<string>();
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  const loginGithub = async () => {
    try {
          return await firebase
              .login({ provider: 'github', type: 'popup' });
      } catch (err) {
          console.log('Error during login');
          console.log(err);
          setError('We cannot log in you into github');
      }
      return;
  };
  const onSubmit = (data: IFormValues) => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .catch((err) => {
        console.log('Error during login');
        console.log(err.message);
        setError(err.message);
      });
  };
  if (user && !user.isAnonymous) return <Navigate to="/app" replace />;
  return (
    <AuthIsLoaded>
      {error && <Alert color="danger">{error}</Alert>}
      <StyledWrap>
        <StyledTitle>Sign In</StyledTitle>
        <StyledDesc>Welcome back! Please signin to continue.</StyledDesc>
        <form action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormGroup mb="20px">
            <Label display="block" mb="5px" htmlFor="email">
              Email address
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="yourname@yourmail.com"
              feedbackText={errors?.email?.message}
              state={hasKey(errors, 'email') ? 'error' : 'success'}
              showState={!!hasKey(errors, 'email')}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'invalid email address',
                },
              })}
            />
          </FormGroup>
          <FormGroup mb="20px">
            <StyledLabelWrap>
              <Label display="block" mb="5px" htmlFor="password">
                Password
              </Label>
              <Anchor path="/forgot-password" fontSize="13px">
                Forgot password?
              </Anchor>
            </StyledLabelWrap>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              feedbackText={errors?.password?.message}
              state={hasKey(errors, 'password') ? 'error' : 'success'}
              showState={!!hasKey(errors, 'password')}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Minimum length is 6',
                },
                maxLength: {
                  value: 10,
                  message: 'Minimum length is 10',
                },
              })}
            />
          </FormGroup>
          <Button type="submit" color="brand2" fullwidth>
            Sign In
          </Button>
          <StyledDivider>or</StyledDivider>
          <Button
            variant="outlined"
            color="github"
            fullwidth
            onClick={loginGithub}
          >
            Sign In With Github
          </Button>
          <StyledBottomText>
            Don&apos;t have an account?{' '}
            <Anchor path="/signup">Create an Account</Anchor>
          </StyledBottomText>
        </form>
      </StyledWrap>
    </AuthIsLoaded>
  );
};

export default SigninForm;
