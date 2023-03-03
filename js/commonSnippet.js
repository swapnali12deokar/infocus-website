
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
    <a href="index.html" class="nav-item nav-link active">INFOCUS INFOTECH</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0 me-n3">
        <a href="index.html" class="nav-item nav-link active">INFOCUS INFOTECH</a>
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="about.html" class="nav-item nav-link active">services</a>

    <a href="service.html" class="nav-item nav-link">Careers</a>
            <a href="our attributes.html" class="nav-item nav-link">Contact Us</a>
            <a href="our attributes.html" class="nav-item nav-link">Search</a>
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
            <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
            <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>
            searvices</a>
            <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Careers</a>
            <a class="text-secondary" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
        </div>
    </div>

    <div class="col-lg-3 col-md-6">
        <h3 class="text-white mb-4">Get In Touch</h3>
        <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>Office no. 512,CrossRoads Bhumkar Chok, Wakad, 411057 Pune Maharashtra 411038</p>
        <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>hello@iipl.live</p>
        <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>+91 8408904555</p>
        <br>
            <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
            <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.facebook.com/iipl.live"><i class="fab fa-facebook-f fw-normal"></i></a>
            <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.linkedin.com/company/infocusinfotech/"><i class="fab fa-linkedin-in fw-normal"></i></a>
            <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href=""><i class="fab fa-instagram fw-normal"></i></a>
    </div>
   <div class="col-lg-6 col-md-6">

</div> 
    <div class="col-lg-3 col-md-6">
     
    </div>
</div>
</div>
<div class="container-fluid bg-dark text-secondary text-center border-top py-4 px-5" style="border-color: rgba(256, 256, 256, .1) !important;">
<p class="m-0">&copy; <a class="text-secondary border-bottom" href="#">Your Site Name</a>. All Rights Reserved. Designed by <a class="text-secondary border-bottom" href="https://next-gen-iot.com/">Infocus Infotech</a></p>
</div>
`;