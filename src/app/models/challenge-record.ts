export interface ChallengeRecord {
    challengeId: string;
    userId: string;
    responses: Map<string, Selection>;
    completion: number;
}

export interface Selection {
    selected: string;
    correct: boolean;
}
