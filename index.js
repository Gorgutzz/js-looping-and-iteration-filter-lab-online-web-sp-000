// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); }) ;
}

function fuzzyMatch(drivers, name) {
  let nameLength = name.length ;
  return drivers.filter(function (driver) { return driver.slice(0, nameLength) === name }) ;
}

function matchName(drivers, name) {
   return drivers.filter(function (driver) { return driver.name === name; }) ;
}
