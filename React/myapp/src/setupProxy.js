const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    console.log("/ajax")
    app.use(
        '/ajax',
        createProxyMiddleware({
            target: 'https://i.maoyan.com',
            changeOrigin: true,
        })
    );
        //如果多个地址直接加app.use
    app.use(
        '/web_feed',
        createProxyMiddleware({
            target: 'https://r.inews.qq.com',
            changeOrigin: true,
        })
    );
    //https://r.inews.qq.com/web_feed/getWebList
};

//https://i.maoyan.com/ajax/comingList?ci=1&limit=10&movieIds=&token=AgElH1l6SxontwGIDoJbCUMIo0vNe4DCmrvwSmAvAsLdyBY6ZipPD-uRzg0BCO4Y1wBKsXbQ7HV-mQAAAAAuFgAA0F58PDA0DSiljZKPR64jdCq4_pzQjkYoNWrX8F0Kq8sk4h8GZq32OVwlCGP9IK2A&optimus_uuid=C0B0B8F09C4F11ED948247BD41C193C7FAF5D1E6F2FF44538BBD699F073BF884&optimus_risk_level=71&optimus_code=10
//https://i.maoyan.com/ajax/comingList?ci=1&limit=10&movieIds=&token=AgElH1l6SxontwGIDoJbCUMIo0vNe4DCmrvwSmAvAsLdyBY6ZipPD-uRzg0BCO4Y1wBKsXbQ7HV-mQAAAAAuFgAA0F58PDA0DSiljZKPR64jdCq4_pzQjkYoNWrX8F0Kq8sk4h8GZq32OVwlCGP9IK2A&optimus_uuid=C0B0B8F09C4F11ED948247BD41C193C7FAF5D1E6F2FF44538BBD699F073BF884&optimus_risk_level=71&optimus_code=10