/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export interface CategoryProps {
  name: string;
  id: string;
  icon: string;
}

export default function Categories(props: CategoryProps) {
  const { name, id, icon } = props;
  const [levelList, setLevelList] = useState([] as any[]);
  useEffect(() => {
    (async () => {
      await axios
        .get('https://api.co-vendor.com/categories')
        .then((response) => {
          // console.log('data: ', response.data);
          setLevelList(response.data.filter((lvl: any) => lvl.level === 1));
          // console.log(level);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

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
          {levelList.filter((item: any) => item.parent === id).map((item) => (
            <li>{item.category_name}</li>
          ))}
        </ul>
      </li>
    </>
  );
}
