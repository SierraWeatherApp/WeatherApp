import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

const data = [
  { key: 'item1', label: 'Item 1' },
  { key: 'item2', label: 'Item 2' },
  { key: 'item3', label: 'Item 3' },
  { key: 'item4', label: 'Item 4' },
  { key: 'item5', label: 'Item 5' },
];

const DragAndDropList = () => {
  const [listData, setListData] = useState(data);

  const renderItem = ({ item, drag }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          padding: 16,
          borderRadius: 8,
          marginBottom: 8,
        }}
        onLongPress={drag}
      >
        <Text>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const onDragEnd = ({ data }) => {
    setListData(data);
  };

  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerRootView>
      <DraggableFlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onDragEnd={onDragEnd}
      />
      </GestureHandlerRootView>
    </View>
  );
};

export default DragAndDropList;