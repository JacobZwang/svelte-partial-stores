export type IntoBooleans<T extends Record<string, unknown>> = {
    [P in keyof T]: T[P] extends Record<string, unknown>
        ? IntoBooleans<T[P]> /* | boolean */ // TODO
        : boolean;
};

export type DeepPartial<T extends Record<string, unknown>> = Partial<{
    [P in keyof T]: T[P] extends Record<string, unknown>
        ? DeepPartial<T[P]>
        : Partial<T[P]>;
}>;
