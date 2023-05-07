import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/partials/pages/shiptracking.scss';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzOTA1NjMsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjc4OTgzMTc0LCJleHAiOjE2Nzk4NDcxNzQsIm5iZiI6MTY3ODk4MzE3NCwianRpIjoic3RlZVBxRDZ3OWhreDdyTCJ9.MOZ9_nuWttsy0SkJi1nz-I2h3swyZsj67nh1q0v4fbM";
var dropdownMenu;
async function fetchData() {
    try {
        const response = await axios.get('https://apiv2.shiprocket.in/v1/external/courier/track/awb/3075654577', { headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` } });
        // console.log(response.data.tracking_data.shipment_track_activities);
        dropdownMenu = response.data.tracking_data.shipment_track_activities;
        console.log(dropdownMenu[0].date);

    }
    catch (error) {
        console.log('error');
        console.log(error);
    }
}
const Shiptracking = () => {
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-10 hh-grayBox pt45 pb20">
                        <div class="row d-flex justify-content-between">
                            <div class="order-tracking completed">
                                <span class="is-complete"></span>
                                <p>Ordered<br /><span>Mon, Nov 1</span></p>
                            </div>
                            <div class="order-tracking completed">
                                <span class="is-complete"></span>
                                <p>Shipped<br /><span>Tue, Nov 1</span></p>
                            </div>
                            <div class="order-tracking completed ">
                                <span class="is-complete"></span>
                                <p>Delivered<br /><span>Thu, Nov 04</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
            <table>
  <tr className=''>
    <th>date</th>
    <th>activity </th>
    <th>location</th>
  </tr>

</table>
            </div>
            
        </>
    );
};

export default Shiptracking