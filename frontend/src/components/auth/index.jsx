import { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

import { Loader } from '../../utils/tools'


const Auth = () =>{
    const [register,setRegister] = useState(false);
    let navigate = useNavigate();
    // redux
    const users = useSelector(state => state.users);
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();

    const formik =  useFormik({
        initialValues:{email:'francis@gmail.com',password:'testing123'},
        validationSchema:Yup.object({
            email:Yup.string()
            .required('Sorry the email is required')
            .email('This is not a valid email'),
            password:Yup.string()
            .required('Sorry the password is required')
        }),
        onSubmit:(values)=>{
            doHandleSubmit(values)
        }
    });

    const doHandleSubmit = (values) => {
        if(register){
            /// dispatch register
        } else {
            /// dispatch login
        }
    }

    return(
        <>
            <div className='auth_container'>
                <h1>Autheticate</h1>
                { users.loading ?
                    <Loader/>
                :
                    <Box
                        sx={{
                            '& .MuiTextField-root': { width:'100%',marginTop:'20px' },
                        }}
                        component="form"
                        onSubmit={formik.handleSubmit}
                    >
                            form

                    </Box>
                }
            </div> 
        </>
    )
}

export default Auth;