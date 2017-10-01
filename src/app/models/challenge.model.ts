import { ChallengeItem } from './challenge-item.model';
import { ChallengeType } from './challenge-type.model';

export interface Challenge {
    documentId?: string;
    challengeId: string;
    challengeItems: ChallengeItem[];
    completionMessage?: string;
    prompt?: string;
    title: string;
    type: ChallengeType;
}
