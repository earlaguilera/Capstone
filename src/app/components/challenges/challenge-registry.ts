import { CharacterChallengeComponent } from './character-challenge/character-challenge.component';
import { ExploreComponent } from './';

export function getComponetClass(className: string): any {
    switch (className) {
        case 'character':
            return CharacterChallengeComponent;
        case 'explore':
            return ExploreComponent;
        default:
            return undefined;
    }
}
