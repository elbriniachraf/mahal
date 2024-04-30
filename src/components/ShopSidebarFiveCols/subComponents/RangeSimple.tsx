import useGlobalContext from '@/hooks/use-context';
import React, { useState } from 'react';
import { Range } from 'react-range';

const RangeSimple: React.FC = () => {
  const { setFilterBrand, setFilterSize, setFilterRating, setFilterSearch, setFilterColor, setFilterCategory, setSelectData, setFilterRange } = useGlobalContext();
  const [values, setValues] = useState<number[]>([25, 75]); // Initial values for min and max
  const handleChangeRange = (newValues: number[]) => {
    setValues(newValues);
    setFilterRange(newValues); // Pass both values to the filter
    // Clear other filters if needed
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterSearch("");
    setFilterColor("");
    setFilterCategory("");
    setSelectData("");
  };

  return (
    <div style={{ width: '100%' }}>
      <Range
        step={1}
        min={0}
        max={100}
        values={values}
        onChange={(newValues) => handleChangeRange(newValues)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: "#ccc",
              borderRadius: '5px'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              backgroundColor: '#171717',
              borderRadius: '50%',
              zIndex: 1
            }}
          />
        )}
      />
      <div
        style={{
          height: '6px',
          borderRadius: '5px',
          backgroundColor: '#171717',
          position: 'relative',
          top: '-6px',
          width: `${values[1] - values[0]}%`,
          left: `${values[0]}%`
        }}
      />
    </div>
  );
};

export default RangeSimple;
