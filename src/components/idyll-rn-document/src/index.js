import React from 'react';
import {Text, View} from 'react-native';
import Runtime from './runtime';
import compile from 'idyll-compiler';

const defaultAST = {
  id: 0,
  type: 'component',
  name: 'root',
};

export const hashCode = (str) => {
  var hash = 0,
    i,
    chr;
  if (str.length === 0) {
    return hash;
  }
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

class IdyllDocument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ast: props.ast || defaultAST,
      previousAST: props.ast || defaultAST,
      hash: props.ast ? JSON.stringify(props.ast) : '',
      error: null,
    };
  }

  createStyleNode(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
    return node;
  }

  componentDidMount() {
    if (!this.props.ast && this.props.markup) {
      compile(this.props.markup, this.props.compilerOptions).then((ast) => {
        this.setState({ast, hash: hashCode(this.props.markup), error: null});
      });
    }
  }

  componentDidCatch(error, info) {
    this.props.onError && this.props.onError(error);
    this.setState({error: error.message});
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.ast) {
      this.setState({hash: JSON.stringify(newProps.ast)});
      return;
    }

    const hash = hashCode(newProps.markup);
    if (hash !== this.state.hash) {
      this.setState({previousAST: this.state.ast});
      compile(newProps.markup, newProps.compilerOptions)
        .then((ast) => {
          this.setState({previousAST: ast, ast, hash, error: null});
        })
        .catch(this.componentDidCatch.bind(this));
    }
  }

  getErrorComponent() {
    if (!this.state.error) {
      return null;
    }
    return <Text>{this.state.error}</Text>;
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <Runtime
          {...this.props}
          key={this.state.hash}
          context={(context) => {
            this.idyllContext = context;
            typeof this.props.context === 'function' &&
              this.props.context(context);
          }}
          initialState={
            this.props.initialState ||
            (this.idyllContext ? this.idyllContext.data() : {})
          }
          ast={this.props.ast || this.state.ast}
        />
        {this.getErrorComponent()}
      </View>
    );
  }
}

export default IdyllDocument;
