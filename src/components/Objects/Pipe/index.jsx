import {Pipe_Style} from './style'

import Tube from '../../../public/pipe.png'
export default function Pipe(){
    return (
        <Pipe_Style>
            <img className='tube' src={Tube} alt="" />
        </Pipe_Style>
    )
}