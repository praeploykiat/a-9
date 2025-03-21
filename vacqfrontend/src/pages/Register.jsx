import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('Passwords do not match')
        }
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='form-control'
                            placeholder='Enter your name'
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='form-control'
                            placeholder='Enter your email'
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className='form-control'
                            placeholder='Enter your password'
                            value={password}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='password'
                            id='password2'
                            name='password2'
                            className='form-control'
                            placeholder='Confirm your password'
                            value={password2}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register;
