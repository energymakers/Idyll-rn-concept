import React from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './appolloClient';
import {Navigation} from 'react-native-navigation';

const apolloProviderWrapper = (WrappedComponent, client) => {
  const OutputComponent = (props) => {
    return (
      <ApolloProvider client={client}>
        <WrappedComponent {...props} />
      </ApolloProvider>
    );
  };
  return OutputComponent;
};

const registerComponent = (screenName, component) => {
  Navigation.registerComponent(screenName, () =>
    apolloProviderWrapper(component, client),
  );
};

export default registerComponent;
