import { useEffect, useState } from "react";

//분석 필요!!
export default function useLocalStorageNumber(key, initialValue) {
    //local storage에 best score 저장 부분
    //local storage는 key와 문자열 형태로 저장됨
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const valueStr = window.localStorage.getItem(key);
        //valueStr은 key값에 해당 되는 점수가 저장되어있음
        if(valueStr) {
            setValue(Number(valueStr));
        }
    }, [key]);

    useEffect(() => {
        const prev = window.localStorage.getItem(key);
        const next = String(value);
        //valueStr은 key값에 해당 되는 점수가 저장되어있음
        if(prev !== next) {
            window.localStorage.setItem(key, next);
        }
    }, [key, value]);

    return [value, setValue];
}