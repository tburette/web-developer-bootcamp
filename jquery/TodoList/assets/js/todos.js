/**
jQuery like fadeOut inspired by :
http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
could be implemented in css
*/
function fadeOut(element, callback){
	element.style.opacity = 1;

	function fadeOutLoop(){
		if(element.style.opacity > 0){
			element.style.opacity -= 0.05;
			requestAnimationFrame(fadeOutLoop);
		}else{
			element.style.display = 'none';
			callback && callback(element);
		}
	}
	requestAnimationFrame(fadeOutLoop);
}

//implementer le bouton supprimer:
//ne gère pas création de nouveaux éléments 
// $('li > .remove').click(function(event){
// 	$(this).parent().fadeOut(500, function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// })
//idem mais en js natif
// document.querySelectorAll('li > .remove').forEach(function(remove){
// 	remove.addEventListener('click', function(event){
// 		var task = this.parentNode;
// 		task.parentNode.removeChild(task);
// 	});
// })

//s'enregistre au niveau du parent, gère créations dynamique
//problème : le li aura déjà intercepté et traité le click
document.querySelector('#container ul').addEventListener(
	'click', 
	function(event){
		if(event.target.nodeName == "LI"){
			event.target.classList.toggle('completed');
		}else if(event.target.classList.contains('remove')){
			var li = event.target.parentNode.parentNode;
			var ul = event.currentTarget;
			fadeOut(li, function(){
				ul.removeChild(li);
			});
		}
	}
	);


$("input[type='text']").keypress(function(event){
	if(event.which == 13){
		var todoText = $(this).val();
		$('#container ul').append('<li><span class="remove"><i class="remove fas fa-trash"></i></span> ' + todoText + "</li>");
		$(this).val("");
	}
})

$('.fa-plus-square').click(function(){
	// $('input[type="text"]').fadeToggle();
	$('input[type="text"]').slideToggle();
})
