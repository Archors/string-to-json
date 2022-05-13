"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    for (const key in source) {
        if (isObject(source[key])) {
            if (!target[key])
                Object.assign(target, { [key]: {} });
            mergeDeep(target[key], source[key]);
        }
        else {
            Object.assign(target, { [key]: source[key] });
        }
    }
    return mergeDeep(target, ...sources);
}
exports.default = mergeDeep;
function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}
