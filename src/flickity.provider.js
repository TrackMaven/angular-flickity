export class FlickityConfigProvider {

    constructor() {
        // Define Flickity defaults
        this.accessibility      = true;
        this.autoPlay           = false;
        this.cellAlign          = 'center';
        this.cellSelector       = undefined;
        this.contain            = false;
        this.draggable          = true;
        this.freeScroll         = false;
        this.freeScrollFriction = false;
        this.selectedAttraction = .025;
        this.friction           = .28;
        this.initialIndex       = 0;
        this.lazyLoad           = true;
        this.percentPosition    = true;
        this.prevNextButtons    = true;
        this.pageDots           = true;
        this.resize             = true;
        this.rightToLeft        = false;
        this.setGallerySize     = true;
        this.watchCSS           = false;
        this.wrapAround         = false;
        this.imagesLoaded       = true;
        this.asNavFor           = true;

        // angular-flickity defaults
        this.defaultEvents      = [
            'cellSelect',
            'settle',
        ];
    }




    $get() {
        return this;
    }


}

