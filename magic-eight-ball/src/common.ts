
export enum FortuneType {
    Good,
    Bad,
    Neutral
}

export interface Fortune {
    fortuneType: FortuneType;
    fortune: string;
}