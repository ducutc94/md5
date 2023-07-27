import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function Update(){
    const [tours,setTours] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/tours/${id}`).then((res=>{
            setTours(res.data)
        }))
    },[])
    return(
        <>
            <div>
                <h1>Sửa</h1>
            </div>
            <div>
                <Formik initialValues={{
                    name:'',
                    price:'',
                    info:''
                }} onSubmit={(values)=>{
                axios.put(`http://localhost:8080/api/tours/${id}`,values).then((res=>{
                    alert("Sửa thành công  ")
                    navigate('/')
                }))}
                }>
                    <Form>
                        <table>
                            <tr>
                                <td>
                                      <label htmlFor={'name'} className={'form-label'}>Tên Tours</label>
                                </td>
                                <td> <Field name={'name'} type={'text'} className={'form-control'} id={'name'}
                                            placeholder={`${tours.name}`}/>  </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor={'price'} className={'form-label'}>Giá Tours</label>
                                </td>
                                <td> <Field name={'price'} type={'text'} className={'form-control'} id={'name'}
                                            placeholder={`${tours.price}`}/>  </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor={'info'} className={'form-label'}>Mô tả</label>
                                </td>
                                <td> <Field name={'info'} type={'text'} className={'form-control'} id={'name'}
                                            placeholder={`${tours.info}`}/>  </td>
                            </tr>
                            <tr>
                                <td><button class="btn btn-info" type={"submit"}>Sửa</button></td>
                                <td><Link class="btn btn-light" to={'/'}>Hủy</Link></td>
                            </tr>
                        </table>
                    </Form>
                </Formik>
            </div>
        </>
    )




}