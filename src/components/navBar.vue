<template>
    <header>
        <a href="">
            <img src="../img/logo.png" alt="">
        </a>

        <ul class="dropdowns">
            <li class="dropdowns_li">
                    <span>知名畫家</span>
                    <ul>
                        <li>
                            <RouterLink to="/painterPage">達文西</RouterLink>
                        </li>
                        <li>收到的讚</li>
                        <li>我的消息</li>
                    </ul>
            </li>
            <li class="dropdowns_li">
                <span>藝術作品</span>
                <ul>
                    <li>回覆我的</li>
                    <li>收到的讚</li>
                    <li>我的消息</li>
                </ul>
            </li>
            <li class="dropdowns_li">
                <span>藝術新聞</span>
                <ul>
                    <li>回覆我的</li>
                    <li>收到的讚</li>
                    <li>我的消息</li>
                </ul>
            </li>
            <li class="dropdowns_li">
                <span>線上展區</span>
                <ul>
                    <li>回覆我的</li>
                    <li>收到的讚</li>
                    <li>我的消息</li>
                </ul>
            </li>
        </ul>

        <div>
            <a href=""><i class="bi bi-search"></i></a>
            <a href=""><i class="bi bi-person"></i></a>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css");

header {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


    &>a:nth-child(1) {
        display: flex;

        img {
            width: 200px;
        }
    }

    & div:nth-child(3) {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20%;

        a:hover {
            animation: float 0.7s infinite ease;
        }

        a:nth-child(1)>i {
            font-size: 20px;
        }

        a:nth-child(2)>i {
            font-size: 26px;
        }
    }
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }

    100% {
        transform: translateY(0);
    }
}

.dropdowns {
    display: flex;
    justify-content: center;
    z-index: 9999;
}

.dropdowns_li {
    background-color: transparent;
    width: 130px;
    height: 65px;
    text-align: center;
    line-height: 65px;
    transition: .5s;
    cursor: pointer;
    position: relative;
}

.dropdowns_li::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--orange--color);
    width: 130px;
    height: 3px;
    opacity: 0;
    transition: 0.5s;
}

.dropdowns_li:hover {
    background-color: var(--very--low--gray--color);
}

.dropdowns_li:hover::after {
    opacity: 1;
}

.dropdowns_li li:hover {
    background-color: var(--dark--gray--color);
}

.dropdowns_li ul li {
    height: 0;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(-5px);
    background-color: var(--low--gray--color);
}

.dropdowns_li ul li a {
    display: block;
    width: 100%;
    height: 100%;
}

.dropdowns_li:hover li {
    height: 65px;
    opacity: 1;
    transform: translateY(0);
}
</style>