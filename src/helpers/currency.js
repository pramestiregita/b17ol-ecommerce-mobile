import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';

export default function currency({value}) {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'Rp'}
      renderText={(formattedValue) => <Text>{formattedValue}</Text>} // <--- Don't forget this!
    />
  );
}
