import React from 'react';
import {
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');

class ImageTile extends React.PureComponent {
  render() {
    const { item, index, selected, selectImage, selectedItemNumber, renderSelectedComponent, renderExtraComponent } = this.props;
    if (!item) return null;
    return (
      <TouchableHighlight
        style={{ opacity: selected ? 0.5 : 1 }}
        underlayColor='transparent'
        onPress={() => selectImage(index)} >
        <View style={{ position: 'relative', margin: 3}}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
              style={{ width: width / 3.7, height: width / 3.7,}}
              imageStyle={{borderRadius: 4  }}
              source={{ uri: item.uri }} >
              {selected && renderSelectedComponent && renderSelectedComponent(selectedItemNumber)}
              {renderExtraComponent && renderExtraComponent(item)}
            </ImageBackground>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ImageTile;
