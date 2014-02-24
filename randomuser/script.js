/**
 * http://www.randomuser.me
 */
$(document).ready(function() {
    randomize(appendDiv);
});

$("#ajax").click(function () {
    $.ajax({
      url: 'http://api.randomuser.me/',
      dataType: 'json',
      data: { seed: 'nizam' },
      success: function(data){
        $("#name").text(data.results[0].user.name.first + (Math.random(1,100)*100));
          $.each(data.results, function(index, result) {
              $("body").append($('<div>', {
                  text: result.user.email
              }));
          });
      }
    });
});

$("#getjson").click(function () {
    /*var email = randomize('nizam');
    $("body").append($('<div>', {
        text: email
    }));*/
    randomize(appendDiv);
});

function randomize(callback) {
    $.getJSON("http://api.randomuser.me/", function (data) {
        var user = data.results[0].user;
        /*var seed = {
            fullname: user.name.first + " " + user.name.last,
            email: user.email,
            gender: user.gender
        }
        */
        var seed = data.results[0].seed;
        callback(seed, user);
    });
}

function appendDiv(seed, user) {
    $(".seed").html(seed);
    $(".photo").attr('src', user.picture);
    // $(".name").html(getFullName(user.name.title, user.name.first, user.name.last));
    $(".name").html(capitalizeFirstChar(user.name.title + " " + user.name.first + " " + user.name.last));
    $(".email").html(user.email);
    $(".phone").html(user.phone);
    $(".cell").html(user.cell);
    $(".address").html(capitalizeFirstChar(user.location.street + ", " + user.location.city + ", " + user.location.zip + ", " + user.location.state));
//    getFullName(user.name.title, user.name.first, user.name.last);
}

var getFullName = function (title, first, last) {
    var capsTitle = title[0].toUpperCase() + title.slice(1);
    var capsFirst = first[0].toUpperCase() + first.slice(1);
    var capsLast = last[0].toUpperCase() + last.slice(1);
    return capsTitle + " " + capsFirst + " " + capsLast;
}

var capitalizeFirstChar = function (text) {
  var tempSplit = text.split(' ');
  for(i=0; i < tempSplit.length; i++) {
    tempSplit[i] = (function () {
      tempText = tempSplit[i];
      return tempText[0].toUpperCase() + tempText.slice(1);
    })();
  }
  return tempSplit.join(' ');
}
