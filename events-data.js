/*
 * ================================================================
 * VETERINARY ANATOMY STUDIO — DEPARTMENT EVENTS DATA
 * ================================================================
 * THIS IS THE ONLY EVENTS FILE THAT DEPARTMENT STAFF SHOULD EDIT.
 *
 * Quick rules:
 * 1. Copy the commented event template below into the events list.
 * 2. Set sectionEnabled to false to hide the complete events section.
 * 3. Keep published: false while preparing an event.
 * 4. Change published to true only when it is ready for the public website.
 * 5. Use full https:// links. Leave a link as "" when it is not available.
 * 6. Keep the comma between event blocks.
 *
 * A mistake in this file cannot stop the Atlas, quizzes or study tools.
 */
window.IVRI_EVENTS_CONFIG = {
    // STAFF TOGGLE: true = show the section; false = hide it completely.
    sectionEnabled: true,
    sectionTitle: 'Veterinary Anatomy Studio Events',
    sectionSubtitle: 'Upcoming academic programmes, expert lectures and official video updates.',
    emptyMessage: 'No upcoming events right now.',

    // Add the official Veterinary Anatomy Studio YouTube channel link when it is available.
    youtubeChannelUrl: '',
    youtubeChannelLabel: 'Visit our YouTube channel',

    // Add event blocks here when a programme is announced. Template:
    // {
    //     id: 'unique-event-name-2026',
    //     published: false,
    //     title: 'Official programme title',
    //     category: 'Guest Lecture',
    //     date: '2026-09-15T15:00:00+05:30',
    //     endDate: '2026-09-15T16:30:00+05:30',
    //     speaker: 'Speaker name and designation',
    //     description: 'Short official programme summary.',
    //     youtubeUrl: '',
    //     registrationUrl: '',
    //     featured: true,
    //     showPopup: true
    // }
    events: []
};
