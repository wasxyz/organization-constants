export interface Position {
    name: string;
    id: number;
    rank: number;
    allowances?: number;
}
export interface PositionList {
    [key: string]: Position;
}
