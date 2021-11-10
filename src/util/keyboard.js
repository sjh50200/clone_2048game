//직접 구현도 가능하지만 여기서는 hotkeys-js 사용
//사용법 : hotkeys(key, () => {}));

const observerMap = {};
export function addKeyObserver(key, callback) {
    if(!observerMap[key]) {
        observerMap[key] = [];
        hotkeys(key, () => executeCallbacks(key));
    } // 처음 key 입력 key가 없으면 배열 생성 
    observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback) {
    observerMap[key] = observerMap[key].filter(item => item !== callback);
}

function executeCallbacks(key) {
    for(const ob of observerMap[key]) {
        ob();
    }
}