export class Plugin {
    constructor(
        public name: String,
        public package_name: String,
        public author: String,
        public android: Boolean,
        public ios: Boolean,
        public downloads?: Number,
        public github?: String
    ) { }
}