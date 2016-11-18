import { CharacterChallengeComponent } from './character-challenge/character-challenge.component';
import { ExploreComponent } from './';
import { MultipleChoiceComponent } from './multiple-choice';

export function getComponetClass(className: string): any {
    switch (className) {
        case 'character':
            return CharacterChallengeComponent;
        case 'explore':
            return ExploreComponent;
        case 'multiple-choice':
            return MultipleChoiceComponent;
        default:
            return undefined;
    }
}
