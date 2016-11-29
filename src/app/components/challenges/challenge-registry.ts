import { CharacterChallengeComponent } from './character-challenge/character-challenge.component';
import { ExploreComponent } from './';
import { MultipleChoiceComponent } from './multiple-choice';
import { ChallengeType } from '../../models/challenge-type.model';

export function getComponetClass(challengeType: ChallengeType): any {
    switch (challengeType) {
        case ChallengeType.CHARACTER:
            return CharacterChallengeComponent;
        case ChallengeType.EXPLORE:
            return ExploreComponent;
        case ChallengeType.MULTIPLE_CHOICE:
            return MultipleChoiceComponent;
        default:
            return undefined;
    }
}
