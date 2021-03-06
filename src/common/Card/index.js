import React from 'react';
import cn from 'classnames';

const Card = ({
  title,
  RightComponent,
  children,
  className = '',
  childrenClassName = '',
  dataTestid,
}) => (
  <div
    data-testid={dataTestid || 'card'}
    className={cn('bg-white rounded-lg shadow-lg my-10 w-full', className)}
  >
    <div
      className={cn(
        'flex justify-between items-center',
        'p-8 border-b-2 border-gray-200'
      )}
    >
      <h1
        data-testid="card-title"
        className="text-secondary-dark font-bold text-md"
      >
        {title}
      </h1>
      {RightComponent && <RightComponent />}
    </div>
    <div
      data-testid="card-children"
      className={cn('py-5 px-2', childrenClassName)}
    >
      {children}
    </div>
  </div>
);

export default Card;
