window.addEventListener('DOMContentLoaded', function() {

    let menu       = document.querySelectorAll('.sidebar_menu a'),
        content    = document.querySelector('.content'),
        li_submenu = document.querySelectorAll('[data-sub_menu="sub_menu"]'),
        logo       = this.document.querySelector('.sidebar_logo');
    
    const textAbout = {
        gryadki:   "В российской глубинке многие люди живут на земле своим хозяйством. Съёмка с воздуха позволила взглянуть на огороды, поля как на абстрактные ковры-паттерны, сотканные из кочанов капусты, поливочных шлангов, молодых всходов и распаханных в зиму чернозёмов. <p>Фотографии сделаны в Воронежской области в 2018-2021г.</p> ",
        salt_lake: "Солёные озера расположены в степи. Здесь начинается зона полупустынь с жарким и засушливым летом. Уже в мае с наступлением жары степь меняет цвет с ярко-зеленого на светло-зеленый и желтый буквально за одну-две недели. Источниками влаги для озер служат родники и небольшие речки, но основной источник – это талые воды. С наступлением лета озера начинают пересыхать. Там, где два-три месяца назад была вода, остаются обширные соляные поля. Соль как бы прорисовывает, проявляет особенности рельефа дна, следы бегущих в озеро весенних ручьев. С высоты это видно особенно хорошо, поэтому часть фотографий сделана с квадрокоптера. Очень удивили и привлекли фактуры, абстрактные «соляные рисунки» на высохшем дне озера, необычный цвет. Почва здесь буро-красного оттенка из-за высокого содержания железа, что придаёт неземной характер ландшафту. Абстракции буквально везде: можно весь вечер исследовать 100-200 метров побережья, разглядывая под ногами узоры из соли. Или поднять в небо квадрокоптер и увидеть дно озера как его видят местные орлы – тоже абстракции, но уже в другом масштабе. <p>Фотографии сделаны на солёных озёрах Эльтон (Волгоградская область) и Баскунчак (Астраханская область) в период с 2018 по 2021 годы.</p>",
        sea:       "Море всегда производило на меня сильное впечатление. После шумного города от одного вида бескрайнего синего горизонта становится легче и спокойнее. Мне кажется, особенно это ощущаешь не в сезон отпусков: когда нет громкой музыки, толп отдыхающих, и ты ясно слышишь шум прибоя, чаек, запахи моря. Для меня это возможность побыть наедине со стихией, да и просто с самим собой. Иногда после таких прогулок приходит осознание чего-то важного. <p>Фотографии сделаны в Коктебеле, Анапе, Геленджике, Евпатории, Адлере, Зеленоградске, на Куршской косе. 2021-2024г.</p>"
    }
    
    autoSlider();

    li_submenu.forEach( el => {
        el.addEventListener('click', function() {
            el.classList.toggle('active');
            let submenu = el.querySelector('.sidebar_submenu');
            if( !submenu.style.maxHeight ) {
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            } else submenu.style.maxHeight = null;
        })
    } );

    logo.addEventListener('click', function(event) {
        // если одно главное фото:
        // content.insertAdjacentHTML( "beforeend",`<div class="mainImg"> <img src="/img/main_1.jpg" alt="main_1.jpg"></img> </div>` ) ;
        autoSlider();
    })

    menu.forEach( el=> {
        el.addEventListener('click', function(event) {
            event.stopPropagation();
            // console.log(event.target);
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

                case 'cv':  
                cv();
                break

                case 'contact': 
                contact()
                break

                case 'exibition_SoltLake':
                content.innerHTML = 'exibition_SoltLake';
                break

                case 'exibition_2':
                content.innerHTML = 'exibition_2';
                break
            }

        })
    } );
    
    function gallery(el) {
        content.innerHTML = '';
        content.insertAdjacentHTML("beforeend", `<div class="wrap_text"> <p>${textAbout[el.id]}</p> </div>` );
        for(let i=1; i<=el.dataset.num; i++) //  или el.getAttribute('data-num')
        {// content.innerHTML += `<img src="/img/gryadki/${i}.jpg" alt=""></img>` ; 
            content.insertAdjacentHTML("beforeend", `<div class="wrap_img"><img src="/img/${el.id}/${i}.jpg" data-id="${i}" alt="${i}.jpg"></img></div>` );
        }
        document.querySelectorAll('.content .wrap_img > img').forEach( img => {
                                                    img.addEventListener('click', function(event) {
                                                        console.log(event.target.scrollHeight);
                                                        // img.classList.add('zoom'); //как лучше добавить анимац зуум??
                                                        let imgClick = img.cloneNode(true);
                                                        let slider = new Slider({ 
                                                                                    img:         imgClick, 
                                                                                    imgGallery:  '.content .wrap_img > img',
                                                                                    wrapper:     '.wrapper',
                                                                                    photo:       '.photo',
                                                                                    btnNext:     '.next',
                                                                                    btnPrev:     '.prev',
                                                                                    btnClose:    '.close',
                                                                                    info:        '.wrapper__info', //? как выводить реальное описание каждой фото?
                                                                                    auto:        'false'
                                                                                });
                                                    })
                                                } );
    };

    function cv() {
        content.innerHTML = `<div class="cv">
                                <h2>CV фотографа:</h2>
                                
                                <h3>2024г.</h3>
                                <p>-Шорт-лист конкурса «Аргус. Фотография среди искусств», серия «Грядки». Сочи.</p>
                                <p>-Выставка "Фотографии, образы, мысли", Краснодар. (Краснодарский выставочный зал)</p>
                                <p>-Юбилейная выставка Воронежского отделения Союза Фотохудожников России, Воронеж.</p>

                                <h3>2023г.</h3>
                                <p>-Участие в выставке «Осмысленный пейзаж», 18-29 января Краснодар</p>

                                <h3>2022г.</h3>
                                <p>-Конкурс Русского Географического общества  «Самая красивая страна 2022», член экспертной комиссии.</p>
                                <p>-Выставка фотографии и живописи "Край Воронежский - край Петра I", выставочный зал союза художников, Воронеж.</p>
                                <p>-Фестиваль «Молодые фотографы России». Финалист, серия «Грядки». Выставка в г. Калуга.</p>

                                <h3>2021г.</h3>
                                <p>-Коллективная юбилейная выставка фотоклуба Фотум «Fotum. 10 лет.» ВОХМ имени И.Н.Крамского, Воронеж.</p>
                                <p>-Экофорум фонда «АТР АЭС», Беларусь. Фотограф-преподаватель.</p>

                                <h3>2020г.</h3>
                                <p>-Персональная выставка «Солёные озёра» ВОХМ имени И.Н.Крамского, Воронеж.</p>
                                <p>-Конкурс Русского Географического общества  «Самая красивая страна 2020», член экспертной комиссии.</p>
                                <p>-Выставка, фестиваль «Первозданная Россия 2020г.»</p>

                                <h3>2019г.</h3>
                                <p>-Персональная выставка «Природные абстракции». Воронеж, Дом Актёра.</p>
                                <p>-Финалист всероссийского конкурса «Самая красивая страна 2019»</p>
                                <p>-Финалист международного конкурса «Золотая черепаха 2018»</p>
                                <p>-Фестиваль «Молодые фотографы России». Финалист, серия «Первоцветы». Выставка в г. Калуга.</p>
                            </div> `;
    };

    function contact() {
        content.innerHTML = `<div class="contact">
                                <div class="contact">
                                    <h2>Связаться со мной</h2>
                                    <form action="/">
                                        <div class="row">
                                            <div class="form-group">
                                                <label for="name">Ваше имя:</label> 
                                                <input type="text" id="name" placeholder="...имя...">
                                            </div>
                                            <div class="form-group">
                                                <label for="mail">Ваш e-mail:</label> 
                                                <input type="text" id="mail" placeholder="...mail...">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="message">Ваше сообщение:</label>
                                            <textarea type="text" id="message" cols="30" rows="5"></textarea>
                                        </div>        
                                            <input class="btn" type="submit" value="Связаться!">
                                    </form> 
                                </div>
                            </div>`
    };

    function autoSlider() {
        let div = document.createElement('div');
        div.classList.add('sliderMain');
        content.innerHTML='';
        content.append(div);
        for( let i=1; i<=35; i++ ) {
            div.insertAdjacentHTML( "beforeend",`<img src="/img/slider_main/${i}.jpg" alt="${i}.jpg"></img>` ) ;
        };
        let slider_auto = new Slider_auto( document.querySelectorAll('.sliderMain img') );
        const tmr = setInterval( function() { slider_auto.next() } , 2500 );
        setTimeout( ()=> { clearInterval(tmr) }, 70000 );
    }

})