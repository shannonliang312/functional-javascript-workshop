function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(val){
      return goodUsers.some(function(val1){
        return val1.id == val.id;
      })
    });
  };
}

module.exports = checkUsersValid