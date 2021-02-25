console.log('content')


// loaded

function readCookies(): Promise<chrome.cookies.Cookie[]> {
    return new Promise(resolve => {
        chrome.cookies.getAll({ url: 'http://qq.com' }, cookies => {
            resolve(cookies)
        })
    })
}

console.log(readCookies())
