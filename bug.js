```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 10000 }, (_, i) => i);

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 40,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 2,
  },
});

export default MyComponent; 
```