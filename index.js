// Code your solution in this file
function filter (collection) {
  for (const user of collection) {
    if (likesElephants(user)) {
      console.log(user.firstName);
    }
  }
}
 
