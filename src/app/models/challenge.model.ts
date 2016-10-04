import { ChallengeItem } from './challenge-item.model';

export interface Challenge {
    documentUrl: string;
    challengeId: string;
    challengeItems: ChallengeItem[];
    title: string;
}
