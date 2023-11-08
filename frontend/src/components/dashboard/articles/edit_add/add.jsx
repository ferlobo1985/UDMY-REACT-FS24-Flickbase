import { useFormik, FieldArray, FormikProvider } from 'formik';
import { formValues, validation } from './validationSchema';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AdminTitle } from '../../../../utils/tools'

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
            Add article
        </>
    )
}

export default AddArticle;