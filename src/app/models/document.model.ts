export interface Document {
    id: string;
    rows: Row[];
}

export interface Row {
    id: string;
    hasSound: boolean;
    sound?: SoundProperties;
    state: string;
}

export interface SoundProperties {
    id: string;
    url: string;
    type: string;
    autoplay: boolean;
}
