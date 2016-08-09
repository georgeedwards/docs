declare module 'diff2html' {
    function getPrettyHtml(exInput: string, configuration: options): string;
    function getJsonFromDiff(exInput: string): string;
}

interface options {
    inputFormat?: string;
    outputFormat?: string;
    showFiles?: boolean;
    matching?: string;
    synchronisedScroll?: boolean;
    matchWordsThreshold?: number;
    matchingMaxComparisons?: number;
}