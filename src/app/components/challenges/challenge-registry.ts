import { ExploreComponent } from './';

export function getComponetClass(className: string): any {
    switch (className) {
        case 'explore':
            return ExploreComponent;
        default:
            return undefined;
    }
}
