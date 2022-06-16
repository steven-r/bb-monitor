import React, { FC, PropsWithChildren, } from 'react';

type IProps = {}

const ReactMarkdown: FC<PropsWithChildren<IProps>> = ({ children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default ReactMarkdown;