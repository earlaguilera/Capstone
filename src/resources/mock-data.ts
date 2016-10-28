import { Challenge } from '../app/models';

export let MockMultipleChoiceChallenge: Challenge = {
    challengeId: '0',
    title: 'Mock Multiple Choice Challenge',
    type: 'multiple-choice',
    documentId: 'job',
    itemsRemaining: 5,
    challengeItems: [
        {
        id: '0',
        correct: '1',
        prompt: 'Where is part 1?'
        },
        {
        id: '1',
        correct: '2',
        prompt: 'Where is part 2?'
        },
        {
        id: '2',
        correct: '3',
        prompt: 'Where is part 3?'
        },
        {
        id: '3',
        correct: '4',
        prompt: 'Where is part 4?'
        },
        {
        id: '4',
        correct: '5',
        prompt: 'Where is part 5?'
        }
    ]
};

export let MockExploreChallenge: Challenge = {
    challengeId: '1',
    title: 'Mock Explore Challenge',
    type: 'explore',
    documentId: 'job',
    itemsRemaining: 5,
    challengeItems: [
        {
        id: '0',
        prompt: 'Where is part 1?',
        completed: false,
        documentSubject: 1
        },
        {
        id: '1',
        prompt: 'Where is part 2?',
        completed: false,
        documentSubject: 2
        },
        {
        id: '2',
        prompt: 'Where is part 3?',
        completed: false,
        documentSubject: 3
        },
        {
        id: '3',
        prompt: 'Where is part 4?',
        completed: false,
        documentSubject: 4
        },
        {
        id: '4',
        prompt: 'Where is part 5?',
        completed: false,
        documentSubject: 5
        }
    ]
};
