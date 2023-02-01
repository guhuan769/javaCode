import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useHistory, withRouter } from 'react-router-dom'

export default function Nowplaying(props) {
  const [list, setlist] = useState([])
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7250859",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      setlist(res.data.data.films)
    })
  }, [])



  const history = useHistory() //等价于props.history 只不过这是路由封装的history

  //hooks写法
  const handleChangePage = (id) => {
    //window.location.href = "#/detail" + id //编程式导航
    // console.log(props) '/detail/'+id
    //1 动态路由
    history.push(`/detail/${id}`)//声明式导航
    //props.history.push(`/detail/${id}`) 
    //2 query传参
    //history.push({pathname:'/detail',query:{id:id}})
    //3 -state传参
    //history.push({pathname:"/detail",state:{id:id}})
  }
  return (
    <div>
      {
        list.map(item =>
          <WithFilmItem
            key={item.filmId}
            {...item}
          //{...props}
          />
        )
      }
    </div>
  )
}


function FilmItem(props) {
  //console.log(props)
  let { filmId, poster, name } = props
  return <li
    onClick={() =>// handleChangePage(item.filmId)
      props.history.push(`/detail/${filmId}`)
    }
  >{name}
    {/* <NavLink to={'/detail/' + item.filmId}>
      {item.name}
    </NavLink> */}
    {/* <img src={poster}></img> */}
  </li>
}
// withRouter 高阶组件
//爸爸withRouter爸爸组件
const WithFilmItem = withRouter(FilmItem)