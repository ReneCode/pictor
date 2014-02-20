// tools.js



$('#test').hover( function() {
	// get first canvas
	var c = $('#canvas')[0];
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(10,20,70,40);
});




function getMousePos(canvas, ev) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: ev.clientX - rect.left,
		y: ev.clientY - rect.top
	};
};


function drawDot(canvas, pos) {
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#550055";
	ctx.fillRect(pos.x-5, pos.y-5, 10, 10);
}

$('#canvas').click( function(event) {
	var canvas = document.getElementById("canvas");

	var pos = getMousePos(canvas, event);
	$.ajax({
		type:'POST',
		url:'/paint',
		data:{pos:pos},
		success:function(data) {
			drawDot(canvas, data);

		}

	})

	console.log("x:" + pos.x + ' y:' + pos.y);
});
