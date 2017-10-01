import { ChallengeType } from './challenge-type.model';

export interface ChallengeRecord {
    challengeId: string;
    challengeTitle: string;
    challengeType: ChallengeType;
    completionMessage?: string;
    userId: string;
    responses?: Map<string, Selection>;
    completion: number;
    itemCount: number;
}

export interface Selection {
    selected: string;
    correct?: string;
}
