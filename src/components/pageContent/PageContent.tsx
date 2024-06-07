import React from 'react';

import PageContentClasses from './PageContent.module.scss';

type Props = {
  children:  React.ReactNode;
  heading: string;
}

const PageContent = ({children, heading}: Props) => {
  return (
    <div className={PageContentClasses['page-content']}>
      <h3 className={PageContentClasses['page-content__heading']}>
        {heading}
      </h3>
      <main>
        {children}
      </main>
    </div>
  )
}

export default PageContent