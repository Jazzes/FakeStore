export function setCookie(name: string, value : string, age : number) {
    document.cookie = `${name}=${value}; max-age=${age}`
}

export function getCookie(name: string) {
    let cookie = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([$?*|{}\[\]\\\/^])/g, '\\$1') + "=([^;]*)"
    ));
    return cookie ? decodeURIComponent(cookie[1]) : undefined;
}

export function clearCookie(name: string){
    document.cookie = `${name}=; expires=-1`;
}