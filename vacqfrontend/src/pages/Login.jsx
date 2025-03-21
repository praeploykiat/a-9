import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            toast.error('All fields are required');
        }
    };

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Please login to get support</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
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
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;
