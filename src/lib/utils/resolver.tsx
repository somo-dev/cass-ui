type ResolveProps<T> = (userProps: Partial<T>, componentDefaults: T) => T;

const resolveProps: ResolveProps<any> = (userProps, componentDefaults) => {
  return { ...componentDefaults, ...userProps };
};

export { resolveProps };
