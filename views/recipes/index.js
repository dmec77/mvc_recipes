<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Paleo Recipes</title>

		<!-- Materialize CSS -->
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="stylesheet" href="/vendor/materialize/css/materialize.min.css" />

		<!-- Application Styles -->
		<link rel="stylesheet" href="/css/style.css" />

		<!-- jQuery -->
		<script src="/vendor/jquery/jquery.min.js"></script>

		<!-- Materialize JS -->
		<script src="/vendor/materialize/js/materialize.min.js"></script>

		<!-- Application JS -->
		<script src="/public/js/app.js"></script>

	</head>
	<body>

		<nav>
			<div class="nav-wrapper">
				<a href="index.html" class="brand-logo">HEADING FOR THE SITE</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a href="new.html">Add Hotel +</a></li>
				</ul>
			</div>
		</nav>

		<div class="container margin-top-20">
			<div class="row">
				<div class="col s12">
					<div class="card horizontal">
						<div class="card-image">
							<img src="img/hotel_sample.jpg">

							<button class="btn-floating btn-large waves-effect waves-light red margin-top-20" style="margin-left:10px;"><i class="material-icons">delete</i></button>
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<div class="input-field">
									<input type="text" placeholder="Hotel Name" />
								</div>

								<div class="input-field">
									<textarea placeholder="Hotel Description" class="materialize-textarea"></textarea>
								</div>

								<div class="input-field">
									<input type="text" placeholder="Hotel Address" />
								</div>

								<div class="input-field">
									<select>
										<option value="">Hotel Star Rating</option>
										<option value="1">1 Star</option>
										<option value="2">2 Stars</option>
										<option value="3">3 Stars</option>
										<option value="4">4 Stars</option>
										<option value="5">5 Stars</option>
									</select>
								</div>

								<div class="input-field">
									<select>
										<option value="">Pet Friendly?</option>
										<option value="true">Yes</option>
										<option value="false">No</option>
									</select>
								</div>

								<div class="input-field">
									<input type="text" placeholder="Hotel Image URL" />
								</div>
							</div>
							<div class="card-action">
								<button class="waves-effect waves-light btn">Submit Changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</body>
</html>
