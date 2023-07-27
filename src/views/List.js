import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import "../scss/list.css"


function List(){
    const [list,setList] = useState([]);
    const navigate = useNavigate();

useEffect(()=>{
    axios.get('http://localhost:8080/api/tours').then((res=>{
        setList(res.data);
    }))
},[])

    function deleteByID(value) {
    if(window.confirm("bạn Có thực sự muốn xóa")){
        axios.delete(`http://localhost:8080/api/tours/${value}`).then((res=>{
            alert("Xóa Thành công")
            window.location.reload();
        }))
    }
    }
    return(
        <>
            <div>
                <Link id={'create'} to={'/create'} class="btn btn-warning">Add</Link>
            </div>
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th colSpan={2}></th>
                    </tr>
                    {list.map((item,index) =>{
                        return(
                            <>
                                <tr>
                                    <td>{++index}</td>
                                    <td><Link className={"name-btn"} to={`/info/${item.id}`}>{item.name}</Link></td>
                                    <td>{item.price}</td>
                                    <td><Link class="btn btn-success" to={`/update/${item.id}`}>Edit</Link></td>
                                    <td><button class="btn btn-primary" onClick={()=>{
                                    deleteByID(item.id)}
                                    }>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </div>

        </>
    )
}
export default List;