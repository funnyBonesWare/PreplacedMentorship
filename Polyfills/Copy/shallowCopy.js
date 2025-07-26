const shallowClonePolyfill = (data) => {
  if (typeof data !== "object" || data === null) {
    return data;
  } else if (Array.isArray(data)) {
    return [...data];
  } else {
    return { ...data };
  }
}; 