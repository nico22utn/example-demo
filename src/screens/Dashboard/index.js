import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Table from '../../components/Table';
import { getUsersBySearchBar, sortUsers as sortUsersService } from '../../services/User';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [cols, setCols] = useState([]);
    const [isUpdatingRows, setIsUpdatingRows] = useState(false)
    const [searchBar, setSearchBar] = useState(null)
    useEffect(() => {
        getUsers(null)
    }, []);

    useEffect(() => {
        const searchBarAsString = `${searchBar}`;
        const notValidSearch = !searchBarAsString || searchBarAsString.length <= 1
        getUsers(notValidSearch ? null : searchBarAsString)
    }, [searchBar])

    const getUsers = (keyword) => {
        const users = getUsersBySearchBar(keyword);
        if(users.length > 0) {
            if (cols.length === 0) {
                const [ first ] = users;
                setCols(Object.keys(first))
            };
            setData(users);
        }
    }
    const sortData = (col) => {
        setIsUpdatingRows(true);
        const sortUsers = sortUsersService(data, col.toLowerCase());
        setTimeout(() => {
            setData(sortUsers);
            setIsUpdatingRows(false);    
        }, 3000);
    }
    return (
        <>
            <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Search by name, username or age..'
                value={searchBar}
                onChange={setSearchBar}
                onChangeText={setSearchBar}
                returnKeyType="done"
            />
            </View>
            <Table cols={cols} rows={data} sortByColumn={sortData} isUpdatingRows={isUpdatingRows} />
        </>
        
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: { paddingBottom: 30 },
    textInput: {
        height: 50,
        width: 300,
        borderColor: 'silver',
        borderWidth: 2,
        borderRadius: 30,
        paddingLeft: 20,
    }
})
