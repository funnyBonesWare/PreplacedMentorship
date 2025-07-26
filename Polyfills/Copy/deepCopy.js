const deepClonePolyfill = (data) => {
    if (typeof data !== "object") {
      return data;
    } else if (Array.isArray(data)) {
      return data.map((item) => deepClonePolyfill(item));
    } else {
      return Object.keys(data).reduce((acc, key) => {
        acc[key] = deepClonePolyfill(data[key]);
        return acc;
      }, {});
    }
  };