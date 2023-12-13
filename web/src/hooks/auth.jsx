import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [search, setSearch] = useState("")

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketmovies:token', token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ user, token })
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@rocketmovies:user')
    localStorage.removeItem('@rocketmovies:token')

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      const response = await api.put('/users', user)
      const updatedUser = response.data.user

      localStorage.setItem("@rocketmovies:user", JSON.stringify(updatedUser))

      setData({ user: updatedUser, token: data.token })
      alert("Perfil atualizado com sucesso!")
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    }
  }

  function changeSearchText(text) {
    setSearch(text)
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user')
    const token = localStorage.getItem('@rocketmovies:token')

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      user: data.user,
      signOut,
      updateProfile,
      search,
      changeSearchText
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}