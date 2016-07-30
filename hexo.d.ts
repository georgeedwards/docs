declare module 'hexo' {
    namespace extend {
        export class tag {
            public register: _register;
        }
    }
}

declare class _register {
    name: string;
    callback(args: any, content: any); 
    options: _options;
}

declare class _options {
    ends: boolean;
}