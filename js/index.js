
// REQUIRES
var $ = require('jquery')

// VAR PATHS
var usersUrl = 'http://localhost:3000/users/'
var permissionsUrl = 'http://localhost:3000/permissions/'

$(function () {

  function getUsers() {
    return $.get(usersUrl)
  }

  function getUserIds(id) {
    return $.get(usersUrl + id)
  }

  var users = getUsers()

    users.done(function (users) {
        users.forEach(function (user) {
            getUserIds(users.id)
                .done(function (ids) {
                    $('.listContainer').append('<li>' + user + '<li>')
            })
        })
    })


        // users.done(function (users) {
        //     users.forEach(function (user) {
        //         getUserIds(users.id)
        //             .done(function (ids) {
        //                 console.log(ids)
        //             })
        //         })
        //     })



});
