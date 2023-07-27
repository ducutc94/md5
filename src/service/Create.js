import {useState} from "react";
import {Tours} from "../model/Tours";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";


export default function Create(){
    const [tours,setTours] = useState(new Tours())
    const navigate = useNavigate()
    return(
        <>
            <div>
                <h1>Thêm Tours</h1>
            </div>
           <div>
               <Formik initialValues={{
                   name:'',
                   price:'',
                   info:''
               }

               }
               onSubmit={(values)=>{
                   axios.post('http://localhost:8080/api/tours',values).then((res =>{
                       alert("Them  "+res.data.name+"thành công")
                       navigate("/")
                   }))
               }
               }>
                   <Form>
                       <table>
                           <tr>
                               <td>  <label htmlFor={'name'} className={'form-label'}>Tên Tours</label>  </td>
                                   <td>  <Field name={'name'} type={'text'} className={'form-control'} id={'name'}
                                      placeholder={'Thêm tên'}/>  </td>
                           </tr>
                           <tr>
                               <td>  <label htmlFor={'price'} className={'form-label'}>Giá</label>  </td>
                                   <td>  <Field name={'price'} type={'text'} className={'form-control'} id={'name'}
                                      placeholder={'Thêm giá'}/>  </td>
                           </tr>
                           <tr>
                               <td>  <label htmlFor={'info'} className={'form-label'}>Mô tả</label>  </td>
                                   <td> <Field name={'info'} type={'text'} className={'form-control'} id={'name'}
                                      placeholder={'Thêm mô tả'}/>  </td>
                           </tr>
                           <tr>
                               <td>
                                   <button class="btn btn-info" type={"submit"}>Thêm</button>
                                   <Link class="btn btn-light" to={'/'}>Hủy</Link>
                               </td>
                           </tr>
                       </table>
                   </Form>
               </Formik>
           </div>




        </>
    )
}