export function clean($$props, extra_keys) {
const { children, $$scope, $$slots } = $$props;
  const rest = {};
  for (const key of Object.keys($$props)) {
    if (key !== "children" && key !== "$$scope" && key !== "$$slots" && !(extra_keys.includes(key))) {
      rest[key] = $$props[key];
    }
  }
  return rest;
}
