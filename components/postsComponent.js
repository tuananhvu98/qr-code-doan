import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import 'react-native-gesture-handler';
// import component

import {getPostsFromServer} from '../networking/Server';

const FlatListItem = ({item, handleNavigateToDetail}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleNavigateToDetail();
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#088A29',
          marginBottom: 2,
        }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          {/* console.log({ this.props.item.images_posts.formats.medium.url}); */}
          <Image
            source={{
              uri:
                'http://35.240.216.132:5555' +
                item.images_posts?.formats?.medium?.url,
            }}
            style={{
              height: 150,
              margin: 10,
              backgroundColor: 'white',
            }}
          />
          <Text style={styles.flatListItem}>{item.title_posts}</Text>
          {/* <Button style={{color: 'red'}} title=""></Button> */}
        </View>
        {/* <Text>console.log("http://35.240.216.132:5555/" + {this.props.item.images_posts.formats.medium.url})</Text> */}
      </View>
    </TouchableOpacity>
  );
};

// class FlatListItem extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props);
//     const {handleNavigateToDetail} = this.props;
//     return (
//       <View
//         onPress={() => {
//           console.log('okokokoko');
//         }}
//         style={{
//           flex: 1,
//           backgroundColor: '#088A29',
//           marginBottom: 2,
//         }}>
//         <View style={{flex: 1, flexDirection: 'column'}}>
//           {/* console.log({ this.props.item.images_posts.formats.medium.url}); */}
//           <Image
//             source={{
//               uri:
//                 'http://35.240.216.132:5555' +
//                 this.props.item.images_posts?.formats?.medium?.url,
//             }}
//             style={{
//               height: 150,
//               margin: 10,
//               backgroundColor: 'white',
//             }}
//           />
//           <Text style={styles.flatListItem}>{this.props.item.title_posts}</Text>
//           {/* <Button style={{color: 'red'}} title=""></Button> */}
//         </View>
//         {/* <Text>console.log("http://35.240.216.132:5555/" + {this.props.item.images_posts.formats.medium.url})</Text> */}
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  flatListItem: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
    padding: 5,
    fontSize: 14,
    alignItems: 'center',
  },
});

export default class TitleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsFromServer: [],
    };
  }

  componentDidMount() {
    this.refreshDataFromServer();
  }

  refreshDataFromServer = () => {
    // then() is a promise, khi co ket qua se nhay vao then()
    getPostsFromServer()
      .then((posts) => {
        this.setState({postsFromServer: posts});
      })
      .catch((error) => {
        this.state({postsFromServer: []});
      });
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        {/* <Button style={{color: 'red'}} title='click' onPress={( )=> navigation.navigate('ContentScreen') }></Button> */}
        <FlatList
          // data={flatListData}
          data={this.state.postsFromServer}
          renderItem={({item, index}) => {
            // console.log(`Item = ${JSON.stringify(item)}, index = $(index)`);
            return (
              <FlatListItem
                item={item}
                index={index}
                handleNavigateToDetail={() =>
                  navigation.navigate('ContentScreen', {item})
                }
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}></FlatList>
      </View>
    );
  }
}
