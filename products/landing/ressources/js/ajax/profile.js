$(document).ready(function(){
    $(".diplome_new").submit(function(){
        $.ajax({
            type: 'POST',
            url: Routing.generate('profile_index'),
            success: function(data) {
                console.log(data)
                $(".list-diplome").html(data).show();
            }


        });
    });
});