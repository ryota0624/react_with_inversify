export abstract class Usecase<I, O> {
  compose<i, o>(usecase: Usecase<i, o>):Usecase<[I, i], [O, o]> {
    return Usecase.compose(this, usecase);
  }
  abstract call(input: I): O;

  static compose<I1, I2, O1, O2>(uc1: Usecase<I1, O1>, uc2: Usecase<I2, O2>): Usecase<[I1, I2], [O1, O2]> {
    return new (class extends Usecase<[I1, I2], [O1, O2]> {
      call(input: [I1, I2]): [O1, O2] {
        return [uc1.call(input[0]), uc2.call(input[1])];
      }
    })
  }
}