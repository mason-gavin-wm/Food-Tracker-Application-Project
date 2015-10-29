/**
 * Created by session1 on 10/22/15.
 */
function addFood(){
    var foodName = $('#foodname').val();
    var purchaseDate = $('#purchaseDate').val();
    var expirationDate = $('#expirationDate').val();

    $('#foodname').val('');
    $('#purchaseDate').val('');
    $('#expirationDate').val('');

    var unixExpiration = Date.parse(expirationDate);
    var today = new Date();
    var unixToday = Date.parse(today);

    if(unixToday > unixExpiration - 259200000){
        $('#savedFoods').append('<tr style="background-color: red"><td>' + foodName + '</td><td>' + purchaseDate + '</td><td> ' + expirationDate + '</td></tr>');
    }
    else {
        $('#savedFoods').append('<tr><td>' + foodName + '</td><td>' + purchaseDate + '</td><td> ' + expirationDate + '</td></tr>');
    }

}

