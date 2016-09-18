import { ChallengeItem } from './challenge-item';

export interface Challenge {
    documentUrl: string;
    challengeId: string;
    challengeItems: ChallengeItem[];
    title: string;
}
