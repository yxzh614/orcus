export type UnionOmit<T, U> = {[P in keyof (T & U)]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never};

type A = {
  a: 1
}

type B = {
  a: 1,
  b: 2
}

type c = UnionOmit<A, B>