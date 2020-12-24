import React, {useState} from 'react';

import 'react-native-gesture-handler';

import {Image, Text, View, StyleSheet} from 'react-native';
import {useEffect} from 'react';
import {getStudentsFromServer} from '../networking/Server';

const StudentComponent = ({route, navigation}) => {
  const {barcode} = route.params;
  const newBarcode = barcode.trim().replace(' ', '');
  const [info, setInfo] = useState({
    codeStudent: '',
    nameStudent: '',
    birthdayStudent: '',
    genderStudent: '',
    hometownStudent: '',
    class: '',
    faculty: '',
    avatarStudent:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png',
  });

  useEffect(() => {
    const fetchData = async () => {
      const students = await getStudentsFromServer(newBarcode);
      const data = students[0];
      setInfo({
        codeStudent: data.code_student,
        nameStudent: data.name_student,
        birthdayStudent: data.birthday_student,
        class: data.class.code_class,
        faculty: data.faculty.name_faculty,
        genderStudent: data.gender_student,
        hometownStudent: data.hometown_student,
        avatarStudent: `http://35.240.216.132:5555${data.avatar_student.formats.medium.url}`,
      });
    };

    fetchData();
  }, []);

  return (
    <View style={{flex: 2}}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.img} source={{uri: info.avatarStudent}} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Text style={styles.text}>Mã SV: {info.codeStudent}</Text>
        <Text style={styles.text}>Họ và tên: {info.nameStudent}</Text>
        <Text style={styles.text}>Ngày sinh: {info.birthdayStudent}</Text>
        <Text style={styles.text}>Giới tính: {info.genderStudent}</Text>
        <Text style={styles.text}>Lớp ngành: {info.class}</Text>
        <Text style={styles.text}>Khoa: {info.faculty}</Text>
        <Text style={styles.text}>Quê quán: {info.hometownStudent}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: 5,
    marginHorizontal: 40,
  },
  img: {
    width: 260,
    height: 260,
    backgroundColor: 'pink',
    borderRadius: 20,
  },
});

export default StudentComponent;
