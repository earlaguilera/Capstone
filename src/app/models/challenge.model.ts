import { ChallengeItem } from './challenge-item.model';

export interface Challenge {
    documentId: string;
    challengeId: string;
    challengeItems: ChallengeItem[];
    itemsRemaining: number;
    title: string;
    type: string;
}
