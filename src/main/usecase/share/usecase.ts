export interface Usecase<I, O> {
  call: (input: I) => O;
}