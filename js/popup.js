document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');

    checkPageButton.addEventListener('click', function () {



    }, false);
}, false);


blocked = ["anime", "memes", "meme", "donald trump", "fake news", "corn", "cornhub","reddit", "theworldsworstwebsiteever" ];

chrome.tabs.query({}, function (tabs) {
    var numRemoved = 0;

    for (var i = 0; i < tabs.length; i++) {

        blocked.forEach(function (key) {
            if (tabs[i].title.toLowerCase().search(key)) {

            }
            else {
                chrome.tabs.remove(tabs[i].id);

                deleteHistory();

                numRemoved++;
                if (numRemoved === tabs.length) {
                    chrome.tabs.create({url: "https://en.wikipedia.org/wiki/Harriet_Tubman"});
                }
            }
        });
    }

    tabs.forEach(function (tab) {
        blocked.forEach(function (site) {

            console.log(tab.url);

            if (tab.url.indexOf(site) === -1) {
            }
            else {

                chrome.tabs.remove(tab.id);

                deleteHistory();

                numRemoved++;
                if (numRemoved === tabs.length) {
                    chrome.tabs.create({url: "https://en.wikipedia.org/wiki/Harriet_Tubman"});
                }
            }

        });
    });
});

function deleteHistory() {

    chrome.browsingData.remove({
        //"since": oneWeekAgo,
        "originTypes": {
            "protectedWeb": true
        }
    }, {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "serverBoundCertificates": true,
        "webSQL": true

    });
}

$('#myForm').submit(function() {
    // get all the inputs into an array.
    var $inputs = $('#myForm :input');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });

    blocked.add(values["newSite"]);


});