export function clean($$props, extra_keys) {
  let keys = ["children", "$$scope", "$$slots"].concat(extra_keys)
  const rest = {};
  for (const key of Object.keys($$props)) {
    if (!(keys.includes(key))) {
      rest[key] = $$props[key];
    }
  }
  return rest;
}

export function getOriginalBodyPadding() {
  const style = window ? window.getComputedStyle(document.body, null) : {};

  return parseInt((style && style.getPropertyValue('padding-right')) || 0, 10);
}

export function getScrollbarWidth() {
  let scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

export function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null;
}

export function isBodyOverflowing() {
  return window ? document.body.clientWidth < window.innerWidth : false;
}

export function isObject(value) {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

export function conditionallyUpdateScrollbar() {
  const scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
  const fixedContent = document.querySelectorAll(
    '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
  )[0];
  const bodyPadding = fixedContent
    ? parseInt(fixedContent.style.paddingRight || 0, 10)
    : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

export function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : `col-${colWidth}`;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
}

export function browserEvent(target, ...args) {
  target.addEventListener(...args);

  return () => target.removeEventListener(...args);
}

export function getNewCarouselActiveIndex(direction, items, activeIndex) {
  if (direction === 'prev') {
    return activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  } else if (direction === 'next') {
    return activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  }
}

function toVal(mix) {
  var k, y, str = '';
  if (mix) {
    if (typeof mix === 'object') {
      if (Array.isArray(mix)) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k] && (y = toVal(mix[k]))) {
            str && (str += ' ');
            str += y;
          }
        }
      } else {
        for (k in mix) {
          if (mix[k] && (y = toVal(k))) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else if (typeof mix !== 'boolean' && !mix.call) {
      str && (str += ' ');
      str += mix;
    }
  }
  return str;
}

export function clsx() {
  let i = 0, x, str = '';
  while (i < arguments.length) {
    if (x = toVal(arguments[i++])) {
      str && (str += ' ');
      str += x
    }
  }
  return str;
}

export function fragment(node) {
  node.parentElement.appendChild(document.adoptNode(node).content);
}

import {bubble, listen} from 'svelte/internal';

export function forwardEventsBuilder(component, additionalEvents = []) {
  const events = [
    'focus', 'blur', 'change', 'input', 'update','submit',
    'fullscreenchange', 'fullscreenerror', 'scroll',
    'cut', 'copy', 'paste',
    'keydown', 'keypress', 'keyup',
    'auxclick', 'click', 'contextmenu', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup', 'pointerlockchange', 'pointerlockerror', 'select', 'wheel',
    'drag', 'dragend', 'dragenter', 'dragstart', 'dragleave', 'dragover', 'drop',
    'touchcancel', 'touchend', 'touchmove', 'touchstart',
    'pointerover', 'pointerenter', 'pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'pointerout', 'pointerleave', 'gotpointercapture', 'lostpointercapture',
    ...additionalEvents
  ];

  function forward(e) {
    bubble(component, e);
  }

  return node => {
    const destructors = [];

    for (let i = 0; i < events.length; i++) {
      destructors.push(listen(node, events[i], forward));
    }

    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
      }
    }
  };
}

export const getColorClass = color => {
  const colorArray = color.split(' ');
  const specialColors = [
    'danger',
    'warning',
    'success',
    'info',
    'default',
    'primary',
    'secondary',
    'elegant',
    'stylish',
    'unique',
    'special'
  ];
  let colorClasses = '';

  colorArray.forEach(color => {
    if (specialColors.includes(color)) {
      if (color.includes('dark')) {
        color.replace('-', '-color-');
        colorClasses += `${color} `;
      } else {
        colorClasses += `${color}-color`;
      }
    } else {
      colorClasses += `${color} `;
    }
  });

  return colorClasses;
};
