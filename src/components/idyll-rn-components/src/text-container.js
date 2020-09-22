import React from 'react';
import {View} from 'react-native';

class TextContainer extends React.PureComponent {
  render() {
    const {
      idyll,
      children,
      className,
      hasError,
      updateProps,
      ...props
    } = this.props;
    return <View {...props}>{children}</View>;
  }
}

TextContainer._idyll = {
  name: 'TextContainer',
  tagType: 'open',
};
export default TextContainer;
