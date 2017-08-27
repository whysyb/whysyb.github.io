<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Landing</title>
		<link rel="icon" href="ressources/images/icon.png" />
	<link rel="stylesheet" href="ressources/css/font-awesome/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
	<link rel="stylesheet" href="ressources/css/base.css">
	<link rel="stylesheet" href="ressources/css/index.css">
	<link rel="stylesheet" href="ressources/css/home.css">
	<link rel="stylesheet" href="ressources/css/landing.css">
	
	<!-- Plugin Owl Carousel -->
	<link rel="stylesheet" href="ressources/plugins/owl-slider/owl-carousel/owl.carousel.css">
	<link rel="stylesheet" href="ressources/plugins/owl-slider/owl-carousel/owl.theme.css">

</head>
<body>
	<div class="lightbox-darker">
		<i class="fa fa-times-circle close-lightbox" aria-hidden="true"></i>
	</div>
	<div class="lightbox-content">
		<div class="lightbox-content-content"></div>
	</div>
	<header class="header landing-header">
		<div class="close-menu">
			<p>Fermer</p>
		</div>
		<div class="logo">			
			<a href="#"><img src="ressources/images/logo.png" alt="Logo DEBRIEFON"></a>
		</div>
		<div class="navigation landing-navigation">
			<ul class="nav" id="top-menu">
				<li><a href="home.php" class="anchor-item active">Accueil</a></li>
				<li><a href="#" class="anchor-item">A propos</a></li>
				<li><a href="#" class="anchor-item">Tarifs</a></li>
				<li><a href="#" class="anchor-item">Blog</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</div>
		<div class="clear"></div>
	</header>
	<header class="header-band landing-header-band">
		<div class="logo">			
			<a href="#"><img src="ressources/images/logo-mobile.png" alt="Logo DEBRIEFON"></a>
		</div>
		<div class="menu-button">
			<div class="hamb-button">
				<div class="hamb-stroke hs-top"></div>
				<div class="hamb-stroke hs-mid"></div>
				<div class="hamb-stroke hs-bot"></div>
			</div>
			<p>Menu</p>
		</div>
	</header>

	<section class="section img-section section-home" id="start">
		<div class="bgvid">
			<video autoplay loop muted poster="ressources/video/poster.jpg" class="">
			  <source src="ressources/video/backgroundvideo.mp4" type="video/mp4">
			</video>
		</div>
		<div class="section-home-background"></div>
		<div class="section-home-background-effect"></div>
		<div class="section-home-front">
			<div class="catchphrase">
				<h1>Landing page</h1>
				<h2>Un exemple de landing page</h2>
			</div>
			<div class="subscribe">
				<form action="#">
				<label for="beta-access" class="accessibility-display">Inscrivez-vous à la newsletter</label>
					<input type="email" id="beta-access" placeholder="Inscrivez-vous à la newsletter" class="subscribe-input">
					<button>
						<i class="fa fa-paper-plane" aria-hidden="true"></i>						
					</button>
				</form>
			</div>
			<div class="clear"></div>
			<a href="#about" class="scrolldown">
				<span class="wheel"></span>
			</a>
		</div>
	</section>
	<section class="section" id="about">
		<div class="section-content d-container section-presentation">
		<div class="d-row">
			<div class="d-col d-col-4">
				<div class="d-col-content">
					<div class="section-content-title">
						<h3>Presentez vos produits</h3>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sapiente, libero minima vitae enim id dolore, pariatur perferendis? Dolores itaque libero nobis aspernatur aliquam nisi nulla amet ipsum sequi est, distinctio deserunt sapiente placeat, delectus dolorem quibusdam cupiditate dolore tempora odit veritatis totam impedit at beatae labore. Quaerat, necessitatibus nostrum!</p>
					<a href="#" class="button button-green">En savoir plus</a>
				</div>
			</div>
			<div class="d-col d-col-8">
				<div class="d-col-content">
					<img src="ressources/images/macbook.jpg" alt="">
				</div>
			</div>
			<div class="clear"></div>
		</div>
		</div>
	</section>
	<section class="section d-container section-cloudies">
		<div class="section-content">
			<div class="feature-section-title">
				<h3>Mettez en avant vos services</h3>				
			</div>
			<div class="d-row">
			<div class="d-col d-col-4">
				<div class="d-col-content p-15-30 feature-bloc">
					<div class="feature-bloc-in">
						<img src="ressources/images/features/network.png" alt="">
						<h4>Réseau de professionnels</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus deserunt alias odio amet veritatis quo neque cumque.</p>
						<a href="#" class="button">Découvrir</a>
					</div>
				</div>
			</div>
			<div class="d-col d-col-4">
				<div class="d-col-content p-15-30 feature-bloc">
					<div class="feature-bloc-in">
						<img src="ressources/images/features/agile.png" alt="">
						<h4>Méthode agile</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatibus quis asperiores vitae ducimus reiciendis voluptates laboriosam autem dolorum</p>
						<a href="#" class="button">Découvrir</a>
					</div>
				</div>
			</div>
			<div class="d-col d-col-4">
				<div class="d-col-content p-15-30 feature-bloc">
					<div class="feature-bloc-in">
						<img src="ressources/images/features/cloud.png" alt="">
						<h4>Cloud computing</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo architecto nostrum excepturi eius quod suscipit eaque sed ipsum veritatis sunt!</p>
						<a href="#" class="button">Découvrir</a>
					</div>
				</div>
			</div>
				<div class="clear"></div>
			</div>
		</div>
	</section>
	<section class="section d-container">
		<div class="section-content">
			<div class="d-row">
				<div class="d-col d-col-8">
					<div class="d-col-content">
						<img src="ressources/images/responsive.jpg" alt="">
					</div>
				</div>
				<div class="d-col d-col-4">
					<div class="d-col-content">
						<div class="section-content-title">
							<h3>Une landing page responsive</h3>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sapiente, libero minima vitae enim id dolore, pariatur perferendis? Dolores itaque libero nobis aspernatur aliquam nisi nulla amet ipsum sequi est, distinctio deserunt sapiente placeat, delectus dolorem quibusdam cupiditate dolore tempora odit veritatis totam impedit at beatae labore. Quaerat, necessitatibus nostrum!</p>
						<a href="#" class="button button-green">En savoir plus</a>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>		
	</section>
	<section class="section section-debriefon">	
		<div class="debriefon-parallax"></div>
		<div class="section-content">
			<h3><span>N'hésitez plus !</span> <a href="#start" class="button button-green">call to action</a></h3>
		</div>
	</section>
	<section class="section d-container">
		<div class="section-content">
			<div class="d-row">
				<div class="d-col d-col-8">
					<div class="d-col-content">
						<img src="ressources/images/channel-feature.jpg" alt="">
					</div>
				</div>
				<div class="d-col d-col-4">
					<div class="d-col-content">
						<div class="section-content-title">
							<h3>Gagnez en visibilité</h3>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sapiente, libero minima vitae enim id dolore, pariatur perferendis? Dolores itaque libero nobis aspernatur aliquam nisi nulla amet ipsum sequi est, distinctio deserunt sapiente placeat, delectus dolorem quibusdam cupiditate dolore tempora odit veritatis totam impedit at beatae labore. Quaerat, necessitatibus nostrum!</p>
						<a href="#" class="button button-green">En savoir plus</a>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>		
	</section>
	<footer class="footer">
		<div class="dcontainer">
			<div class="d-row">
				<div class="d-col d-col-4">
					<ul>
						<p>Liens utiles</p>
						<li><a href="#">Support</a></li>
						<li><a href="#">Documentation</a></li>
						<li><a href="#">Mentions légales</a></li>
						<li><a href="#">Conditions générales de vente</a></li>
						<li><a href="#">Conditions générales d'utilisation</a></li>
					</ul>
				</div>
				<div class="d-col d-col-4">
					<ul>
						<p>Produits et services</p>
						<li><a href="#">Cloud Computiong</a></li>
						<li><a href="#">Gestion de projets</a></li>
						<li><a href="#">Emailing</a></li>
						<li><a href="#">Messagerie instantanée</a></li>
						<li><a href="#">Archivage automatique d'emails</a></li>
						<li><a href="#">Transferts de fichiers lourds</a></li>
						<li><a href="#">Gestion d'entreprises</a></li>
					</ul>
				</div>
				<div class="d-col d-col-4">
					<ul class="follow-us">
						<p class="fu-title">Suivez nous sur :</p>
						<li><a href="#" class="fu-facebook"><i class="fa fa-facebook" aria-hidden="true"></i><span>facebook</span></a></li>
						<li><a href="#" class="fu-twitter"><i class="fa fa-twitter" aria-hidden="true"></i><span>twitter</span></a></li>
						<li><a href="#" class="fu-linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i><span>linkedin</span></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="ressources/plugins/owl-slider/owl-carousel/owl.carousel.js"></script>
	<script src="ressources/js/parallax/parallax.js"></script>
	<script src="ressources/js/front.js"></script>
	<script src="ressources/js/home.js"></script>
	</body>
	</html>