// tools.js



$('#redraw').click( function() {
	updateCanvas();
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

function getUsername() {
	var ele = $('#username')[0];
	return ele.value; 
}

function getFollower() {
	var ele = $('#follower')[0];
	return ele.value;
}

function clearCanvas(canvas) {
	var ctx = canvas.getContext("2d");
	// save old transformation
	ctx.save();
	// reset transfromation
	ctx.setTransform(1,0,0,1,0,0);
	ctx.clearRect(0,0,canvas.width, canvas.height);
	// restore old transformation
	ctx.restore();
}

function updateCanvas() {
	var username = getUsername();
	var follower = getFollower();
	var canvas = $('#canvas')[0];
	clearCanvas(canvas);
	$.ajax( {
		type:'GET',
		url:'/paint',
		data:{username:username, follower:follower},
		success:function(data) {
//			console.log(data);
			data.forEach( function(item) {
				var pos = item.paint;
//				console.log(pos.x + "/" + pos.y);
				drawDot(canvas, pos);
			});
		}
	});
}


$('#canvas').click( function(event) {
	var canvas = document.getElementById("canvas");
	var pos = getMousePos(canvas, event);
	var username = getUsername();
	var follower = getFollower();
	$.ajax({
		type:'POST',
		url:'/clpaint',
		data:{pos:pos, username:username},
		success:function(data) {
			drawDot(canvas, data);

		}

	})
	console.log("x:" + pos.x + ' y:' + pos.y);
});
