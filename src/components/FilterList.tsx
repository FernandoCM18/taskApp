import { useState } from 'react';
import { Filter } from './';
import { WrapperFlex } from '../styles';

export const FilterList = () => {

  const [activeFilter, setActiveFilter] = useState(0);

  const handleFilterClick = (index: number) => {
    setActiveFilter(index);
  };

  const filters = [
    { name: 'To Do' },
    { name: 'In Progress' },
    { name: 'Completed' },
  ];

  return (
    <WrapperFlex>
      {
        filters.map((filter, index) => (
          <Filter 
            key={index} 
            name={filter.name} 
            active={activeFilter === index}
            onClick={() => handleFilterClick(index)}
          />
        ))
      }
    </WrapperFlex>
  );
};
