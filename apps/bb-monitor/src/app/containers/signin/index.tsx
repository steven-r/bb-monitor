import { FC } from 'react';
import loginImage from '@stevenr/shared/images/signinon.jpg';
import SigninForm from '../../components/signin-form';
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
      <StyledSignin>
        <SigninForm />
      </StyledSignin>
    </StyledMedia>
  );
};

export default AuthContainer;
