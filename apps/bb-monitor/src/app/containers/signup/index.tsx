import { FC } from 'react';
import loginImage from '@stevenr/shared/images/signinon.jpg';
import SignupForm from '../../components/signup-form';
import {
  StyledMedia,
  StyledMediaBody,
  StyledImage,
  StyledImgText,
  StyledSignin,
} from './style';

const AuthContainer: FC = () => {
  return (
    <StyledMedia>
      <StyledSignin>
        <SignupForm />
      </StyledSignin>
      <StyledMediaBody>
        <StyledImage>
          <img src={loginImage} alt="Login" />
        </StyledImage>
        <StyledImgText>
          <a href="https://www.freepik.com/photos/password-security">
            Password security photo created by freepik - www.freepik.com
          </a>
        </StyledImgText>
      </StyledMediaBody>
    </StyledMedia>
  );
};

export default AuthContainer;
