import Dirt from '../Objects/Dirt'
import {GameBoard} from './style'
import Person from '../Objects/Person'
import Pipe from '../Objects/Pipe'
import Cloud from '../Objects/Cloud'
/* import Bird from '../Objects/Bird' */
export default function Game() {
    return (
        <GameBoard id='GameBoard'>
            <Cloud />
            <Dirt />
           {/*  <Bird /> */}
            <Person />
            <Pipe />
        </GameBoard>
    )
}