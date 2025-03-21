import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        role: 'user'
    });

    const { name, email, password, password2, role } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        // Redirect when logged in
        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    }, [isError, isSuccess, user, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error('Passwords do not match');
        } else {
            const userData = {
                name,
                email,
                password,
                role
            };

            dispatch(register(userData));
        }
    };

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={name}
                            onChange={onChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={onChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={password}
                            onChange={onChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            className="form-control"
                            value={password2}
                            onChange={onChange}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            id="role"
                            name="role"
                            className="form-control"
                            value={role}
                            onChange={onChange}
                            placeholder="Enter your role"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Register;
