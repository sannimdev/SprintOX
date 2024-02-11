export const choiceButtons = ['O', 'X'] as const;
export type TChoiceButton = (typeof choiceButtons)[number];
export type TSelected = TChoiceButton | undefined;
