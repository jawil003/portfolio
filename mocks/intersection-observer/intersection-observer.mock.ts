export const mockIntersectionObserver = (): void => {
  jest.mock(
    "react-intersection-observer",
    jest
      .fn()
      .mockImplementation(() => ({
        useInView: () => ({
          ref: null,
          inView: true,
        }),
      })),
  );
};
