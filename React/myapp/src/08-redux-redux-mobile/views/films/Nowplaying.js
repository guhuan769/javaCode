import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { NavLink, useHistory, withRouter } from 'react-router-dom'
import { InfiniteScroll, Image, List } from 'antd-mobile'

export default function Nowplaying(props) {
  const [list, setlist] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const count = useRef(0)

  async function loadMore() {
    console.log("到底了")
    count.current++
    setHasMore(false)
    axios({
      url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${count.current}&pageSize=10&type=1&k=7250859`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      //console.log(res.data.data.films)
      //每次都必须合并
      setlist([...list, ...res.data.data.films])
      //此处判断如果长度大于0就为true就可以继续发送请求
      setHasMore(res.data.data.films.length > 0)
    })
  }

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
      <List>
        {list.map(item => (
          <List.Item
            key={item.filmId}
            arrow={true}//是否显示箭头
            onClick={() => handleChangePage(item.filmId)}
            prefix={
              <Image
                src={item.poster}
                // style={{ borderRadius: 20 }}
                /// fit='cover'
                width={80}
              //height={80}
              />
            }
            description={
              <div>
                {
                  item.grade ?
                    <div>观众评分:{item.grade}</div>
                    :
                    <div style={{ visibility: "hidden" }}>观众评分</div>
                }
                {/* style={{visibility:"hidden"}} 占位不显示 */}
                {/* <div style={{ visibility: "hidden" }}>观众评分:{item.grade}</div> */}
                <div>主演:{item.director}</div>
                <div>{item.nation}{item.runtime}分钟</div>
              </div>
            }
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}


function FilmItem(props) {
  //console.log(props)
  let { filmId, poster, name } = props
  return (
    <li
      onClick={() =>// handleChangePage(item.filmId)
        props.history.push(`/detail/${filmId}`)
      }
    >{name}
      {/* <NavLink to={'/detail/' + item.filmId}>
      {item.name}
    </NavLink> */}
      {/* <img src={poster}></img> */}
    </li>

  )
  // <li>1111</li>
}
// withRouter 高阶组件
//爸爸withRouter爸爸组件
const WithFilmItem = withRouter(FilmItem)