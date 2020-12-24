import React, {Component} from 'react';

const apiGetAllPosts = 'http://35.240.216.132:5555/posts?_sort=created_at:DESC';
const apiGetStudents = 'http://35.240.216.132:5555/students?code_student_in=';

export async function getPostsFromServer() {
  try {
    let response = await fetch(apiGetAllPosts, {
      method: 'GET',
      headers: new Headers({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjA3OTExNDkxLCJleHAiOjE2MTA1MDM0OTF9.7yvrAkk1SwHmu_OeAEQMP1yQUBUHkx8XGSra_hsdG3A',
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

export async function getStudentsFromServer(id) {
  try {
    let response = await fetch(apiGetStudents + id, {
      method: 'GET',
      headers: new Headers({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjA3OTExNDkxLCJleHAiOjE2MTA1MDM0OTF9.7yvrAkk1SwHmu_OeAEQMP1yQUBUHkx8XGSra_hsdG3A',
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
