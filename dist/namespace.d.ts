import * as iyuo from "@iyuo/context";
export declare class Namespace {
    name: string;
    constructor(name: string);
    init(name: string): void;
}
export interface NameSpaceContext<T> extends iyuo.Context<T> {
    namespace(name: string): NameSpaceContext<Namespace>;
}
export declare function namespace(this: any, name: string): NameSpaceContext<Namespace>;
