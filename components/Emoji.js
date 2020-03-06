import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const angry = require('../src/static/jmages/e1.png');
const satisfy = require('../src/static/jmages/e2.png');
const happy = require('../src/static/jmages/e3.png');
const disaappointed = require('../src/static/jmages/e4.png');
const asleep = require('../src/static/jmages/e5.png');

export default class Emoji extends Component {
  state = {
    src: angry,
  };
  changeIcon = icon => {
    this.setState({
      src: icon,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrap}>
          <Text style={styles.text}>Bạn đang cảm thấy ?</Text>
        </View>
        <View style={styles.bigImageWrap}>
          <Image source={this.state.src} />
        </View>
        <View style={styles.smallImageContainer}>
          <View style={styles.smallImageWrap}>
            <TouchableOpacity onPress={() => this.changeIcon(angry)}>
              <Image source={angry} style={styles.smallImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeIcon(satisfy)}>
              <Image source={satisfy} style={styles.smallImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeIcon(happy)}>
              <Image source={happy} style={styles.smallImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeIcon(disaappointed)}>
              <Image source={disaappointed} style={styles.smallImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeIcon(asleep)}>
              <Image source={asleep} style={styles.smallImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrap: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bigImageWrap: {
    flex: 0.4,
    alignItems: 'center',
  },
  smallImageContainer: {
    flex: 0.4,
    alignItems: 'center',
  },
  smallImageWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallImage: {
    width: 60,
    height: 60,
  },
});
