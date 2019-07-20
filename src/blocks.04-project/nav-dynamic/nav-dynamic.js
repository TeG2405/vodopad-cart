import Swiper from 'swiper';

const Instances = [];
const ClassName = {
  BLOCK: 'nav-dynamic',
  SLIDER: 'nav-dynamic__slider',
  WRAPPER: 'nav-dynamic__list',
  ITEM: 'nav-dynamic__li',
  CONTROL: 'nav-dynamic__control',
  CONTROL_PREV: 'nav-dynamic__control_prev',
  CONTROL_NEXT: 'nav-dynamic__control_next',
};

class NavDynamic {
  constructor(elem) {
    Instances.push(this);
    this.block = elem;
    this.swiper = new Swiper(this.block.getElementsByClassName(ClassName.SLIDER), {
      slidesPerView: 'auto',
      spaceBetween: 0,
      wrapperClass: ClassName.WRAPPER,
      slideClass: ClassName.ITEM,
      navigation: {
        nextEl: this.block.getElementsByClassName(ClassName.CONTROL_NEXT),
        prevEl: this.block.getElementsByClassName(ClassName.CONTROL_PREV),
        disabledClass: `${ClassName.CONTROL}_disabled`,
        hiddenClass: `${ClassName.CONTROL}_hidden`,
      },
    });
  }

  static getAllInstances() {
    return Instances;
  }

  static getAllBlocks() {
    return Array.from(document.getElementsByClassName(ClassName.BLOCK));
  }

  static initAllBlocks() {
    let Instances = NavDynamic.getAllInstances();
    let Blocks = NavDynamic.getAllBlocks();
    let BlocksInited = Instances.map((ins) => ins.block);
    let BlockNoInited = Blocks.filter((block) => BlocksInited.indexOf(block) < 0);
    BlockNoInited.forEach((item) => new NavDynamic(item));
    return Instances;
  }
}

// Инициашизация;
NavDynamic.initAllBlocks();

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.NavDynamic = NavDynamic;
export default NavDynamic;
