import { FC } from 'react';
import { Col, Alert, Heading, Text } from '@stevenr/components';
import { StyledWrap } from './style';
import { Link } from 'react-router-dom';

const MainContent: FC = () => {
  return (
    <Col lg={9}>
      <Alert color="danger">
        This is a work in progress. Expect bugs and issues.
      </Alert>
      <StyledWrap>
        <div>
          <Heading as="h4" mb="5px">
            Welcome to BitBurner-Monitor
          </Heading>
          <Text color="text3">Monitor your activities of your game.</Text>
          <Text color="text3">
            Simple <Link to="/signup">Sign Up</Link> and copy the monitor script
            to your BB instance.
          </Text>
        </div>
      </StyledWrap>
    </Col>
  );
};

export default MainContent;
