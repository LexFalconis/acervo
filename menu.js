function mais_filmes(){
		$(".sub_filmes").toggle("fast");
		/*$("#item_filmes").toggleClass("item_filmes_over");*/
		$(".sub_series").hide("fast");
		$(".sub_animes").hide("fast");
		$(".sub_tokusatsus").hide("fast");
		/*document.getElementById("item_filmes").style.backgroundImage = "url('imagens/icone_capitao.png')";
		document.getElementById("item_filmes").style.backgroundSize = "34px";
		document.getElementById("item_filmes").style.backgroundRepeat = "no-repeat";
		document.getElementById("item_series").style.backgroundImage = "none";
		document.getElementById("item_animes").style.backgroundImage = "none";
		document.getElementById("item_tokusatsus").style.backgroundImage = "none";*/
};

function mais_series(){
		$(".sub_series").toggle("fast");
		$(".sub_filmes").hide("fast");
		$(".sub_animes").hide("fast");
		$(".sub_tokusatsus").hide("fast");
};

function mais_animes(){
		$(".sub_animes").toggle("fast");
		$(".sub_filmes").hide("fast");
		$(".sub_series").hide("fast");
		$(".sub_tokusatsus").hide("fast");
};

function mais_tokusatsus(){
		$(".sub_tokusatsus").toggle("fast");
		$(".sub_filmes").hide("fast");
		$(".sub_animes").hide("fast");
		$(".sub_series").hide("fast");
};
/*https://tiagobutzke.wordpress.com/2010/05/18/manipulando-css-com-javascript/*/