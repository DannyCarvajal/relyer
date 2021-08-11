let footer = document.getElementsByTagName("footer")[0];
let footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
        <div class="img-background-footer">
            <div class="mobile content-logo-footer ">
                <div class="logo-footer">
                    <img src="../assets/footer/logo.png" alt="Logo">
                </div>
            </div>
            <div class="background-menu mobile">
                <div class="menu-footer-mobile">
                    <ul>
                        <li> <a href="./learn.html"> Learn more</a></li>
                        <li><a href="./contact.html"> Contact</a></li>
                        <li><a href="./aboutUs.html"> About us</a></li>
                    </ul>
                </div>

            </div>
            <div class="background-menu desktop">
                <div class="menu-footer">
                    <ul>
                    <li> <a href="./learn.html"> Learn more</a></li>
                    <li><a href="./contact.html"> Contact</a></li>
                    <li><a href="./aboutUs.html"> About us</a></li>
                    </ul>
                </div>
                <div class="content-logo-footer">
                    <div class="logo-footer">
                        <img src="../assets/footer/logo.png" alt="">
                    </div>
                </div>
                <div class="networks">
                    <div class="img-networks">
                        <img src="../assets/footer/markunread.png" alt="Correo">
                        <img src="../assets/footer/Instagram.png" alt="Instagram">
                        <img src="../assets/footer/Facebook.png" alt="Facebook">
                    </div>
                </div>

            </div>
            <div class="networks mobile">
                <div class="img-networks">
                    <img src="../assets/footer/markunread.png" alt="Correo">
                    <img src="../assets/footer/Instagram.png" alt="Instagram">
                    <img src="../assets/footer/Facebook.png" alt="Facebook">
                </div>
            </div>
        </div>
`;

footer.appendChild(footerTemplate.content);
