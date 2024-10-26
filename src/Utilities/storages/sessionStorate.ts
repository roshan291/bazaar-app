export const SetSessionStorageWithoutExcryption = (key: any, value: any) => {
    sessionStorage.setItem(key, value);
}
export const GetSessionStorageWithoutExcryption = (key: any) => {
    sessionStorage.getItem(key);
}