const USERS = [{
    "username": "richard",
    "email": "richard@sample.com",
    "age": 20
   },
   {
    "username": "michael",
    "email": "michael@sample.com",
    "age": 23
   },
   {
    "username": "diego",
    "email": "diego@sample.com",
    "age": 24
   },
   {
    "username": "rene",
    "email": "rene@sample.com",
    "age": 22
   },
   {
    "username": "agustin",
    "email": "agustin@sample.com",
    "age": 32
   }
];
export const getUsersBySearchBar = (searchBarText) => {
    if (!searchBarText) return USERS;
    return USERS.filter(({ username, email, age}) => username === searchBarText ||  email === searchBarText || age === searchBarText);
}
export const sortUsers = (users, col) => {
    return users.sort((a, b) => {
        const x = a[col];
        const y = b[col];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}