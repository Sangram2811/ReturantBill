// ImageModal.js

import React, { useState } from 'react';
import { View, Image, Modal, StyleSheet, TouchableOpacity ,Text,Pressable} from 'react-native';

const ImageModal = ({ imageUrl }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
   
      <Pressable 
onPress={openModal}
style={{ padding: 10, width: 200,  }}>
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:"#ffffff",
            borderRadius:12,
            flexDirection:'row',
            justifyContent:'space-around',

        }}>
            
                {/* Event Image */}
                <Image source={{uri:imageUrl}} style={{
                    height: "100%",
                    width: "100%",
                    borderRadius:12
                    
                }}/>

        </View>

      </Pressable>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Image source={{ uri: imageUrl }} style={styles.modalImage} />
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            {/* You can use an icon or text for the close button */}
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default ImageModal;
