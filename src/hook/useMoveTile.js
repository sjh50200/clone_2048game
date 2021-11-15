import { addKeyObserver, removeKeyObserver } from '../util/keyboard';
import { useEffect } from 'react';
import { moveTile, makeTile } from '../util/tile';

export default function useMoveTile({ tileList, setTileList, setScore }) {
    function moveAndAdd({x, y}) {
        const newTileList = moveTile({tileList, x, y}); 
        // 움직이고 tileList를 반환하는 함수
        const score = newTileList.reduce(
            (acc, item) => (item.isMerged ? acc + item.value : acc),
            0,
        );
        setScore(v => v + score);
        const newTile = makeTile(newTileList);
        // 새로운 타일 만들어서 추가하기
        newTile.isNew = true;
        newTileList.push(newTile);
        setTileList(newTileList);
    }

    function moveUp() {
        moveAndAdd({ x: 0, y: -1});
    }
    function moveDown() {
        moveAndAdd({ x: 0, y: 1 });
    }
    function moveLeft() {
        moveAndAdd({ x: -1, y: 0 });
    }
    function moveRight() {
        moveAndAdd({ x: 1, y: 0 });
    }
    useEffect(() => {
        addKeyObserver('up', moveUp);
        addKeyObserver('down', moveDown);
        addKeyObserver('left', moveLeft);
        addKeyObserver('right', moveRight);

        return () => { //unMount시 실행되는 함수
            removeKeyObserver('up', moveUp);
            removeKeyObserver('down', moveDown);
            removeKeyObserver('left', moveLeft);
            removeKeyObserver('right', moveRight);
        }
    });
}