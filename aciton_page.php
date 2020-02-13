<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">


	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	<title>Guessing Game</title>
	<style type="text/css">
	.container{
		background-color: <?php echo($_POST["color"]);?>;
		border-radius: 15px;
		padding: 20px;
		margin-top: 3%;
		width: 35%;
	}
	h1{
		text-align: center;
	}
	.randomNumber{
		display: inline-block;
	}
	#randNum{
		text-align: center;
	}
	#score{
		float: right;
	}
	#cOrW{
		display: inline;
	}
</style>


</head>
<body>
	<?php
		$color = $_POST["color"];
		
	?>
	<div class="jumbotron">
		<h4 id="helpTalk"></h4>
	</div>
	<div class="container">
		<h1>Guess within the range</h1><br>
		<div id="randNum">
			<h4 class="randomNumber" id="min"></h4>
			<h4 class="randomNumber">-</h4 class="randomNumber">
			<h4 class="randomNumber" id="max"></h4>
		</div>

		<input type="number" class="form-control" placeholder="Place your guess..." id="userGuess"><br>
		<input type="submit" name="submit" value="Check" class="btn btn-primary" id="check">
		<input type="button" name="again" value="Next" class="btn btn-primary" id="again">
		<input type="button" name="help" value="Help" class="btn btn-primary" id="help">
		<h5 id="cOrW"></h5>
		<div id="score">SCORE: <h5 id="scoreNumber"></h5></div> 
	</div>




</body>
	<script src="action.js"></script>

</html>

