import React, { useEffect, useState } from 'react'

import useCallBackendAPI from '../hook/useCallBackendAPI'
import ServerClickCount from './ServerClickCount/ServerClickCount'

import { Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SendIcon from '@mui/icons-material/Send'
import {Container, Stack} from '@mui/material'

function App() {
  const [serverClickCount, setServerClickCount] = useState<number>(0)
  const [clickCount, setClickCount] = useState<number>(0)
  const [timer, setTimer] = useState<string>("not started")
  
  const {request, loading, error } = useCallBackendAPI()

  let timerId: NodeJS.Timeout

  function handleClick(): void {
    if (timer === "not started") {
      setTimer("in procces")
      timerId = setTimeout(():void => {
        setTimer("ready")
      }, 1000)
    }
    setClickCount((clickCount) => clickCount + 1)
  }

  useEffect(():void => {
    if(timer === 'ready') {
      request(clickCount)
        .then(res => setServerClickCount(res.count))
        .catch(err => console.log(err))
      setTimer('not started')
      clearTimeout(timerId)
    }
  // eslint-disable-next-line
  }, [timer])

  return (
    <Container maxWidth='xs' style={{marginTop: '10px'}}>
        <Stack sx={{ width: '100%' }} spacing={1}>
        <LoadingButton
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition='end'
          variant='contained'
        >
          <span>Кликнуть</span>
        </LoadingButton>
        <Alert severity='info'>Кликнули {clickCount} раз</Alert>
        <ServerClickCount serverClickCount={serverClickCount} error={error}/>
      </Stack>
    </Container>
  );
}

export default App;
