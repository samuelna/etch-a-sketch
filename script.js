
// add amt grid and resize squares to fit within container
function addGrid(amt) {
	// body settings
	$('body').css({'width': '960px', 'margin-top': '20px', 'margin-bottom': '20px', 'margin-left': 'auto', 'margin-right': 'auto', 'padding': '0'});
	$('body').prepend('<div class="container"></div>');
	
	// container settings
	var container = $('.container');
	// $(container).css({'width': '960px', 'margin-top': '20px', 'margin-left': 'auto', 'margin-right': 'auto', 'padding': '0'});
	
	// create button
	var btn = document.createElement('button');
	var btn_txt = document.createTextNode('Restart');
	btn.appendChild(btn_txt);
	btn.className = 'clear';
	$(btn).css({'padding': '8px', 'border-radius': '3px', 'margin-left': 'auto', 'margin-right': 'auto', 'margin-bottom': '20px'});
	
	// add button before container
	$(container).before(btn);
	
	// add grid_sq into container
	for (var i=0; i < (amt * amt); i++) {
		$(container).append('<div class="grid_sq"></div>');
	}
	
	// display grid_sq by amt * amt without margin-bottom
	$('.grid_sq').css({'display': 'inline-block', 'float': 'left', 'background-color': '#F5EFEF'});
	
	// set width & height of grids
	var width = ( $(".container").width() ) / amt;
	$(".grid_sq").css({'width': width, 'height': width});
}


// add color to grid_sq indicating trail
function addColor() {
	// change background color to draw
	$('.grid_sq').css({'background-color': '#7D7C7C'});
}

function clearGrid() {
	$('.grid_sq').css({'background-color': '#F5EFEF'});
}



$(document).ready( function() {

	// prompt user of grid size
	var size = prompt('Enter the size for the grid: Any numbers between 2 to 100.');
	// 100 x 100 as default grid size
	if (size < 2 || size > 101) {
		size = 100;
	}

	// populate the container with grid_sq 
	addGrid(size);
	
	
	// on cursor hover, change color to indicate a trail
	$('.grid_sq').on( 'mouseenter', function() {
		$(this).css({'background-color': 'black'});
	});
	
	
	// clear the grid
	$('.clear').on( 'click', function() {
		clearGrid();
	});
	
});


