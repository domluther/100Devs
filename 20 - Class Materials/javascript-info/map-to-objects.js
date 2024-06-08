// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];
// Have to add the braces twice otherwise - once for the function and once for the object
let usersMapped = users.map((user) => {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  };
});

console.log(usersMapped);
