/**
 * Get the union type of the values of an object type
 * @example
 * const COLORS = { Miku: '#33ccba', Ichika: '#33aaee' } as const
 * type Color = ValueOf<typeof COLORS> // '#33ccba' | '#33aaee'
 */
export type ValueOf<T> = T[keyof T];

/**
 * Get the element type of an array type
 * @example
 * type Languages = ['ja', 'en'] as const
 * type Validlanguage = ArrayElement<typeof Languages> // 'ja' | 'en'
 */
export type ArrayElement<T extends readonly unknown[]> = T[number];

/**
 * Make all properties in T optional, and if a property is an object, make its properties optional recursively
 * @example
 * interface User { id: string; profile: { name: string; age: number } }
 * type PartialUser = DeepPartial<User>
 * // Result: { id?: string; profile?: { name?: string; age?: number } }
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Make all properties in T required, and if a property is an object, make its properties required recursively
 * @example
 * interface User { id?: string; profile?: { name?: string; age?: number } }
 * type RequiredUser = DeepRequired<User>
 * // Result: { id: string; profile: { name: string; age: number } }
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

/**
 * Make properties K in T optional
 * @example
 * interface User { id: string; name: string; age: number }
 * type PartialAgeUser = PartialBy<User, 'age'>
 * // Result: { id: string; name: string; age?: number }
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make properties K in T required
 * @example
 * interface User { id?: string; name?: string; age?: number }
 * type RequiredIdNameUser = RequiredBy<User, 'id' | 'name>
 * // Result: { id: string; name: string; age?: number }
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
