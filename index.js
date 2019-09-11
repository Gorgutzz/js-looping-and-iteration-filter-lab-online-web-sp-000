// Code your solution in this file
function findMatching(drivers, name) {
    return drivers.filter(function (user) { return user.toLowerCase() === name.toLowerCase(); }) ;
}
