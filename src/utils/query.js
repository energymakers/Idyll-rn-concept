import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Text} from 'react-native';

const Query = ({children, query, id}) => {
  const {data, loading, error} = useQuery(query, {
    variables: {id: id},
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {JSON.stringify(error)}</Text>;
  return children({data});
};

export default Query;
