<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search</title>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="icon" type="image/svg+xml" href="${pageContext.request.contextPath}/img/svg/Ozi_icon.svg">
  <link rel="icon" type="image/png" href="${pageContext.request.contextPath}/favicon/Ozi__iconPNG.png">
  <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="css/temp.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,400;0,700;1,400&family=Inter&family=Lato:ital,wght@0,300;0,400;1,300&family=Red+Hat+Text:wght@500&display=swap" rel="stylesheet">
    
    </head>
    <body class="element">
        <div>
            <jsp:include page="./components/header.jsp" />
        </div>
        <!-- header end -->
        <main class="main">
            <section class="intro">
                 <!-- info start -->
                <jsp:include page="./components/navbar.jsp" />
                <!-- info end -->

                <!-- search-results start -->
                <div class="search__wrap">
                    <div class="result__window">
                        <div class="search__results">
                            <div class="search__result">
                                <div class="time__place">
                                    <div class="post__time date">People</div>
                                </div>
                                <div class="people element">

                                    <div class="user__info">
                                        <a class="start__info" href="#">
                                            <div class="info-s__item">
                                                <div class="info__img">
                                                    <img class="info__pic" src="./img/Dva.jpg" width="80" height="80" alt="user photo">
                                                </div>
                                            </div>
                                            <div class="info-s__item">
                                                <div class="info__item__center">
                                                    <div class="info__item__name">
                                                        Stanislav Zaycev
                                                    </div>
                                                    <div class="info__status">
                                                        I love terraria
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        
                                        <div class="info-s__item">
                                            <div class="info__button">
                                                <button id="button1" class="change-status" data-friend-id="1" onclick="friendFunction()">
                                                    delete friend
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="user__info">
                                        <a class="start__info" href="#">
                                            <div class="info-s__item">
                                                <div class="info__img">
                                                    <img class="info__pic" src="./img/Dva.jpg" width="80" height="80" alt="user photo">
                                                </div>
                                            </div>
                                            <div class="info-s__item">
                                                <div class="info__item__center">
                                                    <div class="info__item__name">
                                                        Stanislav Zaycev
                                                    </div>
                                                    <div class="info__status">
                                                        I love terraria
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        
                                        <div class="info-s__item">
                                            <div class="info__button">
                                                <button id="button2" class="change-status" data-friend-id="2" onclick="friendFunction()">
                                                    add a friend
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="user__info">
                                        <a class="start__info" href="#">
                                            <div class="info-s__item">
                                                <div class="info__img">
                                                    <img class="info__pic" src="./img/Dva.jpg" width="80" height="80" alt="user photo">
                                                </div>
                                            </div>
                                            <div class="info-s__item">
                                                <div class="info__item__center">
                                                    <div class="info__item__name">
                                                        Stanislav Zaycev
                                                    </div>
                                                    <div class="info__status">
                                                        I love terraria
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        
                                        <div class="info-s__item">
                                            <div class="info__button">
                                                <button id="button3" class="change-status" data-friend-id="3" onclick="friendFunction()">
                                                    add a friend
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="user__info">
                                        <a class="start__info" href="#">
                                            <div class="info-s__item">
                                                <div class="info__img">
                                                    <img class="info__pic" src="./img/Dva.jpg" width="80" height="80" alt="user photo">
                                                </div>
                                            </div>
                                            <div class="info-s__item">
                                                <div class="info__item__center">
                                                    <div class="info__item__name">
                                                        Stanislav Zaycev
                                                    </div>
                                                    <div class="info__status">
                                                        I love terraria
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="info-s__item">
                                            <div class="info__button">
                                                <button id="button4" class="change-status" data-friend-id="4" onclick="friendFunction()">
                                                    add a friend
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="user__info">
                                        <a class="start__info" href="#">
                                            <div class="info-s__item">
                                                <div class="info__img">
                                                    <img class="info__pic" src="./img/Dva.jpg" width="80" height="80" alt="user photo">
                                                </div>
                                            </div>
                                            <div class="info-s__item">
                                                <div class="info__item__center">
                                                    <div class="info__item__name">
                                                        Stanislav Zaycev
                                                    </div>
                                                    <div class="info__status">
                                                        I love terraria
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="info-s__item">
                                            <div class="info__button">
                                                <button id="button5" class="change-status" data-friend-id="4" onclick="friendFunction()">
                                                    add a friend
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="user__info">
                                        <a class="start__info" href="#">
                                            <div class="info-s__item">
                                                <div class="info__img">
                                                    <img class="info__pic" src="./img/Dva.jpg" width="80" height="80" alt="user photo">
                                                </div>
                                            </div>
                                            <div class="info-s__item">
                                                <div class="info__item__center">
                                                    <div class="info__item__name">
                                                        Stanislav Zaycev
                                                    </div>
                                                    <div class="info__status">
                                                        I love terraria
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="info-s__item">
                                            <div class="info__button">
                                                <button id="button6" class="change-status" data-friend-id="4" onclick="friendFunction()">
                                                    add a friend
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                
                            
                            </div>
                        </div>
                    </div>
                </div>
                <!-- search-results end -->

            </section>

        </main>
            

    </body>
    <footer class="footer">
        <jsp:include page="components/footer.jsp"/>
    </footer>
    <script src="./js/main.js"></script>
</html>