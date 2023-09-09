import { Alert } from "@mui/material"

type ServerComponentProps = {
  serverClickCount: number,
  error: string
}

function ServerClickCount({ serverClickCount, error }: ServerComponentProps) {
  return(
    <Alert severity='warning'>
      {error ? error : `По версии сервера: ${serverClickCount} раз`}
    </Alert>
  )
}

export default ServerClickCount
