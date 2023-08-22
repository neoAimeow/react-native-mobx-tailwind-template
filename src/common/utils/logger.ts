export const Logger = {
    info(tag: string, message: string, obj?: any) {
        console.info(tag, message, JSON.stringify(obj) ?? {});
    },
    warn(tag: string, message: string, obj?: any) {
        console.warn(tag, message, JSON.stringify(obj) ?? {});
    },
    error(tag: string, message: string, obj?: any) {
        console.error(tag, message, JSON.stringify(obj) ?? {});
    },
};
