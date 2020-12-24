import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';

const apiGetAllPosts = 'http://35.240.216.132:5555/posts?_sort=created_at:DESC';
const apiGetStudents = 'http://35.240.216.132:5555/students?code_student_in=';
const apiLogin = 'http://35.240.216.132:5555/auth/local';

export async function getPostsFromServer() {
  try {
    const jwt = await AsyncStorage.getItem('jwt');
    let response = await fetch(apiGetAllPosts, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
    let responseJSON = await response.json();
    // console.log('data : ', responseJSON);
    return responseJSON; // list of post
  } catch (error) {
    console.error('Error is : $(error');
  }
}

export async function login(identifier, password) {
  try {
    let res = await fetch(apiLogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({identifier, password}),
    });
    return res;
  } catch (error) {}
}

export async function getStudentsFromServer(id) {
  try {
    let response = await fetch(apiGetStudents + id, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
    let responseJSON = await response.json();
    // console.log('data : ', responseJSON);
    return responseJSON; // list of post
  } catch (error) {
    console.error('Error is : $(error');
  }
}
