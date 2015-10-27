/**
 * Created by session1 on 10/22/15.
 */
function addFood(){
    var foodName = $('#foodname').val();
    var purchaseDate = $('#purchaseDate').val();
    var expirationDate = $('#expirationDate').val();

    $('#savedFoods').append('<tr><td>' + foodName + '</td><td>' + purchaseDate + '</td><td> ' + expirationDate + '</td></tr>');

    $('#foodname').val('');
    $('#purchaseDate').val('');
    $('#expirationDate').val('');


    if(purchaseDate > expirationDate){

            var savedFoods = $("savedFoods").css("background-color","red");
            savedFoods.hide(function() {
            savedFoods.css("background-color", "red");
        });
    }
    else{}
}

