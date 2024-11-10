window.addEventListener('DOMContentLoaded', function() {

    const str = {
        selector: {
            menu: '.sidebar__menu a',
            content: '.main__content',
            submenu: '[data-submenu="submenu"]',
            logo: '.sidebar__logo'
        },
        slider: {
            wrapper:     '.slider',
            photo:       '.slider__photo',
            btnNext:     '.slider__next',
            btnPrev:     '.slider__prev',
            btnClose:    '.slider__close',
            info:        '.slider__info' //? как выводить реальное описание каждой фото?
        },
        about: {
            gryadki:   "В российской глубинке многие люди живут на земле своим хозяйством. Съёмка с воздуха позволила взглянуть на огороды, поля как на абстрактные ковры-&nbspпаттерны, сотканные из кочанов капусты, поливочных шлангов, молодых всходов и распаханных в зиму&nbspчернозёмов. <p>Фотографии сделаны в Воронежской области в 2018-&nbsp2021г.</p> ", 
            salt_lake: "Солёные озера расположены в степи. Здесь начинается зона полупустынь с жарким и засушливым летом. Уже в мае с наступлением жары степь меняет цвет с ярко-зеленого на светло-зеленый и желтый буквально за одну-две недели. Источниками влаги для озер служат родники и небольшие речки, но основной источник – это талые воды. С наступлением лета озера начинают пересыхать. Там, где два-три месяца назад была вода, остаются обширные соляные поля. Соль как бы прорисовывает, проявляет особенности рельефа дна, следы бегущих в озеро весенних ручьев. С высоты это видно особенно хорошо, поэтому часть фотографий сделана с квадрокоптера. Очень удивили и привлекли фактуры, абстрактные «соляные рисунки» на высохшем дне озера, необычный цвет. Почва здесь буро-красного оттенка из-за высокого содержания железа, что придаёт неземной характер ландшафту. Абстракции буквально везде: можно весь вечер исследовать 100-&nbsp200 метров побережья, разглядывая под ногами узоры из соли. Или поднять в небо квадрокоптер и увидеть дно озера как его видят местные орлы – тоже&nbspабстракции, но уже в другом масштабе. <p>Фотографии сделаны на солёных озёрах Эльтон&nbsp(Волгоградская область) и Баскунчак&nbsp(Астраханская область) в период с 2018 по 2021 годы.</p>",
            sea:       "Море всегда производило на меня сильное впечатление. После шумного города от одного вида бескрайнего синего горизонта становится легче и спокойнее. Мне кажется, особенно это ощущаешь не в сезон отпусков: когда нет громкой музыки, толп отдыхающих, и ты ясно слышишь шум прибоя, чаек, запахи моря. Для меня это возможность побыть наедине со стихией, да и просто с самим собой. Иногда&nbspпосле таких прогулок приходит осознание чего-&nbspто&nbspважного. <p>Фотографии сделаны в Коктебеле, Анапе, Геленджике, Евпатории, Адлере, Зеленоградске, на&nbspКуршской косе. 2021-2024г.</p>",
            nature:    "Интересно находить кадры в обычных, на первый взгляд вещах. Подмечать нюансы, метаморфозы природы. В этом плане такая фотография очень доступна – уже просто выехав на речку или в лес, можно найти много интересного."
        },
        html: {
            contact: `<div class="contact">
                        <h2></h2>
                            <form id="formContact">
                                <div class="form__input-box">
                                    <input class="form__input-inp" type="text" id="name" placeholder="Ваше имя:" >
                                    <label class="form__lbl">Пусто</label>
                                </div>
                                <div class="form__input-box">
                                    <input class="form__input-inp" type="text" id="mail" placeholder="Ваш e-mail:" >
                                    <label class="form__lbl">Пусто</label>
                                </div>
                                <div class="form__input-box">
                                    <textarea class="form__textarea" type="text" id="message" cols="30" rows="5" placeholder="Ваше сообщение:"></textarea>
                                    <label class="form__lbl-area">Пусто</label>
                                </div>        
                                    <input class="form__btn" type="submit" name="submit" value="Отправить">
                            </form> 
                        </div>`,
            about: `<div class="about">
                        <img src="/img/avatar.jpg" style='float: right' alt="avatar"></img>
                        <p style="margin-top: 30px;" >Воронин Антон родился в 1990 г., в 2013г. окончил физический факультет Воронежского Государственного Университета.  Начал фотографировать в 2012г., 2012-2013г. проходил обучение в фотошколе Владимира Голуба, 2013-2024г. член фотоклуба «Фотум» г.Воронеж, с 2018г. член Союза Фотохудожников России.</p>
                    
                        <h2 style="margin-top: 50px;" >Ход жизни фотографа (CV)</h2>
                        <h3>2024г.</h3>
                        <p>-Персональная выставка «Грядки» Дом Архитектора, Воронеж.</p>
                        <p>-Финалист Всероссийского фотоконкурса "Сто лет русского фотопейзажа"</p>
                        <p>-Шорт-лист конкурса «Аргус. Фотография среди искусств», серия «Грядки». Сочи.</p>
                        <p>-Выставка "Фотографии, образы, мысли", Краснодар&nbsp(Краснодарский выставочный зал)</p>
                        <p>-Юбилейная выставка Воронежского отделения Союза Фотохудожников России, Воронеж.</p>

                        <h3>2023г.</h3>
                        <p>-Участие в выставке «Осмысленный пейзаж», 18&nbsp-&nbsp29&nbspянваря Краснодар</p>

                        <h3>2022г.</h3>
                        <p>-Конкурс Русского Географического общества  «Самая&nbspкрасивая&nbspстрана&nbsp2022», член экспертной комиссии.</p>
                        <p>-Участие в выставке фотографии и живописи "Край Воронежский - край Петра I", Воронеж.</p>
                        <p>-Фестиваль «Молодые фотографы России». Финалист, серия «Грядки». Выставка в г. Калуга.</p>

                        <h3>2021г.</h3>
                        <p>-Коллективная юбилейная выставка фотоклуба Фотум «Fotum. 10 лет.» ВОХМ имени И.Н.Крамского, Воронеж.</p>
                        <p>-Экофорум фонда «АТР АЭС», Беларусь. Фотограф-преподаватель.</p>

                        <h3>2020г.</h3>
                        <p>-Персональная выставка «Солёные озёра» ВОХМ имени И.Н.Крамского, Воронеж.</p>
                        <p>-Конкурс Русского Географического общества  «Самая красивая страна 2020», член экспертной комиссии.</p>
                        <p>-Фестиваль «Первозданная Россия 2020г.», участие в выставке с серией «Солёные озёра»</p>

                        <h3>2019г.</h3>
                        <p>-Персональная выставка «Природные абстракции». Воронеж, Дом Актёра.</p>
                        <p>-Финалист всероссийского конкурса «Самая красивая страна 2019»</p>
                        <p>-Финалист международного конкурса «Золотая черепаха 2018»</p>
                        <p>-Фестиваль «Молодые фотографы России». Финалист, серия «Первоцветы». Выставка в г. Калуга.</p>
                        <p>-Участие в выставке «Фотографы В.»  СФХР Воронежского отделения, Воронеж.</p>

                        <h3>2016г.</h3>
                        <p>-Конкурс «Memorial Maria Luisa», Испания. Лауреат в номинации «Растения».</p>
                        <p>-Конкурс «Дикая природа России», 3-е место в номинации «Растения». </p>

                        <h3>2015г.</h3>
                        <p>-Персональная выставка «Природа красоты». Воронеж, Дом Актёра. </p>
                        <p>-1 место в конкурсе «ЧБ фотография» журнала «Foto&Video» </p>
                    </div> `
        }
    }

    const menu        = document.querySelectorAll(str.selector.menu),
          content     = document.querySelector(str.selector.content),
          li_submenu  = document.querySelectorAll(str.selector.submenu),
          logo        = this.document.querySelector(str.selector.logo);

    
    
    sliderAuto(content);

    li_submenu.forEach( el => {
        el.addEventListener('click', ()=> {
            el.classList.toggle('active');
            
            let submenu = el.querySelector('.sidebar__menu__submenu');
            //как сделать выборку елем подменю кроме текущего? может как-то через псевдокласс not(селектор)? для реализации "аккордеона"
            let all_submenu = document.querySelectorAll(`.sidebar__menu__submenu`); 

            if( !submenu.style.maxHeight ) {
                all_submenu.forEach( el => {
                    //доделать логику toggle('active'), 
                    // el.parentElement.classList.remove('active');
                    el.style.maxHeight = null }   ); // сначала все свернули (если сделать выборку кроме текущего элемента, то лишнее действие)
                submenu.style.maxHeight = submenu.scrollHeight + 'px'; // затем разветнули конкретный el
            } else submenu.style.maxHeight = null;
        })
    } );

    logo.addEventListener('click', ()=>sliderAuto(content) );

    menu.forEach( el=> {
        el.addEventListener('click', event=> {
            event.stopPropagation();

            switch(el.id) {           
                case 'gryadki': 
                gallery(el);
                break

                case 'salt_lake':
                gallery(el);
                break 

                case 'sea':
                gallery(el);
                break

                case 'nature':
                gallery(el);
                break

                case 'about':  
                innerHTMLitem(content, str.html[el.id]);
                break

                case 'contact': 
                innerHTMLitem(content, str.html[el.id]);
                const form_contact = document.querySelector('#formContact');
                form_contact.addEventListener('submit', () => formSend() );
                break
                // case 'exibition_SoltLake':
                // content.innerHTML = 'exibition_SoltLake';
                // break
                // case 'exibition_2':
                // content.innerHTML = 'exibition_2';
                // break
            }
        })
    } );

    

//от Александра Д: можно сделать потом formSend(form)
    async function formSend() {
        let data = {
        name:     document.getElementById("name").value,
        mail:     document.getElementById("mail").value,
        message:  document.getElementById("message").value
        };

        //валидация инпутов:
        let validInp = 0;
        for( key in data ) { 
            
            if( validateInput(data[key]) ) {
                document.getElementById(`${key}`).classList.add('errorInp');
                document.getElementById(`${key}`).nextElementSibling.classList.add('showLbl');
                document.getElementById(`${key}`).nextElementSibling.innerHTML = validateInput(data[key]);
            } 
            else {
                document.getElementById(`${key}`).classList.remove('errorInp');
                document.getElementById(`${key}`).nextElementSibling.classList.remove('showLbl');
                validInp++;
                console.log(validInp );
                // console.log( key, data[key] );
            }
        };
    
        //отправка сщщбщения:
        if(validInp === 3) {
            //console.log(validInp );
            //повесить анимацию пока идёт отправка (например 2-3 сек):
            let divContact = document.querySelector('.contact');
            divContact.classList.add('loading');
            let animation = document.createElement('i');
            animation.classList.add('animPos', 'fa', 'fa-spinner', 'fa-pulse', 'fa-3x', 'fa-fw');
            divContact.appendChild(animation);

            //проверка на задержку отправки:
            // setTimeout(function(){    
            //     animation.remove();
            //     for( key in data ) document.getElementById(`${key}`).value = '';
            //     console.log('ждём 2 сек...');
            // }, 2000);

            let response = await fetch("mail.php", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                "Content-Type": "application/json; charset=UTF-8"
                }
            });
            let result = await response.text();
            alert(result);    

            animation.remove();
            //очистка инпутов:
            for( key in data ) document.getElementById(`${key}`).value = '';
        }
    }

    function validateInput(inpValue) {

        let isEmpty  = inpValue === '';
        let strLength= inpValue.length;
        let isMeil   = inpValue.indexOf('@'); //выводит первое вхождение символа

        if (isEmpty) {
        return 'Пустой ввод!'; 
        } else if(strLength == 1) {
        return 'Введите больше одного символа';
        } else return 0;
    }

    function gallery(el) {
        content.innerHTML = '';
        content.insertAdjacentHTML("beforeend", `<h2>${el.text}</h2>`  );
        content.insertAdjacentHTML("beforeend", `<div class="main__content__about"> <p>${str.about[el.id]}</p> </div>` );
        for(let i=1; i<=el.dataset.num; i++) //  или el.getAttribute('data-num')
        {// content.innerHTML += `<img src="/img/gryadki/${i}.jpg" alt=""></img>` ; 
            content.insertAdjacentHTML("beforeend", `<div class="main__content__img"><img src="img/${el.id}/${i}.jpg" data-id="${i}" alt="${i}.jpg"></img></div>` );
        }
        //слайдеры накапливаются приповторном запуске, как их очищать? чтоб оставался только один слайдер?
        newSlider('.main__content .main__content__img > img');
    };

    function innerHTMLitem(context, str) {
        context.innerHTML = str;
    }

    function sliderAuto(local) {
        const div = document.createElement('div');
        div.classList.add('slider-auto');
        local.innerHTML='';
        local.append(div);
        for( let i=1; i<=35; i++ ) {
            div.insertAdjacentHTML( "beforeend",`<img src="img/slider_main/${i}.jpg" alt="${i}.jpg"></img>` ) ;
        };
        let slider_auto = new Slider_auto( document.querySelectorAll('.slider-auto img') );
        const tmr = setInterval( ()=> { slider_auto.next() } , 2500 );
        setTimeout( ()=> { clearInterval(tmr) }, 70000 );
    }

    function newSlider(selector) {
        document.querySelectorAll( selector ).forEach( img => {
            img.addEventListener('click', ()=> {
                // img.classList.add('zoom'); //как лучше добавить анимац зуум??
                let imgClick = img.cloneNode(true);
                let objSlider = new Slider({ 
                                            img:         imgClick, 
                                            imgGallery:  '.main__content .main__content__img > img',
                                            // wrapper:     str.slider.wrapper,
                                            // photo:       str.slider.photo,
                                            // btnNext:     str.slider.btnNext,
                                            // btnPrev:     str.slider.btnPrev,
                                            // btnClose:    str.slider.btnClose,
                                            // info:        str.slider.info, //? как выводить реальное описание каждой фото? из img.alt брать???
                                            auto:        'false', //если тру - просто передавать другую обёртку в автослайдер
                                            main: '.main'
                                        });
                // const btnClose    = document.querySelector('.slider__close');
                // const wrapSlider  = document.querySelector('.slider');
                // btnClose, wrapSlider.addEventListener( 'click', ()=> {
                //     console.log(objSlider);
                //     console.log('Удаляем слайдер...');
                //     delete objSlider;
                //     console.log(objSlider); //-удалить не выходит??
                // }  );

            console.log('new slider obj');
            })
        } );
    }

})