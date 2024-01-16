<template>
    <footer class="footer">
        <div class="container grid grid-footer ">
            <div class="logo-col">
                <a href="#" class="footer-logo">
                    <img src="../img/logo.png" class="logo" alt="omnifood logo">
                </a>
                <ul class="social-links">
                    <li><a href="#"><ion-icon class="social-icon" name="logo-instagram"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="social-icon" name="logo-facebook"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="social-icon" name="logo-twitter"></ion-icon></a></li>
                </ul>
                <p class="copyright">copyright &copy;2023 by Omnifood</p>
            </div>
            <div class="address-col">
                <p class="footer-heading">關於</p>
                <address class="contacts">
                    <p class="address">
                        地址：台中市南屯區黎明路一段250號
                    </p>
                    <p>
                        <a class="footer-link" href="tel:415-201-6370">415-201-6370</a><br><br>
                        <a class="footer-link" href="mailto:hello@omnifood.com">hello@omnifood.com</a>
                    </p>
                </address>
            </div>
            <nav class="nav-col">
                <p class="footer-heading">會員</p>
                <ul class="footer-nav">
                    <li><a class="footer-link" href="#">建立帳戶</a></li>
                    <li><a class="footer-link" href="#">登入</a></li>
                    <li><a class="footer-link" href="#">iOS應用程式</a></li>
                    <li><a class="footer-link" href="#">Android應用程式</a></li>
                </ul>
            </nav>
            <nav class="nav-col">
                <p class="footer-heading">企業</p>
                <ul class="footer-nav">
                    <li><a class="footer-link" href="#">關於Omnifood</a></li>
                    <li><a class="footer-link" href="#">企業專區</a></li>
                    <li><a class="footer-link" href="#">烹飪合作夥伴</a></li>
                    <li><a class="footer-link" href="#">職業機會</a></li>
                </ul>
            </nav>
            <nav class="nav-col">
                <p class="footer-heading">資源</p>
                <ul class="footer-nav">
                    <li><a class="footer-link" href="#">食譜目錄</a></li>
                    <li><a class="footer-link" href="#">幫助中心</a></li>
                    <li><a class="footer-link" href="#">隱私權與條款</a></li>
                </ul>
            </nav>

        </div>
    </footer>
</template>

<style scoped>
.container {
    /* width: 100%; */
    max-width: 140rem;
    padding: 0 2rem;
    margin: 0 auto;
}

.grid {
    display: grid;
    gap: 5rem;
    row-gap: 9.6rem;

}

.footer {
    padding: 6rem 0;
    background-color: #fdf2e9;
}

.grid-footer {
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
}

.footer-logo {
    display: block;
    margin-bottom: 4rem;
}

.logo {
    height: 5rem;
}

.logo-col {
    display: flex;
    flex-direction: column;
}

.social-links {
    list-style: none;
    display: flex;
    /* flex-direction: column; */
    gap: 2.4rem;
}

.social-icon {
    height: 3rem;
    width: 3rem;
    color: #555;
}

.copyright {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #767676;
    margin-top: 1rem;
}

.footer-heading {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 4rem;
}

.contacts {
    font-style: normal;
    font-size: 1.4rem;
    line-height: 1.5;
}

.address {
    margin-bottom: 2.4rem;
    font-weight: 500;
    font-size: 1.3rem;
}

.footer-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}

.footer-link:link,
.footer-link:visited {
    text-decoration: none;
    font-size: 1.5rem;
    color: #767676;
    transition: all .3s;
}

.footer-link:hover,
.footer-link:active {
    color: #000;
}

@media (max-width:44em) {
    .grid-footer {
        grid-template-columns: repeat(6, 1fr);
    }

    .logo-col,
    .address-col {
        grid-column: span 3;
    }

    .nav-col {
        grid-row: 1;
        grid-column: span 2;
        margin-bottom: 4.8rem;
    }

    /* .copyright {
        margin-top: auto;
    } */

    .social-icon {
        width: 4rem;
        height: 4rem;
    }
}
</style>