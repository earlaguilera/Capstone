export interface ChallengeRecord {
    challengeId: string;
    userId: string;
    responses?: Map<string, Selection>;
    completion: number;
    itemCount: number;
}

export interface Selection {
    selected: string;
    correct?: string;
}
