import { Challenge, ChallengeType, Document } from '../app/models';

const MockMultipleChoiceChallenge: Challenge = {
    challengeId: '2',
    title: 'Understand The Parts of a Job Posting',
    type: ChallengeType.MULTIPLE_CHOICE,
    completionMessage: 'Work in progress. This will show each incorrect option with an explanation of why its incorrect',
    documentId: 'job',
    challengeItems: [
        {
        id: '0',
        correct: '0',
        prompt: 'This part tells you…?',
        documentSubject: '1',
        options: new Map<string, string>().set('0', '...WHO is hiring.')
                                          .set('1', '...WHERE the store is.')
                                          .set('2', '...WHEN the job fair is.')
                                          .set('3', '...HOW to apply.')
        },
        {
        id: '1',
        correct: '3',
        prompt: 'This part tells you…',
        documentSubject: '4',
        options: new Map<string, string>().set('0', '...WHEN the job fair is.')
                                          .set('1', '...WHERE the store is.')
                                          .set('2', '...WHO is hiring.')
                                          .set('3', '...HOW to apply.')
        },
        {
        id: '2',
        correct: '1',
        prompt: 'This part tells you…',
        documentSubject: '3',
        options: new Map<string, string>().set('0', '...WHAT jobs there are.')
                                          .set('1', '...WHERE the store is.')
                                          .set('2', '...HOW to apply.')
                                          .set('3', '...WHEN the job fair is.')
        },
        {
        id: '3',
        correct: '2',
        prompt: 'This part tells you…',
        documentSubject: '8',
        options: new Map<string, string>().set('0', '...WHO is hiring.')
                                          .set('1', '...WHERE the store is.')
                                          .set('2', '...WHAT jobs there are.')
                                          .set('3', '...HOW to apply.')
        },
        {
        id: '4',
        correct: '2',
        prompt: 'This part tells you…',
        documentSubject: '5',
        options: new Map<string, string>().set('0', '...WHO is hiring.')
                                          .set('1', '...WHERE the store is.')
                                          .set('2', '...WHEN the job fair is.')
                                          .set('3', '...HOW to apply.')
        }
    ]
};

const MockExploreChallenge: Challenge = {
    challengeId: '1',
    title: 'Explore The Parts of a Job Posting',
    type: ChallengeType.EXPLORE,
    documentId: 'job',
    prompt: 'Discover the parts of a job posting! Find the part that tells you...',
    completionMessage: 'You found the key parts of a Job Posting! Good work! Continue on to the next challenge.',
    challengeItems: [
        {
        id: '0',
        prompt: 'WHO is hiring?',
        documentSubject: '1'
        },
        {
        id: '1',
        prompt: 'WHAT jobs there are?',
        documentSubject: '8'
        },
        {
        id: '2',
        prompt: 'WHERE would you work?',
        documentSubject: '3'
        },
        {
        id: '3',
        prompt: 'HOW do you apply?',
        documentSubject: '4'
        },
        {
        id: '4',
        prompt: 'WHEN the job fair is?',
        documentSubject: '5'
        }
    ]
};

const MockCharacterChallenge: Challenge = {
    challengeId: '3',
    title: 'Find the Right Person for the Job',
    type: ChallengeType.CHARACTER,
    prompt: 'Match the job with the person who you think fits best',
    completionMessage: 'You found the right person for each Job Posting! Good work! Continue on to the next challenge.',
    challengeItems: [
        {
            id: '0',
            prompt: 'Who fits this job the best?',
            documentSubject: '/assets/images/jobfair.jpg',
            correct: 'Maria',
            data: {
                characters: [
                    {
                        name: 'Abe',
                        bio:
                            'took care of his parents in their old age. He is a very patient person, '
                            + 'and is looking for a job that has flexible hours. He likes playing cards for fun.',
                        imageUrl: '/assets/images/abe.png'
                    },
                    {
                        name: 'Maria',
                        bio: 'loves cooking. She has worked with a cash register before. She is also a very '
                        + 'friendly and outgoing person. She is looking for a job that will keep her on her feet.',
                        imageUrl: '/assets/images/maria.png'
                    }
                ]
            }
        },
        {
            id: '1',
            prompt: 'Who fits this job the best?',
            documentSubject: '/assets/images/jobfair2.jpg',
            correct: 'Maria',
            data: {
                characters: [
                    {
                        name: 'Abe',
                        bio:
                            'took care of his parents in their old age. He is a very patient person, '
                            + 'and is looking for a job that has flexible hours. He likes playing cards for fun.',
                        imageUrl: '/assets/images/abe.png'
                    },
                    {
                        name: 'Maria',
                        bio: 'loves cooking. She has worked with a cash register before. She is also a very '
                        + 'friendly and outgoing person. She is looking for a job that will keep her on her feet.',
                        imageUrl: '/assets/images/maria.png'
                    }
                ]
            }
        },
        {
            id: '2',
            prompt: 'Who fits this job the best?',
            documentSubject: '/assets/images/jobfair3.jpg',
            correct: 'Abe',
            data: {
                characters: [
                    {
                        name: 'Abe',
                        bio:
                            'took care of his parents in their old age. He is a very patient person, '
                            + 'and is looking for a job that has flexible hours. He likes playing cards for fun.',
                        imageUrl: '/assets/images/abe.png'
                    },
                    {
                        name: 'Maria',
                        bio: 'loves cooking. She has worked with a cash register before. She is also a very '
                        + 'friendly and outgoing person. She is looking for a job that will keep her on her feet.',
                        imageUrl: '/assets/images/maria.png'
                    }
                ]
            }
        }
    ]
};

let mockChallenges = {};
mockChallenges[MockCharacterChallenge.challengeId] = MockCharacterChallenge;
mockChallenges[MockExploreChallenge.challengeId] = MockExploreChallenge;
mockChallenges[MockMultipleChoiceChallenge.challengeId] = MockMultipleChoiceChallenge;
export const MockChallenges = mockChallenges;

export function createMockDocument(): Document {
    let document: Document = {
        id: 'job',
        rows: [
        { id: '0', hasSound: false, hasTabSound: false, state: 'inactive' },
        { id: '1', hasSound: true, hasTabSound: true, state: 'inactive' },
        { id: '2', hasSound: true, hasTabSound: false, state: 'inactive' },
        { id: '3', hasSound: true, hasTabSound: true, state: 'inactive' },
        { id: '4', hasSound: true, hasTabSound: true, state: 'inactive' },
        { id: '5', hasSound: true, hasTabSound: true, state: 'inactive' },
        { id: '6', hasSound: true, hasTabSound: false, state: 'inactive' },
        { id: '7', hasSound: true, hasTabSound: false, state: 'inactive' },
        { id: '8', hasSound: true, hasTabSound: true, state: 'inactive' }
        ]
    };
    for (let row of document.rows) {
      if (row.hasSound) {
        row.sound = {
          url: '/assets/sounds/' + document.id + row.id + '.wav',
          autoplay: false,
          id: document.id + row.id,
          type: 'audio/wav'
        };
      }
      if (row.hasTabSound) {
        row.tabSound = {
          url: '/assets/sounds/' + document.id + row.id + 'tab.wav',
          autoplay: false,
          id: document.id + row.id + 'tab',
          type: 'audio/wav'
        };
      }
    }

    return document;
}
