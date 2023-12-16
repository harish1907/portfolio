// src/WowComponent.tsx
interface WowConfig {
  boxClass: string;
  animateClass: string;
  offset: number;
  mobile: boolean;
}

class WowComponent {
  private element: HTMLElement | null = null;
  private boxes: any;
  private scrolled: boolean = true;
  private interval: number | null = null;

  private config: WowConfig;

  constructor(options: WowConfig) {
    this.config = { ...this.defaults, ...options };
    this.boxes = document.getElementsByClassName(this.config.boxClass);
    this.init();
  }

  private defaults: WowConfig = {
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
  };

  private applyStyle(box: Element, hidden?: boolean) {
    const duration = box.getAttribute("data-wow-duration") || "";
    const delay = box.getAttribute("data-wow-delay") || "";
    const iteration = box.getAttribute("data-wow-iteration") || "";

    if (box instanceof HTMLElement) {
      box.setAttribute(
        "style",
        this.customStyle(hidden, duration, delay, iteration)
      );
    }
  }

  private customStyle(
    hidden?: boolean,
    duration?: string,
    delay?: string,
    iteration?: string
  ) {
    let style = hidden
      ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;"
      : "visibility: visible;";
    if (duration) {
      style += `-webkit-animation-duration: ${duration}; -moz-animation-duration: ${duration}; animation-duration: ${duration};`;
    }
    if (delay) {
      style += `-webkit-animation-delay: ${delay}; -moz-animation-delay: ${delay}; animation-delay: ${delay};`;
    }
    if (iteration) {
      style += `-webkit-animation-iteration-count: ${iteration}; -moz-animation-iteration-count: ${iteration}; animation-iteration-count: ${iteration};`;
    }
    return style;
  }

  private offsetTop(element: any) {
    let top = element.offsetTop;
    while ((element = element.offsetParent as HTMLElement)) {
      top += element.offsetTop;
    }
    return top;
  }

  private isVisible(box: Element) {
    const offset: any = box.getAttribute("data-wow-offset") || this.config.offset;
    const viewTop = window.pageYOffset;
    const viewBottom = viewTop + (this.element?.clientHeight || 0) - offset;
    const top = this.offsetTop(box);
    const bottom = top + (box.clientHeight || 0);
    return top <= viewBottom && bottom >= viewTop;
  }

  private scrollHandler() {
    return (this.scrolled = true);
  }

  private scrollCallback() {
    if (this.scrolled) {
      this.scrolled = false;
      this.boxes = Array.from(this.boxes).filter((box) => {
        if (!(box instanceof Element)) {
          return false;
        }
        if (this.isVisible(box)) {
          this.show(box);
          return false;
        }
        return true;
      });
  
      if (!this.boxes.length) {
        this.stop();
      }
    }
  }

  private show(box: Element) {
    this.applyStyle(box);
    box.className = `${box.className} ${this.config.animateClass}`;
  }

  private resetStyle() {
    Array.from(this.boxes).forEach((box) => {
      if (box instanceof HTMLElement) {
        box.setAttribute("style", "visibility: visible;");
      }
    });
  }

  private start() {
    this.element = window.document.documentElement;
    this.resetStyle();
    window.addEventListener("scroll", this.scrollHandler.bind(this), false);
    window.addEventListener("resize", this.scrollHandler.bind(this), false);
    this.interval = setInterval(this.scrollCallback.bind(this), 50);
  }

  private stop() {
    window.removeEventListener("scroll", this.scrollHandler.bind(this), false);
    window.removeEventListener("resize", this.scrollHandler.bind(this), false);
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
  }

  private init() {
    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      this.start();
    } else {
      document.addEventListener("DOMContentLoaded", this.start.bind(this));
    }
  }
}

export default WowComponent;
