(function () {
    "use strict";
    var lion = document.querySelector('#lion');
    var i=0;

    function lionzoom() {
        console.log(this);
        if (i=0) {
            i++;
            document.querySelector('body').classList.add('lionactif');

        else if (i=1)
            i--;
            document.querySelector('body').classList.remove('lionactif')
        }
    }

    lion.addEventListener('click',onclick);
}());

lionzoom()