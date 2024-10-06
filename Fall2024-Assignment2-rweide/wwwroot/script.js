var backgroundIndex = 0;
var backgroundCount = 2;

function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '75de13bfab7f4b3fb7b05fda4af9f92e'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').css("visibility", "visible");
            //$('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}

function searchButtonCallApi() {
    apiSearch();
}

function feelingLuckyButton() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '75de13bfab7f4b3fb7b05fda4af9f92e'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            if (len > 0) {
                window.location.assign(data.webPages.value[0].url);
            } else {
                alert("No results returned!");
            }
        })
        .fail(function () {
            alert('error');
        });
}

function timeButtonClick() {
    const currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var hoursString = "";
    if (hours < 10) {
        hoursString += "0";
    }
    hoursString += hours.toString();

    var minutesString = "";
    if (minutes < 10) {
        minutesString += "0";
    }
    minutesString += minutes.toString();

    var timeString = "<p style=\"text-align: center\">The time is " + hoursString + ":" + minutesString + ".</p>";
    $('#time').html(timeString);
    $('#time').css("visibility", "visible");
    $('#time').dialog();
}

$("#HeaderTitle").on("click", function () {
    backgroundIndex += 1;
    if (backgroundIndex >= backgroundCount) {
        backgroundIndex = 0;
    }
    switch (backgroundIndex) {
        case 0:
            $('body').css("background-image", "url(\"images/backgrounds/background1_nick-design-fR-v9C_5QPg-unsplash.jpg\")");
            break;
        case 1:
            $('body').css("background-image", "url(\"images/backgrounds/background2_wolfgang-hasselmann-SNq1uzva1yI-unsplash.jpg\")");
            break;
        default:
            alert("Something went wrong with the background changing logic...");
    }
});