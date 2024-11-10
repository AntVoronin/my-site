class Slider {

    i = 0;
    constructor(obj) {

        this.img         = obj.img;
        this.imgGallery  = document.querySelectorAll(obj.imgGallery);
        this.auto        = obj.auto;
        this.main        = document.querySelector(obj.main);

        this.slider = document.createElement('div');
        this.slider.classList.add('slider');
        this.slider.insertAdjacentHTML("beforeend", ` 
                <div class="slider__close">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <div class="slider__prev">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div class="slider__next">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
                <div class="slider__photo"></div>
                <div class="slider__info">
                </div> `  );
        this.main.appendChild(this.slider);

        console.log( 'this = ', this);
        
        this.wrapper     = document.querySelector('.slider');
        this.photo       = document.querySelector('.slider__photo');
        this.btnNext     = document.querySelector('.slider__next');
        this.btnPrev     = document.querySelector('.slider__prev');
        this.btnClose    = document.querySelector('.slider__close');
        this.info        = document.querySelector('.slider__info');

        this.open(this.img);    
        this.listeners();

        //автослайдер на главную (пока не работает):
        if(this.auto) {
            //console.log('123');
        }
    }
    
    open(image) {     
        // this.wrapper.classList.add('show'); 
        // this.photo.classList.add('show');
        this.photo.append(image);
        this.i = +image.dataset.id;
        this.scrollBar(0);
    }
    close() {
        //надо по закрытию удалять слайдер, а в конструкторе создавать при мозд нов объекта:
        // this.wrapper.classList.remove('show');
        // this.photo.classList.remove('show');
        //this.photo.innerHTML = '';

        this.slider.remove();
        this.scrollBar(1);
        //delete this;
        //delete(Slider);
        //как удалить объект слайдера? они множатся!!
    }
    next() {
        if( this.i == this.imgGallery.length )  this.i = 0; //начинаем заново
        this.photo.innerHTML = ''; 
        let img = this.imgGallery[this.i].cloneNode(true);
        this.photo.append( img );
        this.i++;
        console.log('slide_next..');
    }
    prev() { 
        this.i--;
        if( this.i == 0 )  this.i = this.imgGallery.length; //начинаем заново
        this.photo.innerHTML = ''; 
        let img = this.imgGallery[this.i-1].cloneNode(true);
        this.photo.append( img );
     }

    listeners() {
        this.photo.addEventListener('click', (ev)=> {
            ev.stopPropagation(); 
            console.log('zoming image...');
        });
        this.photo.addEventListener('contextmenu', event => event.preventDefault() ); //отменили контекст меню 
        //выводим текст-описание при наведении на фото:
        // this.photo.addEventListener('mouseover', ()=> this.info.classList.add('show')    );
        // this.photo.addEventListener('mouseout',  ()=> this.info.classList.remove('show') );
        //как повесить один обработчик на разные элементы?
        this.wrapper.addEventListener( 'click',  ()=> this.close() );
        this.btnClose.addEventListener('click',  ()=> this.close() );

        this.btnNext.addEventListener('click',  ev => {
            ev.stopPropagation(); //остановили всплытие к wrapper, чтоб не сворачивался слайдер при клике
            this.next();
        } );
        this.btnPrev.addEventListener('click',  ev => {
            ev.stopPropagation(); 
            this.prev();
        } );
        document.addEventListener('keyup',  ev => {
            if(ev.code === "ArrowRight") this.next();
            if(ev.code === "ArrowLeft" ) this.prev();
            if(ev.code === "Escape" )    this.close();
            //if(ev.code === "KeyZ"   )     this.close();
        } );
    }
    scrollBar(bul) {
        if(bul) document.body.style.overflow = ''; //возвращаем полосу прокрутки
        else    document.body.style.overflow = 'hidden'; //убираем 
    }
}
