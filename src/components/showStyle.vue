<template>
    <div class="outSideBox">
        <div class="inSideBox">
            <div>
                <h2>您喜愛的風格?</h2>
                <div>
                    <a href="" class="showMore">查看更多</a>
                </div>
            </div>
            <div class="picBox">
                <div>
                    <span>抽象派</span>
                    <a href="">
                        <img src="../img/style/01.jpg" alt="">
                    </a>
                </div>
                <div>
                    <span>抽象派</span>
                    <a href="">
                        <img src="../img/style/01.jpg" alt="">
                    </a>
                </div>
                <div class="fourBox">
                    <div>
                        <span>抽象派</span>
                        <a href="">
                            <img src="../img/style/01.jpg" alt="">
                        </a>
                    </div>
                    <div>
                        <span>抽象派</span>
                        <a href="">
                            <img src="../img/style/01.jpg" alt="">
                        </a>
                    </div>
                    <div>
                        <span>抽象派</span>
                        <a href="">
                            <img src="../img/style/01.jpg" alt="">
                        </a>
                    </div>
                    <div>
                        <span>抽象派</span>
                        <a href="">
                            <img src="../img/style/01.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.outSideBox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    .inSideBox {
        width: 75%;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;

            h2 {
                margin: 1rem 0;
                font-weight: 600;
                letter-spacing: .2rem;
                font-size: 2.4rem;
            }

            .showMore {
                width: 100%;
            }

            .showMore::after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: var(--dark--gray--color);
                position: absolute;
                bottom: -5px;
                right: 0;
            }
        }

        .picBox {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 1rem;

            & div {
                overflow: hidden;
                position: relative;

                &>span {
                    position: absolute;
                    bottom: 1rem;
                    left: 1rem;
                    color: #fff;
                    font-size: 2rem;
                    z-index: 9999;
                }

                a {
                    width: 100%;
                }

                a>img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: 0.5s;

                    &:hover {
                        transform: scale(1.05);
                    }
                }
            }

            .fourBox {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
                gap: 1rem;
                line-height: 0;

                &>div>span {

                    position: absolute;
                    bottom: 2rem;
                    left: 1rem;
                    color: #fff;
                    font-size: 2rem;
                    z-index: 9999;

                }
            }
        }
    }
}
</style>