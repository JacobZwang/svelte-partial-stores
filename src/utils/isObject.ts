export default function isObject(
    object: unknown
): object is Record<string, unknown> {
    return object != null && typeof object === 'object';
}
