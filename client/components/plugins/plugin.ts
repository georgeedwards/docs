export class Plugin {
    constructor(
        public name: string,
        public package_name: string,
        public author: string,
        public android: boolean,
        public ios: boolean,
        public downloads?: number,
        public github?: string,
        public id?: string,
        public description?: string,
        public version?: string
    ) { }
}