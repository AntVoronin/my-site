class Slider_auto {

    i = 0;
    constructor(img) {
        this.img = img;
        this.img[this.i].classList.add('showed'); //показываем первую картинку
    }
    next() {
        this.img[this.i].classList.remove('showed');
        this.i++;

        if (this.i >= this.img.length) {
            this.i = 0;
        }
        this.img[this.i].classList.add('showed');
    }
}
