setTimeout(()=>{
    $('p').hide();
},3000);


setTimeout(() => {
    $("#text1").html("<b>Hello world!</b>");
}, 3000);

$('#button1').click(function(){
    $("#text1").hide();
});