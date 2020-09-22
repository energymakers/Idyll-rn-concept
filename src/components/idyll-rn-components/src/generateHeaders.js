import React from 'react';
import {Text, StyleSheet} from 'react-native';

const generateId = (headerText = '') => {
  return headerText.toString().trim().replace(/\s+/g, '-').toLowerCase();
};

const GenerateHeaders = (props) => {
  const {
    idyll,
    hasError,
    updateProps,
    size,
    children = [],
    ...attributeProps
  } = props;

  const headerText = children.join('');
  const HeaderTag = `h${size}`;

  if (!attributeProps.id) {
    attributeProps.testId = generateId(headerText);
    attributeProps.nativeID = generateId(headerText);
  }

  return (
    <Text {...attributeProps} style={styles[HeaderTag]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
  },
  h2: {
    fontSize: 34,
  },
  h3: {
    fontSize: 28,
  },
  h4: {
    fontSize: 22,
  },
  h5: {
    fontSize: 17,
  },
  h6: {
    fontSize: 13,
  },
});

export default GenerateHeaders;
