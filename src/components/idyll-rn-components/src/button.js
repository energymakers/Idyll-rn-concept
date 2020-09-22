import React from 'react';
import {Button as RNButton} from 'react-native';

class Button extends React.PureComponent {
  render() {
    const {onClick, idyll, hasError, updateProps, ...props} = this.props;
    return (
      <RNButton
        {...props}
        onPress={onClick.bind(this)}
        title={this.props.children[0]}
      />
    );
  }
}

Button.defaultProps = {
  onClick: function () {},
};

Button._idyll = {
  name: 'Button',
  tagType: 'open',
  children: ['Click Me.'],
  props: [
    {
      name: 'onClick',
      type: 'event',
      example: '`x += 1`',
      description: 'An event that is fired when the user clicks the button.',
    },
  ],
};
export default Button;
