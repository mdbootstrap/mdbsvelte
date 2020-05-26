<script>
  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  import {getColumnSizeClass, isObject} from './utils';

  let className = '';
  export {className as class};
  export let size;

  const colClasses = [];

  const widths = ['xs', 'sm', 'md', 'lg', 'xl'];

  const props = clean($$props, [...widths].concat(["size"]));
  widths.forEach(colWidth => {
    const columnProp = $$props[colWidth];
    if (!columnProp && columnProp !== '') {
      return; //no value for this width
    }
    const isXs = colWidth === 'xs';
    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      if (columnProp.size || columnProp.size === '') {
        colClasses.push(colClass);
      }
      if (columnProp.push) {
        colClasses.push(`push${colSizeInterfix}${columnProp.push}`);
      }
      if (columnProp.pull) {
        colClasses.push(`pull${colSizeInterfix}${columnProp.pull}`);
      }
      if (columnProp.offset) {
        colClasses.push(`offset${colSizeInterfix}${columnProp.offset}`);
      }
    } else {
      colClasses.push(getColumnSizeClass(isXs, colWidth, columnProp));
    }
  });


  if (size) {
    colClasses.push(`col-${size}`)
  }

  if (!colClasses.length) {
    colClasses.push('col');
  }

  if (className) {
    colClasses.push(className);
  }
</script>

<div use:forwardEvents {...props} class={colClasses.join(' ')}>
  <slot/>
</div>
