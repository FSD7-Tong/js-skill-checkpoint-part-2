function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}
const handleResponse = (response) => {
  return response.json();
};
const onSuccess = (data) => {
  const serverName = data
    .filter((user) => user.name.length > 17)
    .map((user) => user.name);
    console.log(serverName);
};

getUsers().then(handleResponse).then(onSuccess);
