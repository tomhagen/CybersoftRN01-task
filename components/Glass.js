import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const model = require('../src/static/jmages/model.jpg');
const glass01 = require('../src/static/jmages/g1.png');
const glass02 = require('../src/static/jmages/g2.png');
const glass03 = require('../src/static/jmages/g3.png');
const glass04 = require('../src/static/jmages/g4.png');
const glass05 = require('../src/static/jmages/g5.png');
const glass06 = require('../src/static/jmages/g6.png');
const glass07 = require('../src/static/jmages/g7.png');
const glass08 = require('../src/static/jmages/g8.png');
const glass09 = require('../src/static/jmages/g9.png');

export default class Glass extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: 'GUCCI G8850U',
      url: glass01,
      desc:
        'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. ',
    },
    {
      id: 2,
      price: 50,
      name: 'GUCCI G8759H',
      url: glass02,
      desc: 'Light pink square lenses define these sungct tip. ',
    },
    {
      id: 3,
      price: 30,
      name: 'DIOR D6700HQ',
      url: glass03,
      desc: 'these sunglasses,ending with amother of pearl effect tip. ',
    },
    {
      id: 4,
      price: 30,
      name: 'DIOR D6005U',
      url: glass04,
      desc:
        'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. ',
    },
    {
      id: 5,
      price: 30,
      name: 'PRADA P8750',
      url: glass05,
      desc:
        'Light pink square lenses define these sunglasses,ending with amother of ',
    },
    {
      id: 6,
      price: 30,
      name: 'PRADA P9700',
      url: glass06,
      desc:
        'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. ',
    },
    {
      id: 7,
      price: 30,
      name: 'FENDI F8750',
      url: glass07,
      desc:
        'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. ',
    },
    {
      id: 8,
      price: 30,
      name: 'FENDI F8500',
      url: glass08,
      desc:
        'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. ',
    },
    {
      id: 9,
      price: 30,
      name: 'FENDI F4300',
      url: glass09,
      desc:
        'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. ',
    },
  ];

  state = {
    src: glass01,
    name: 'GUCCI G8850U',
    price: 30,
    desc:
      'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. ',
  };

  changeGlass = item => {
    this.setState({
      src: item.url,
      name: item.name,
      price: item.price,
      desc: item.desc,
    });
  };

  renderGlass = () => {
    return this.arrProduct.map((item, index) => {
      return (
        <TouchableOpacity onPress={() => this.changeGlass(item)} key={index}>
          <Image source={item.url} style={styles.itemImg} resizeMode="cover" />
        </TouchableOpacity>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.topWrap}
          source={model}
          style={{height: height / 2, width: width}}
          resizeMode="stretch">
          <View style={styles.overlay}>
            <View style={styles.overlayWrapText}>
              <View style={styles.wrapTextTitle}>
                <Text style={styles.textTitle}>{this.state.name}</Text>
              </View>
              <View style={styles.wrapTextPrice}>
                <Text style={styles.textPrice}>${this.state.price}</Text>
              </View>
              <View style={styles.wrapTextDescription}>
                <Text style={styles.textDescription}>{this.state.desc}</Text>
              </View>
            </View>
          </View>

          <View style={styles.wrapGlass}>
            <Image source={this.state.src} style={styles.glassImg} />
          </View>
        </ImageBackground>

        <View style={styles.bottomWrap}>{this.renderGlass()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
  topWrap: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#000',
    opacity: 0.5,
    zIndex: 4,
  },
  wrapGlass: {
    position: 'absolute',
    top: 50,
    right: 90,
  },
  glassImg: {
    width: width / 1.8,
    height: 100,
  },
  overlayWrapText: {
    zIndex: 10,
    position: 'relative',
    paddingLeft: 20,
  },
  wrapTextTitle: {
    marginTop: 10,
  },
  textTitle: {
    fontSize: 25,
    color: 'green',
  },
  wrapTextPrice: {
    marginTop: 5,
  },
  textPrice: {
    fontSize: 25,
    color: 'pink',
  },
  wrapTextDescription: {
    marginTop: 5,
  },
  textDescription: {
    fontSize: 16,
    color: 'white',
  },
  bottomWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    padding: 20,
  },
  itemImg: {
    width: width / 4,
    height: 40,
    margin: 10,
  },
});
