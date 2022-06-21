import React from 'react';
import { Media, MediaBody } from '@stevenr/components';
import Layout from '../layouts';
import Content from '../layouts/content';
import LeftSidebar from '../containers/profile-view/left-sidebar';
import MainContent from '../containers/profile-view/main';
import RightSidebar from '../containers/profile-view/right-sidebar';
import SEO from '../components/seo';
import { useFirebase } from 'react-redux-firebase';
import AuthIsLoaded from '../components/auth/AuthIsLoaded/main';

const ProfileView: React.FC = () => {
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;

  return (
    <AuthIsLoaded>
      <Layout>
        <SEO />
        <Content p={[null, null, null, '40px 0']}>
          <Media display={['block', null, null, 'flex']}>
            <LeftSidebar user={user!} />
            <MediaBody
              mt={['40px', null, null, 0]}
              px={[null, null, null, '10px']}
            >
              <MainContent />
            </MediaBody>
            <RightSidebar />
          </Media>
        </Content>
      </Layout>
    </AuthIsLoaded>
  );
};

export default ProfileView;
