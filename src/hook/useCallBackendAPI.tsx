import axios, { AxiosError } from "axios"
import { useState } from "react"

const useCallBackendAPI = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const APIurl: string = "https://lk.zont-online.ru/api/button_count"

  interface IServerAnswer {
    ok: boolean
    count: number
  }

  const request = async (clickCount: number) => {
    try {
      setError("")
      setLoading(true)
      const response = await axios.post<IServerAnswer>(APIurl, 
        {count: clickCount}, 
        {headers: {
          // Отключил так как в консоли появляется ошибка Refused to set unsafe header "Host"
          // "Host": "zont-online.ru", 
          "Content-Type": "application/json;charset=utf-8",
          "X-ZONT-Client": "ander_kor@mail.ru"}
        })
      setLoading(false)
      return response.data
    } catch (e: unknown) {
        setLoading(false)
        const err = e as AxiosError
        setError(err.message)
        throw err
      }
  }
  return { loading, request, error }
}
export default useCallBackendAPI
