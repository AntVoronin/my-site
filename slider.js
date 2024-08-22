class Slider {

    i = 0;
    constructor(obj) {
        this.img         = obj.img;
        this.imgGallery  = document.querySelectorAll(obj.imgGallery);
        this.wrapper     = document.querySelector(obj.wrapper);
        this.photo       = document.querySelector(obj.photo);
        this.btnNext     = document.querySelector(obj.btnNext);
        this.btnPrev     = document.querySelector(obj.btnPrev);
        this.btnClose    = document.querySelector(obj.btnClose);
        this.info        = document.querySelector(obj.info);
        this.auto        = obj.auto;

        this.open();    
        this.listeners();
        //автослайдер на главную:
        if(this.auto) {
            //console.log('123');
        }
    }
    
    open() {     
        // if(!this.wrapper.classList.contains('show') ) {} //можно проверить на show
        this.wrapper.classList.add('show'); 
        this.photo.classList.add('show');
        this.photo.append(this.img);
        this.i = +this.img.dataset.id;
        this.scrollBar(0);
    }
    close() {
        this.wrapper.classList.remove('show');
        this.photo.classList.remove('show');
        this.photo.innerHTML = '';
        this.scrollBar(1);
        //как удалить объект слайдера? они множатся!!
    }
    next() {
        if( this.i == this.imgGallery.length )  this.i = 0; //начинаем заново
        this.photo.innerHTML = ''; 
        let img = this.imgGallery[this.i].cloneNode(true);
        this.photo.append( img );
        this.i++;
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
        //выводим текст-описание при наведении на фото:
        this.photo.addEventListener('mouseover', ()=> this.info.classList.add('show')    );
        this.photo.addEventListener('mouseout',  ()=> this.info.classList.remove('show') );
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
        window.addEventListener('keydown',  ev => {
            if(ev.key === "ArrowRight") this.next();
            if(ev.key === "ArrowLeft" ) this.prev();
            if(ev.key === "Escape" )    this.close()
        } );
    }
    scrollBar(bul) {
        if(bul) document.body.style.overflow = ''; //возвращаем полосу прокрутки
        else    document.body.style.overflow = 'hidden'; //убираем 
    }
}
