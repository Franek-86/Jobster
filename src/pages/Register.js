import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Wrapper from '../assets/wrappers/RegisterPage'
import Logo from '../components/Logo'
import { registerUser, loginUser } from '../features/user/userSlice'
import FormRows from '../utils/FormRows'

const Register = () => {
  const navigate = useNavigate()
  const { user, isLoading } = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user])

  const dispatch = useDispatch()
  const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  }

  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) => {
    const { name, email, password, isMember } = values
    e.preventDefault()

    if (!email || !password || (!isMember && !name)) {
      toast.error('please fill all values')
      return
    }

    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }

    return dispatch(registerUser({ name, email, password }))
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  return (
    <Wrapper>
      <form action='submit' onSubmit={handleSubmit} className='form'>
        <Logo />
        <h3> {values.isMember ? 'Login' : 'Register'}</h3>
        {!values.isMember && (
          <FormRows
            value={values.name}
            name='name'
            type='text'
            handleChange={handleChange}
            labelName='name'
          />
        )}
        <FormRows
          value={values.email}
          name='email'
          type='email'
          handleChange={handleChange}
          labelName='email'
        />
        <FormRows
          value={values.password}
          name='password'
          type='password'
          handleChange={handleChange}
          labelName='password'
        />
        <button disabled={isLoading} type='submit' className='btn btn-block'>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>

        <button
          disabled={isLoading}
          type='button'
          onClick={() =>
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            )
          }
          className='btn btn-block btn-hipster'
        >
          {isLoading ? 'Loading...' : 'Demo'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button
            type='button'
            className='member-btn'
            onClick={() => toggleMember()}
          >
            {values.isMember ? 'register' : 'login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register

// Wrapper  classe 'full-page'
// form classe 'form'
// logo
// h3 testo 'login' o 'regsiter'

// div classe 'form-row' da chiudere dopo input
// label classe form-label'

// input classe 'form-input'

// bottone classe 'btn btn-block' e testo di submit

// paragrafo  di 'Not a member yet?' o 'Already a member?' seguito da bottone classe 'member-btn' e testo o di 'Register' o 'Login', chiudi paragrafo.
