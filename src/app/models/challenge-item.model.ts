export interface ChallengeItem {
    id: string;
    prompt: string;
    options?: Map<string, string>;
    correct?: string;
    completed?: boolean;
    documentSubject?: number;
}
