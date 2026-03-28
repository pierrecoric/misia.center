export type ServiceSegment =
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'bold'; content: string };

export type ServiceParagraph = ServiceSegment[];

export type ServiceContent = {
  translation: ServiceParagraph[];
  audioDescription: ServiceParagraph[];
  subtitling: ServiceParagraph[];
  editing: ServiceParagraph[];
};

export const serviceContent: ServiceContent = {
  translation: [
    [{ type: 'text', content: 'ENGLISH - SPANISH - DUTCH - POLISH' }],
    [{ type: 'text', content: 'Do you need a translation of your text that captures the nuances of the original? Commercial text, the copy on your site, a grant application, a script, a magazine article… whatever it is you\'re making, I\'m excited to hear about it and to help you adapt it for a multilingual audience.' }],
    [{ type: 'text', content: 'Do you have a translation ready, but would like a second pair of eyes on it before it sees the light of day? I will revise it for you.' }],
    [{ type: 'heading', content: 'Tell me more about your project' }],
    [{ type: 'bold', content: '• Who\'s your audience?' }],
    [{ type: 'text', content: 'What demographic are you writing for? Where are they located, what is their age and cultural background? We will turn your final product into something that speaks to them.' }],
    [{ type: 'bold', content: '• How are you sharing your work?' }],
    [{ type: 'text', content: 'Are there technical specifications or genre conventions we need to take into account? I\'ll make sure the message is 100% adapted to the medium.' }],
    [{ type: 'bold', content: '• How long is your text?' }],
    [{ type: 'text', content: 'We will calculate a friendly price based on the word count and your budget.' }]
  ],
  audioDescription: [
    [{ type: 'text', content: 'ENGLISH - SPANISH - DUTCH - POLISH' }],
    [{ type: 'text', content: 'Audio description makes your video or film accessible to people who are blind or visually impaired. How does it work? Your video material gets an additional audio track that relays the key elements of what’s happening on the screen. The narrative of your work is central in this process. Visually impaired audience members will not be left wondering what is happening. The description fits neatly into the gaps in dialogue and/or music. Depending on the tone of your work, the script can be matter-of-fact or poetic and elaborate. You decide what kind of experience you want to create for your public.' }],
    [{ type: 'text', content: 'Are you considering making your audiovisual work accessible, or would you just like to know more about audio description?‌ I’d love to hear from you.' }]
  ],
  subtitling: [
    [{ type: 'text', content: 'ENGLISH - SPANISH - DUTCH - POLISH' }],
    [{ type: 'text', content: 'I can create classical subtitles, SDH or surtitles for your video or theatre performance.' }],
    [{ type: 'text', content: 'Do you just need someone to double check the timing, line breaks and reading speed of your existing subtitles?‌ I’m more than happy to do that for you.' }]
  ],
  editing: [
    [{ type: 'text', content: 'ENGLISH - SPANISH - DUTCH - POLISH' }],
    [{ type: 'text', content: 'Whether we’re turning the outline of an idea into a publishable text, or you just need someone to dot the i’s and cross the t’s of what you already wrote, I’m here for you. If we’re working with a rough draft, I’ll help you with structuring of your thoughts and conveying your message in a clear way. I’ll also ensure that your final text meets any publication guidelines and is thoroughly proofread.' }],
    [{ type: 'text', content: 'Do you have a ready text that you’d like to make as accessible as it can be?‌ I’m happy to rewrite it into easy read or plain language.' }]
  ],
};