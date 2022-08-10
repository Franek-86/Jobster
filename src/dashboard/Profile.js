import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { updateUser } from '../features/user/userSlice'
import FormRows from '../utils/FormRows'

const Profile = () => {
  const dispatch = useDispatch()
  const { user, isLoading } = useSelector((state) => state.user)

  const [userData, setUserData] = React.useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    location: user?.location || '',
  })

  const { name, lastName, email, location } = userData

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !lastName || !email || !location) {
      toast.error('please fill out all fields')
      return
    }
    dispatch(updateUser(userData))
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className='form-center'>
          <FormRows
            name='name'
            type='text'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRows
            name='lastName'
            labelName='last name'
            type='text'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRows
            name='email'
            type='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRows
            name='location'
            type='text'
            value={userData.location}
            handleChange={handleChange}
          />
          <button className='btn btn-block'>
            {isLoading ? 'please wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile

// {
//   email: 'john@gmail.com',
//   name: 'john',
//   lastName: 'smith',
//   location: 'my location',
// }
