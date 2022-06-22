import React from 'react'
import BtnStack from './BtnStack'
import SabiBtn from './SabiBtn'
import { MdEmail } from 'react-icons/md'
import { BsFillAlarmFill } from 'react-icons/bs'
// BsFillAlarmFill

function App() {
  return (
    <main className='App'>
      <BtnStack direction='row'>
        <SabiBtn size='s' leftIcon={<MdEmail />} width='200px'>
          German
        </SabiBtn>
        <SabiBtn size='xs' btnType='outline' rightIcon={<BsFillAlarmFill />}>
          Add
        </SabiBtn>
        <SabiBtn size='s' width='100px' btnType='glow' theme='white'>
          Add
        </SabiBtn>
        <SabiBtn theme='red' btnType='outline'>
          Pressure
        </SabiBtn>
        <SabiBtn theme='blossom' btnType='faint'>
          Maxy
        </SabiBtn>
        <SabiBtn theme='blossom' btnType='link' size='l'>
          Maxy
        </SabiBtn>
      </BtnStack>
    </main>
  )
}

export default App
