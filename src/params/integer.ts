// Implementasi Route matchers Svelte-Kit

export function match(param: any) {
    return /^\d+$/.test(param)
}