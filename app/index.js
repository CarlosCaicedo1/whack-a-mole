import { Text, View, Image, SafeAreaView, Pressable, Modal, TouchableOpacity, Button, Animated} from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/page-styles';
import Constants from '../app/Constants';
import Images from '../assets/Images';
import React from 'react';

const ModalPopup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <Animated.View style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default function Page() {
  const [visible, setVisible] = React.useState(false);
return (
<View>
  <Image style={styles.backgroundImage} resizeMode="stretch" source={Images.background} />
  <ModalPopup visible={visible}>
      <View style={{alignItems:'center'}}>
          <View style={styles.modalHeader}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Image source={Images.close} style={{height: 30, width:30}}/>
          </TouchableOpacity>
          </View>
          <View  style={{alignItems:'center'}}>
            <Image source={Images.instructions}/>
            <Text> Try to whack as many professors as you can.</Text>
          </View>
      </View>
  </ModalPopup>
  <View>
    <SafeAreaView>
      <View style={styles.mainArea}>
        <View style={styles.logoContainer}>
            <Image source={Images.logo}/>
        </View>
        <View style={styles.timPicture}>
            <Image source={Images.tim}/>
        </View>
        <View style={styles.stephenPicture}>
            <Image source={Images.stephen}/>
        </View>
        
        <View style={styles.buttonContainer}>
          <Link
              style={styles.button}
              href={{
              pathname: "/Game",
              //params: { food }
              }} asChild
              >
              <Pressable style={{marginVertical: 10}}>
              <Text style={styles.buttonText}>Start Game</Text>
              </Pressable>
          </Link>
          <Link
              style={styles.button}
              href={{ 
              }} asChild
              >
              <Pressable style={{marginVertical: 10}} onPress={() => setVisible(true)} >
              <Text style={styles.buttonText}>How to play?</Text>
              </Pressable>
          </Link>
        </View>
      </View> 
    </SafeAreaView>
  </View>
</View>
)
}