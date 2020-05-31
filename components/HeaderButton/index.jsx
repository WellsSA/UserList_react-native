import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton as OriginalHeaderButton } from 'react-navigation-header-buttons';
import colors from '../../styles/colors';

const HeaderButton = props => {
  return (
    <OriginalHeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? colors.text : colors.primary}
    />
  );
};

export default HeaderButton;
