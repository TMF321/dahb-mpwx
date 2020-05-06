import axios from 'axios'

/**
 * 获取轮播图
 */
export const getBanner = () => {
  return axios({
    url: '/mop/banner.json',
    methods: 'GET'
  })
}

/**
 * 获取本周排行
 */
export const getWeek = () => {
  return axios({
    url: '/api/book/newboard/bzphh5.json',
    methods: 'GET'
  })
}
