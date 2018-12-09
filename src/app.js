"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fromURL(url) {
    if (url.startsWith('http')) {
        const parts = url.split('/');
        const steamGroup = parts[4];
        return `https://steam.group/${steamGroup}`;
    }
    else {
        return url.replace('steamcommunity.com/groups/', 'https://steam.group/');
    }
}
exports.fromURL = fromURL;
function fromText(text) {
    let words = text.split(' ');
    let ret = '';
    words.forEach(part => {
        if (part.startsWith('http://steamcommunity.com/groups/')) {
            part = part.replace('http://steamcommunity.com/groups/', 'https://steam.group/');
        }
        else if (part.startsWith('https://steamcommunity.com/groups/')) {
            part = part.replace('https://steamcommunity.com/groups/', 'https://steam.group/');
        }
        ret += `${part} `;
    });
    // Return and remove last character (whitespace)
    return ret.slice(0, -1);
}
exports.fromText = fromText;
