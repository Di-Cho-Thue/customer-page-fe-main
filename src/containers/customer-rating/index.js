import { useState, useEffect } from "react";
import Rating from "../../components/Rating/Rating"
import axios from "axios";

function RatingPage() {

    // const chitietdonhangData = orderdetail.map(od => {
    //     let chitietdonhangsp = product.filter(pod => {
    //         return pod.MaSanPham === od.MaSanPham
    //     })
    //     return{...od, product: chitietdonhangsp}
    // })
    // console.log(chitietdonhangData)
    return (
        <Rating />
    );
}

export default RatingPage;