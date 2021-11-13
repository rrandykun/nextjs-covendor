import React from 'react';

export interface CategoryProps {
  name: string;
  id: string;
  icon: string;
}

export default function Categories(props: CategoryProps) {
  const { name, id, icon } = props;
  return (
    <>
      <li data-toggle="collapse" data-target={`#test${id}`}>
        <span>
          <i className={`mr-1 ${icon}`} />
          <a href="/#" className="text-dark">
            {name}
          </a>
        </span>
        <ul className="collapse" id={`test${id}`}>
          <li>Mitsubishi</li>
          <li>Toyota</li>
          <li>TCM</li>
          <li>Caterpillar</li>
        </ul>
      </li>
    </>
  );
}
