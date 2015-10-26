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
}