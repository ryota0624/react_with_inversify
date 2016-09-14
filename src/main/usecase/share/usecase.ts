export abstract class Usecase<Deps, I, O> {
  readonly deps: Deps;
  abstract call(input: I): O;
  // static composeOld<D1, D2, I1, I2, O1, O2>(usecase1: Usecase<D1, I1, O1>, usecase2: Usecase<D2, I2, O2>): Usecase<[D1, D2], [I1, I2], [O1, O2]> {
  //   return class extends Usecase<[D1, D2], [I1, I2], [O1, O2]> {
  //     call(input: [I1, I2]): [O1, O2] {
  //       return [usecase1.call(input[0]), usecase2.call(input[1])];
  //     }
  //   }
  // }
  static compose<D1, D2, I1, I2, O1, O2>(
    usecase1: { new (deps1: D1): Usecase<D1, I1, O1> },
    usecase2: { new (deps2: D2): Usecase<D2, I2, O2> }):
    { new (deps: [D1, D2]): Usecase<[D1, D2], [I1, I2], [O1, O2]> } {
    return class extends Usecase<[D1, D2], [I1, I2], [O1, O2]> {
      constructor(readonly deps: [D1, D2]) {
        super();
      }
      call(input: [I1, I2]): [O1, O2] {
        return [(new usecase1(this.deps[0])).call(input[0]), (new usecase2(this.deps[1])).call(input[1])];
      }
    }
  }
}