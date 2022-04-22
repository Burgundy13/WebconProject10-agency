$(document).ready(function () {
    $('.navbar-toggler').html("<i class='fas fa-bars fa-2x' style='color:var(--orange);'></i>");



    var waypoint = new Waypoint({
        element: document.getElementById('skills'),
        handler: function () {
            var progress = document.querySelectorAll('.progress-bar');
            progress[0].setAttribute('style', 'width: 99%;transition:1s all;');
            progress[1].setAttribute('style', 'width: 95%;transition:2s all;');
            progress[2].setAttribute('style', 'width: 85%;transition:3s all;');
            progress[3].setAttribute('style', 'width: 79%;transition:4s all;');
        },
        offset: '90%'
    });


});