import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import { connect } from 'react-redux';
import { fetchUsersFromServer } from '../store/users';
import Loading from './Loading';
import User from './User';

const UsersList = (props) => {
  const { users, fetchUsers } = props;
  const [errorMessage, setErrorMessage] = useState('');

  const getAllUsersHook = () => {
    try {
      fetchUsers();
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    getAllUsersHook();
  }, [users.length]);

  const output = users ? (
    <View>
      {users.map((user) => (
        <User key={user.id} currentUser={user} />
      ))}
    </View>
  ) : null;

  return (
    <SafeAreaView>
      {users ? (
        <ScrollView>
          <Title style={styles.titleStyle}>Users</Title>
          <Text style={styles.errorStyle}>{errorMessage}</Text>
          {output}
        </ScrollView>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

const mapState = (state) => {
  return {
    users: state.users,
    user: state.user
  };
};

const mapDispatch = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsersFromServer())
});

export default connect(mapState, mapDispatch)(UsersList);

const styles = StyleSheet.create({
  mapStyle: {
    alignSelf: 'stretch',
    height: 500,
    margin: '5%'
  },
  titleStyle: {
    marginTop: '12%',
    paddingTop: '5%',
    fontSize: 40,
    textAlign: 'center'
  },
  errorStyle: {
    color: 'red',
    textAlign: 'center',
    marginTop: '1%',
    fontWeight: 'bold'
  }
});
