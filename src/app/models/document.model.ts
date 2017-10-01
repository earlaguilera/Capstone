export interface Document {
    id: string;
    rows: Row[];
}

export interface Row {
    id: string;
    hasSound: boolean;
    hasTabSound: boolean;
    sound?: SoundProperties;
    tabSound?: SoundProperties;
    state: string;
}

export interface SoundProperties {
    id: string;
    url: string;
    type: string;
    autoplay: boolean;
}
