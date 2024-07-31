$(function(){
  $('#mainweapon').change(function () {

    var val = $(this).val();

    var mainweaponId = '#' + val;

    $('.main').hide();

    $(mainweaponId).show();
  });
});
$(function(){
  $('#subweapon').change(function () {

    var val = $(this).val();

    var subweaponId = '#' + val;

    $('.sub').hide();

    $(subweaponId).show();
  });
});
$(function(){
  $('#spweapon').change(function () {

    var val = $(this).val();

    var spweaponId = '#' + val;

    $('.sp').hide();

    $(spweaponId).show();
  });

});