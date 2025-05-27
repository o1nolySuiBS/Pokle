export interface IType {
    name: string;
    url: string;
}

export interface IAbility {
    name: string;
    url: string;
}

export interface IStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface IForm {
    name: string;
    url: string;
}

export interface IPokemon {
    id: number;
    name: string;
    types: IType[];
    abilities: IAbility[];
    stats: IStat[];
    forms: IForm[];
    height: number;
    weight: number;
    sprites: {
        front_default: string;
        other: {
            official_artwork: {
                front_default: string;
            };
        };
    };
}

export interface IPokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemon[];
}