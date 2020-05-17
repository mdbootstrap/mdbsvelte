<script context="module">
  let openCount = 0;
</script>
<script>
  import {onDestroy, onMount, afterUpdate} from 'svelte';
  import {fade as fadeTransition, fly as flyTransition} from 'svelte/transition';

  import {
    conditionallyUpdateScrollbar,
    getOriginalBodyPadding,
    setScrollbarWidth,
    clean, browserEvent, clsx, forwardEventsBuilder
  } from './utils';

  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);

  let className = '';
  export {className as class};
  export let isOpen;
  export let autoFocus = true;
  export let centered = false;
  export let duration = 500;
  export let backdropDuration = duration;
  export let scrollable = false;
  export let size = '';
  export let toggle = undefined;
  export let labelledBy = '';
  export let backdrop = true;
  export let onEnter = undefined;
  export let onExit = undefined;
  export let onOpened = () => {
  };
  export let onClosed = () => {
  };
  export let wrapClassName = '';
  export let modalClassName = '';
  export let backdropClassName = '';
  export let contentClassName = '';
  export let fade = true;
  export let zIndex = 1050;
  export let unmountOnClose = true;
  export let returnFocusAfterClose = true;
  export let displacementX = 0;
  export let displacementY = -300;
  export let side;
  export let position = '';
  export let fullHeight;
  export let frame;
  const props = clean($$props, ["isOpen", "autoFocus", "centered", "duration", "backdropDuration", "scrollable",
    "size", "toggle", "labelledBy", "toggle", "onEnter", "onExit", "onOpened", "onClosed", "wrapClassName",
    "modalClassName", "backdropClassName", "contentClassName", "fade", "zIndex", "unmountOnClose",
    "returnFocusAfterClose", "side", "position", "frame", "backdrop"]);

  let hasOpened = false;
  let _isMounted = false;
  let _triggeringElement;
  let _originalBodyPadding;
  let _lastIsOpen = isOpen;
  let _lastHasOpened = hasOpened;
  let _dialog;
  let _mouseDownElement;
  let _removeEscListener;
  let modalClasses;

  onMount(() => {
    if (isOpen) {
      init();
      hasOpened = true;
    }

    if (typeof onEnter === 'function') {
      onEnter();
    }

    if (hasOpened && autoFocus) {
      setFocus();
    }
  });

  onDestroy(() => {
    if (typeof onExit === 'function') {
      onExit();
    }

    destroy();
    if (hasOpened) {
      close();
    }
  });

  afterUpdate(() => {
    if (isOpen && !_lastIsOpen) {
      init();
      hasOpened = true;
    }

    if (autoFocus && hasOpened && !_lastHasOpened) {
      setFocus();
    }

    _lastIsOpen = isOpen;
    _lastHasOpened = hasOpened;
  });

  function setFocus() {
    if (
      _dialog &&
      _dialog.parentNode &&
      typeof _dialog.parentNode.focus === 'function'
    ) {
      _dialog.parentNode.focus();
    }
  }

  function init() {
    try {
      _triggeringElement = document.activeElement;
    } catch (err) {
      _triggeringElement = null;
    }

    _originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();
    if (openCount === 0) {
      document.body.className = clsx(document.body.className, 'modal-open');
    }

    ++openCount;
    _isMounted = true;
  }

  function manageFocusAfterClose() {
    if (_triggeringElement) {
      if (
        typeof _triggeringElement.focus === 'function' &&
        returnFocusAfterClose
      ) {
        _triggeringElement.focus();
      }

      _triggeringElement = null;
    }
  }

  function destroy() {
    manageFocusAfterClose();
  }

  function close() {
    if (openCount <= 1) {
      const modalOpenClassName = 'modal-open';
      const modalOpenClassNameRegex = new RegExp(
        `(^| )${modalOpenClassName}( |$)`
      );
      document.body.className = document.body.className
        .replace(modalOpenClassNameRegex, ' ')
        .trim();
    }

    manageFocusAfterClose();
    openCount = Math.max(0, openCount - 1);

    setScrollbarWidth(_originalBodyPadding);
  }

  function handleBackdropClick(e) {
    if (e.target === _mouseDownElement) {
      e.stopPropagation();
      if (!isOpen || !backdrop) {
        return;
      }

      const backdropElem = _dialog ? _dialog.parentNode : null;
      if (backdropElem && e.target === backdropElem && toggle) {
        toggle(e);
      }
    }
  }

  function onModalOpened() {
    _removeEscListener = browserEvent(document, 'keydown', event => {
      if (event.key && event.key === 'Escape') {
        toggle(event);
      }
    });

    onOpened();
  }

  function onModalClosed() {
    onClosed();

    if (_removeEscListener) {
      _removeEscListener();
    }

    if (unmountOnClose) {
      destroy();
    }
    close();
    if (_isMounted) {
      hasOpened = false;
    }
    _isMounted = false;
  }

  function handleBackdropMouseDown(e) {
    _mouseDownElement = e.target;
  }

  const dialogBaseClass = 'modal-dialog';

  $: classes = clsx(dialogBaseClass, className,
    {
      [`modal-${size}`]: size,
      [`${dialogBaseClass}-centered`]: centered,
      [`${dialogBaseClass}-scrollable`]: scrollable,
      'modal-side': side,
      'modal-full-height': fullHeight,
      'modal-frame': frame,
      [`modal-${position}`]: position
    });

  if (position.indexOf("right") !== -1) {
    displacementX = 300;
    if (fullHeight) displacementY = 0
  }

  if (position.indexOf("left") !== -1) {
    displacementX = -300;
    if (fullHeight) displacementY = 0
  }


  if (position.indexOf("top") !== -1) {
    displacementY = -300;
    if (fullHeight) displacementX = 0
  }

  if (position.indexOf("bottom") !== -1) {
    displacementY = 300;
    if (fullHeight) displacementX = 0
  }

  modalClasses = clsx('modal', 'show', modalClassName);

</script>

{#if _isMounted && isOpen}
  <div
    transition:flyTransition={{ x: displacementX,y:displacementY, duration: fade && duration }}
    ariaLabelledby={labelledBy}
    class={modalClasses}
    role="dialog"
    style="display: block;"
    on:introend={onModalOpened}
    on:outroend={onModalClosed}
    on:click={handleBackdropClick}
    on:mousedown={handleBackdropMouseDown}>
    <div class={classes} role="document" bind:this={_dialog}>
      <div class={clsx('modal-content', contentClassName)}>
        <slot name="external"/>
        <slot/>
      </div>
    </div>
  </div>
  <div
    transition:fadeTransition={{ duration: fade && backdropDuration }}
    class={clsx({'modal-backdrop': backdrop}, 'show', backdropClassName)}/>
{/if}
