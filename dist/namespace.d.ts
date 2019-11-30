import { Context as iyuoContext } from "@iyuo/context";
export declare class Context<T> extends iyuoContext<T> {
    constructor(context: T);
}
export declare class Namespace {
    name: string;
    constructor(name: string);
    init(name: string): void;
}
export interface Context<T> {
    namespace(name: string): Context<Namespace>;
}
