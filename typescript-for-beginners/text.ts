type SuperPrint = <T>(a: T[], b: T) => T;

const superPrint: SuperPrint = (c) => c[0];

const a = superPrint<number>([1, 2, 3, 4], 2);
