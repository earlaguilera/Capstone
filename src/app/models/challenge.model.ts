import { ChallengeItem } from './challenge-item.model';

export interface Challenge {
    documentId: string;
    challengeId: string;
    challengeItems: ChallengeItem[];
    title: string;
}
