class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="Header-section">
        <!-- Vidio playing in the backfround -->
        <video
          src="assets/Vidio/Explanatory video_ Healthcare market.mp4"
          muted
          autoplay
        ></video>
        <!-- Navigation Menu -->
        <nav>
          <div class="dropdown-menu text-right">
                <div class="bars">
                  <i class="fas fa-bars"></i>
                </div>
                <div class="dropdown-list nav-menu">
                  <ul class="no-list-style">
                  <li>
                  <a href="index.html">Home</a>
                </li>
    
                <li>
                  <a href="#site-info-section">Site Info</a>
                </li>
    
                <li>
                  <a href="#coustomer-expert-container">Expactation</a>
                </li>
    
                <li>
                  <a href="#our-story">Doctors</a>
                  <br>
                </li>
    
                <li>
                  <a href="#Customer-feedback-container">Feedback</a>
                </li>
    
                <li>
                  <a href="#location">Location</a>
                </li>
                <li>
                 <a href="#Blog-Section">Blogs</a>
               </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
                  </ul>
                </div>
              </div>
          <div class="logoContainer">
            <a href="About_Page.html"><span>Health</span> Care</a>
          </div>
          <ul class="Horizontal-List text-center nav-menu">
            <li>
              <a href="index.html">Home</a>
            </li>

            <li>
              <a href="#site-info-section">Site Info</a>
            </li>

            <li>
              <a href="#coustomer-expert-container">Expactation</a>
            </li>

            <li>
              <a href="#our-story">Doctors</a>
            </li>

            <li>
              <a href="#Customer-feedback-container">Feedback</a>
            </li>

            <li>
              <a href="#location">Location</a>
            </li>
            <li>
             <a href="#Blog-Section">Blogs</a>
           </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <!-- ############ Start of Header content in header -->
        <div id="Header-Content">
          <h1>
            Experience Lasting Relief from Asosteoarthritis, Rheumatoid
            Arthritis, and Muscle aches
          </h1>
          <p class="para-styling">
            Osteoarthritis, the most common form of arthritis, involves the
            wearing away of the cartilage that caps the bones in your joints.
            Rheumatoid arthritis is a disease in which the immune system attacks
            the joints, beginning with the lining of joints. Arthritis is the
            swelling and tenderness of one or more joints.
          </p>
          <a href=""><span>Schedule an Appointment</span></a>
        </div>
        <!-- ########### End of Header content Section -->
      </header>
        `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <footer id="Contact">
      <div class="footer-container">
        <div class="footer-box-company">
          <div class="logoContainer">
            <a href="About_Page.html"><span>Health</span> Care</a>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <div class="footer-social">
            <a href=""><i class="fa-brands fa-linkedin fa-fade"></i></a>
            <a href=""><i class="fa-brands fa-facebook fa-fade"></i></a>
            <a href=""><i class="fa-brands fa-quora fa-fade"></i></a>
            <a href=""><i class="fa-brands fa-instagram fa-fade"></i></a>
            <a href=""><i class="fa-brands fa-twitter fa-fade"></i></a>
          </div>
        </div>
      
        <div class="footer-link-box">
          <strong>Main Link's</strong>
          <ul>
            <li>
              <a href="index.html">Home</a>
              <a href="About_Page.html">About Page</a>
              <a href="#site-info-section">Site Info</a>
              <a href="#coustomer-expert-container">Expactation</a>
              <a href="#our-story">Doctors</a>
            </li>
          </ul>
        </div>
      
        <div class="footer-link-box">
          <strong>Section Link's</strong>
          <ul>
            <li>
              <a href="#Customer-feedback-container">Feedback</a>
              <a href="#location">Location</a>
              <a href="#Blog-Section">Blogs</a>
              <a href="#Contact">Contact</a>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
      
        <div class="footer-link-box">
          <strong>Blogs Links</strong>
          <ul>
            <li>
              <a href="">Constipation Blog</a>
              <a href="">Acidity Blog</a>
              <a href="">Platelet Blog</a>
            </li>
          </ul>
             <a href="" class="btn-appointment"><span>Schedule an Appointment</span></a>
        </div>
      </div>
      
      <hr />
      <div class="footer-bootom">
        <span>Made By Going To Internet</span>
        <span>Copyright 2023 - Going To Internet</span>
      </div>
      </footer>`;
  }
}
customElements.define("my-footer", MyFooter);
