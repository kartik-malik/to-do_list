

$("input[type=text]").keypress(function(event){

if(event.which===13){
     var entry=$(this).val();
     $(this).val("");
     $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+entry+"</li>");


}

})






$("ul").on("click",'li',function(){

$(this).toggleClass("done");

})
$("ul").on("click",'span',function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
    })