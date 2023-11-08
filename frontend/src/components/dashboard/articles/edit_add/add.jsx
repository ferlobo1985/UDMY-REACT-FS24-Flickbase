import { useFormik, FieldArray, FormikProvider } from 'formik';
import { formValues, validation } from './validationSchema';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AdminTitle, errorHelper, Loader } from '../../../../utils/tools'

//MUI
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button' 
import Divider from '@mui/material/Divider' 
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel';
import AddIcon from '@mui/icons-material/Add';

const AddArticle = () => {
    const articles =  useSelector(state=>state.articles);
    const dispatch =  useDispatch();
    let navigate =  useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues:formValues,
        validationSchema: validation,
        onSubmit:(values)=>{
            console.log(values)
        }   
    })



    return(
        <>
            <AdminTitle title="Add article"/>
            <form className='mt-3 article_form' onSubmit={formik.handleSubmit}>

                <div className='form-group'>
                    <TextField
                        style={{width:'100%'}}
                        name="title"
                        label="Enter a title"
                        variant='outlined'
                        {...formik.getFieldProps('title')}
                        {...errorHelper(formik,'title')}
                    />
                </div>

                <div className='form-group'>
                    WYSIWYG
                </div>

                <div className='form-group'>
                    <TextField
                        style={{width:'100%'}}
                        name="excerpt"
                        label="Enter a short desc"
                        variant='outlined'
                        {...formik.getFieldProps('excerpt')}
                        {...errorHelper(formik,'excerpt')}
                        multiline
                        rows={4}
                    />
                </div>          

                <Divider className='mt-3 mb-3'/>

                <div className='form-group'>
                    <TextField
                        style={{width:'100%'}}
                        name="score"
                        label="Enter a score"
                        variant='outlined'
                        {...formik.getFieldProps('score')}
                        {...errorHelper(formik,'score')}
                    />
                </div>


                <div className='form-group'>
                    ACTORS
                </div>

                <div className='form-group'>
                    <TextField
                        style={{width:'100%'}}
                        name="director"
                        label="Enter a director"
                        variant='outlined'
                        {...formik.getFieldProps('director')}
                        {...errorHelper(formik,'director')}
                    />
                </div>

                <Divider className='mt-3 mb-3'/>

                <FormControl fullWidth>
                    <InputLabel>Select a status</InputLabel>
                    <Select
                        name="status"
                        label="Select a status"
                        {...formik.getFieldProps('status')}
                        error={ formik.errors.status && formik.touched.status ?true:false}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="draft">Draft</MenuItem>
                        <MenuItem value="public">Public</MenuItem>
                    </Select>
                    { formik.errors.status && formik.touched.status ?
                        <FormHelperText error={true}>
                            {formik.errors.status}
                        </FormHelperText>
                    :null}      
                </FormControl>

                <Divider className='mt-3 mb-3'/>

                <>
                    categories
                </>

                <Divider className='mt-3 mb-3'/>

                { articles.loading ?
                    <Loader/>
                :
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        <span>Add article</span>
                    </Button>
                }
            </form>
        </>
    )
}

export default AddArticle;