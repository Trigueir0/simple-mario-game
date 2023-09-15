import {Bird_Style} from './style'
import birdicon from '../../../public/flappy-bird.gif'

export default function Bird() {
    return (
        <Bird_Style>
            <img className='bird' src={birdicon} alt="" />
        </Bird_Style>
    )
}