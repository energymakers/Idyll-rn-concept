import React from 'react';
import {View} from 'react-native';

export const generatePlaceholder = (name) => {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);
      console.warn(`Warning: attempting to use component named ${name}, but it wasn't found`);
    }

    render() {
      const { idyll, updateProps, hasError, ...props } = this.props;
      return <View {...props} />;
    }
  }
}
