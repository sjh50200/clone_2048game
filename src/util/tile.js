import { MAX_POS } from "../constant";
import { getRandomInteger } from "./number";

export function getInitialTileList() {
    const tileList = [];
    const tile1 = makeTile(tileList);
    tileList.push(tile1);
    const tile2 = makeTile(tileList);
    tileList.push(tile2);
    return tileList;
} // 초기 타일을 반환하는데 랜덤 위치에 타일 반환

function checkCollision(tileList, tile) {
    return tileList.some(item => item.x === tile.x && item.y === tile.y);
    //some은 item중에 하나라도 만족하는게 있으면 반환
} //충돌했는지 확인하는 함수

export function makeTile(tileList) {
    let tile;
    while(!tile || checkCollision(tileList, tile)) {
        tile = {
            x: getRandomInteger(1, MAX_POS),
            y: getRandomInteger(1, MAX_POS),
            value: 2
        }
    }
    return tile;
}