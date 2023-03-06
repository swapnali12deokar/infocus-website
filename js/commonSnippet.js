
const header = document.querySelector('#header-snippet');
header.innerHTML = `<nav class="navbar navbar-expand-lg  navbar-light shadow-sm px-5 py-3 py-lg-0" style="
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: rgb(9 11 22 / 85%);
    z-index: 9;
    color: #fff;">
    <a href="index.html" class="navbar-brand p-0">
    <img  src="img/infocus.jpeg" alt="Image" style="height:80px"; "width:50px">
    </a>
    <h3 style=color:#fff>INFOCUS INFOTECH</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" btn btn-primary>
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0 me-n3"> 
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="services.html" class="nav-item nav-link active">services</a>

         <a href="careers.html" class="nav-item nav-link">Careers</a>
            <a href="contactUs.html" class="nav-item nav-link">Contact Us</a>
            <div class="search-container">
    
            <input type="text" placeholder="Search.." name="search">
            <button type="submit"><i class="fa fa-search"></i></button>
          
        </div>
            </div>
          
        </div>
    </div>
</nav>`;

const footer = document.querySelector('#footer-snippet');
footer.innerHTML = `
<div class="container-fluid bg-dark text-secondary p-5">
<div class="row g-5">
    <div class="col-lg-3 col-md-6">
        <h3 class="text-white mb-4">Quick Links</h3>
        
        <div class="d-flex flex-column justify-content-start">
            <a class="text-secondary mb-2" href="index.html"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
            <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>
            searvices</a>
            <a class="text-secondary mb-2" href="careers.html"><i class="bi bi-arrow-right text-primary me-2"></i>Careers</a>
            <a class="text-secondary" href="contactUs.html"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
        </div>
    </div>

    <div class="col-lg-3 col-md-6">
        <h3 class="text-white mb-4">Get In Touch</h3>
        <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>Office no. 512,CrossRoads Bhumkar Chok, Wakad, 411057 Pune Maharashtra 411038</p>
        <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>hello@iipl.live</p>
        <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>+91 8408904555</p>
        <br>
            <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://twitter.com/InfotechInfocus"><i class="fab fa-twitter fw-normal"></i></a>
            <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.facebook.com/iipl.live"><i class="fab fa-facebook-f fw-normal"></i></a>
            <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.linkedin.com/company/infocusinfotech/"><i class="fab fa-linkedin-in fw-normal"></i></a>
    </div>
   <div class="col-lg-6 col-md-6">
   <iframe
                src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3000760752234!2d73.75056641436998!3d18.60556807142631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9407e30875d%3A0xd3df7c9e0eb2dd7!2sInfocus%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1677670739095!5m2!1sen!2sin"
                width="100%" height="270px" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
</div> 

</div>
</div>
<div class="container-fluid bg-dark text-secondary text-center border-top py-4 px-5" style="border-color: rgba(256, 256, 256, .1) !important;">
<p class="m-0">&copy; <a class="text-secondary border-bottom" href="#">Your Site Name</a>. All Rights Reserved. Designed by <a class="text-secondary border-bottom" href="https://next-gen-iot.com/">Infocus Infotech</a></p>
</div>
`;