import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Grid, Row, Col} from 'react-native-easy-grid';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const avenger1 = require('../src/static/avenger/wanda.jpg');
const avenger2 = require('../src/static/avenger/yasuo.jpg');
const avenger3 = require('../src/static/avenger/captain.jpg');
const avenger4 = require('../src/static/avenger/flash.jpg');
const avenger5 = require('../src/static/avenger/ironman.jpeg');
const avenger6 = require('../src/static/avenger/spiderman.jpeg');
const avenger7 = require('../src/static/avenger/strange.jpg');
const avenger8 = require('../src/static/avenger/suppergirl.jpg');
const avenger9 = require('../src/static/avenger/blackwidow.jpeg');
const avenger10 = require('../src/static/avenger/wonderwoman.jpg');

export default class Zalo extends Component {
  userList = [
    {name: 'wanda', avatar: avenger1},
    {name: 'yasuo', avatar: avenger2},
    {name: 'captain', avatar: avenger3},
    {name: 'flash', avatar: avenger4},
    {name: 'tony', avatar: avenger5},
    {name: 'spiderman', avatar: avenger6},
    {name: 'strange', avatar: avenger7},
    {name: 'suppergirl', avatar: avenger8},
    {name: 'blackwidow', avatar: avenger9},
    {name: 'wonderwoman', avatar: avenger10},
  ];
  userSuggestions = [
    {name: 'strange', avatar: avenger7, friend: 15},
    {name: 'wanda', avatar: avenger1, friend: 10},
    {name: 'wonderwoman', avatar: avenger10, friend: 14},
    {name: 'blackwidow', avatar: avenger9, friend: 12},
    {name: 'spiderman', avatar: avenger6, friend: 8},
    {name: 'tony', avatar: avenger5, friend: 20},
    {name: 'suppergirl', avatar: avenger8, friend: 43},
    {name: 'flash', avatar: avenger4, friend: 54},
    {name: 'yasuo', avatar: avenger2, friend: 11},
    {name: 'captain', avatar: avenger3, friend: 10},
  ];
  renderSearchItem = () => {
    return this.userList.map((user, index) => {
      return (
        <Col style={styles.searchItem} key={index}>
          <Image source={user.avatar} style={styles.searchItemImg} />
          <Text style={styles.searchItemText}>{user.name}</Text>
        </Col>
      );
    });
  };

  renderSuggestionItem = () => {
    return this.userSuggestions.map((item, index) => {
      return (
        <Col style={styles.suggestionItem} key={index}>
          <View style={styles.suggestionItemInfo}>
            <Image source={item.avatar} style={styles.suggestionItemImg} />
            <View>
              <Text style={styles.searchItemText}>{item.name}</Text>
              <Text>{item.friend} bạn chung</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.suggestionItemBtn}>
              <Text style={styles.suggestionItemBtnText}>Kết bạn</Text>
            </View>
          </TouchableOpacity>
        </Col>
      );
    });
  };
  render() {
    return (
      <Grid style={styles.container}>
        <Row size={1} style={styles.wrapSearchText}>
          <Text style={styles.searchText}>
            <Icon name="history" size={15} />
            Danh sách tìm kiếm gần đây
          </Text>
        </Row>
        <Row size={2} style={styles.wrapSearchItem}>
          <ScrollView horizontal={true}>{this.renderSearchItem()}</ScrollView>
        </Row>
        <Row size={1} style={styles.wrapSuggestionText}>
          <Text style={styles.suggestionText}>
            <Icon name="users" size={15} />
            Gợi ý kết bạn
          </Text>
        </Row>
        <Row size={8} style={styles.wrapSuggestionItem}>
          <ScrollView>{this.renderSuggestionItem()}</ScrollView>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '1%',
    backgroundColor: 'white',
  },
  wrapSearchText: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  searchText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapSearchItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchItem: {
    alignItems: 'center',
    marginLeft: 20,
  },
  searchItemImg: {
    width: widthDevice / 6,
    height: widthDevice / 6,
    borderRadius: widthDevice / 6,
  },
  searchItemText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  wrapSuggestionText: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  suggestionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapSuggestionItem: {
    paddingBottom: '5%',
    backgroundColor: '#eee',
    flexDirection: 'column',
  },
  suggestionItem: {
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    padding: 10,
    maxWidth: widthDevice,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  suggestionItemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '45%',
  },
  suggestionItemImg: {
    width: widthDevice / 6,
    height: widthDevice / 6,
    borderRadius: widthDevice / 6,
  },
  suggestionItemBtn: {
    backgroundColor: '#6666FF',
    borderRadius: 20,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
  },
  suggestionItemBtnText: {
    fontSize: 15,
    color: 'white',
  },
});
