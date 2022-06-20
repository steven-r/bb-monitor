import { FC } from 'react';
import { SpaceProps } from '@stevenr/shared';
import Breadcrumb from '../breadcrumb';
import SearchForm from '../search-form';
import { StyledWrap } from './style';

interface IProps extends SpaceProps {
  /**
   * Pass previous page's text and link
   */
  prev: Array<{
    text: string;
    link: string;
  }>;
  /**
   * Write page's title
   */
  title: string;
  /**
   * Write page's welcome text
   */
  wcText?: string;
  /**
   * Put Extra classes
   */
  className?: string;
  /** display search form  */
  haveSearch?: boolean;
}

const PageHeader: FC<IProps> = ({
  prev,
  title,
  wcText,
  className,
  haveSearch,
  ...rest
}) => {
  return (
    <StyledWrap className={className} {...rest}>
      <div>
        <Breadcrumb prev={prev} title={title} wcText={wcText} />
      </div>
      {haveSearch && <SearchForm />}
    </StyledWrap>
  );
};

export default PageHeader;
