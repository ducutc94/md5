import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import "../scss/info.css"

export default function Info(){
    const [tours,setTours] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/tours/${id}`).then((res=>{
            setTours(res.data)
        }))
    },[])
    return(
        <>

            <div>
                <h1>Chi Tiết Tours</h1>
            </div>
            <div>
                <span className={"info"}>Tours du lịch : {tours.name}</span><br/>
                <span className={"info"}>Giá : {tours.price}</span><br/>
                <span className={"info"}>Giới thiệu : {tours.info}</span><br/>
                <span><Link class="btn btn-light" to={'/'}>Danh Sách</Link></span>
            </div>
        </>
    )

}