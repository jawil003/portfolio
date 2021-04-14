/* eslint-disable @typescript-eslint/no-explicit-any */
export default class ArrayService {
  public static conditionalMerge<T>(
    overridingArray: T[],
    overrideArray: T[],
  ) {
    const a = Object.fromEntries(
      overridingArray as any,
    );
    const b = Object.fromEntries(
      overrideArray as any,
    );

    return Object.values({
      ...b,
      ...a,
    }) as T[];
  }
}
