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
