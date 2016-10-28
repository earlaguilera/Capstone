import { ChallengeItem } from './challenge-item.model';

export interface Challenge {
    documentId: string;
    challengeId: string;
    type: string;
    challengeItems: ChallengeItem[];
    title: string;
}
