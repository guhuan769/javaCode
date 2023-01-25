import axios from 'axios'
import React, { Component } from 'react'

export default class Comingsoon extends Component {
    componentDidMount() {
        //此处只有使用反向代理获取数据
        axios.get("/ajax/comingList?ci=1&limit=10&movieIds=&token=AgElH1l6SxontwGIDoJbCUMIo0vNe4DCmrvwSmAvAsLdyBY6ZipPD-uRzg0BCO4Y1wBKsXbQ7HV-mQAAAAAuFgAA0F58PDA0DSiljZKPR64jdCq4_pzQjkYoNWrX8F0Kq8sk4h8GZq32OVwlCGP9IK2A&optimus_uuid=C0B0B8F09C4F11ED948247BD41C193C7FAF5D1E6F2FF44538BBD699F073BF884&optimus_risk_level=71&optimus_code=10")
            .then(res => {
                console.log(res, "comingsoon")
            }).catch(err => {
                console.log("err", err)
            })

        axios.post("/web_feed/getWebList")
            .then(res => {
                console.log("post res ", res)
            })
    }
    render() {
        return (
            <div>Comingsoon</div>
        )
    }
}
