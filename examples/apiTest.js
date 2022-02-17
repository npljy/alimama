/**
 * Module dependencies.
 */

const md5 = require('md5')
const dayjs = require('dayjs')
const _ = require('lodash')

ApiClient = require('../index.js').ApiClient;

const nowDate = dayjs().format('YYYY-MM-DD HH:mm:ss')
const appkey = '28744099'
const appsecret = '59ede7aba835b12d2c67b5e53a2cc7e3'
const commomParams = {
    appkey,
    appsecret,
    timestamp: nowDate,
    v: '2.0',
    format: 'json',
    simplify: true
}

const apiParmas = {
    url: 'https://m.tb.cn/h.fl6SRTZ?tk=Ut0H22LR64l',
    page_size: 20,
    page_no: 1,
    adzone_id: 110129450361,
    platform: 2,
    sort: 'tk_rate_des',
    material_id: 17004,
    q: '女装'
}

const params = { ...commomParams, ...apiParmas }
const paramKeys = Object.keys(params).sort()

const sign = paramKeys.reduce((s, e) => s += e + params[e], '')

commomParams.sign = md5('secret' + sign + 'secret')
commomParams['REST_URL'] = 'http://gw.api.taobao.com/router/rest'

var client = new ApiClient(commomParams);

client.execute('taobao.tbk.dg.material.optional', apiParmas, function (error, response) {
    if (!error) {
        console.log('taobao.tbk.tpwd.create success', response);
        console.log(5555, response.result_list.map_data)
    }
    else console.log(error);
})

var ret = [{
    category_id: 50008898,
    category_name: '卫衣/绒衫',
    commission_rate: '2600',
    commission_type: 'ZX',
    coupon_id: '',
    coupon_info: '',
    coupon_remain_count: 0,
    coupon_total_count: 0,
    include_dxjh: 'false',
    include_mkt: 'false',
    info_dxjh: '{}',
    item_description: '',
    item_id: 655965157307,
    item_url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3D84fmEvhwpRhw4vFB6t2Z2ueEDrYVVa64juWlisr3dOdyINtkUhsv0BV98E3wpXyGT1%2FGKn9oqNl1dwGaY5lGNGUkIjPoDJJapAUU7unUhe%2FKB5l0Zp8s9aq6zPJMKSDoFBoMXOGuG5DkaqczTKGnOntbslZPwYefMXeWawY64rZkPEKUa0l7jTCZbXZP1eeKPU3yuTRU7APGDF1NzTQoPw%3D%3D&union_lens=lensId%3AMAPI%401643427606%4021041c51_0937_17ea3eb3026_7eee%4001',
    level_one_category_id: 16,
    level_one_category_name: '女装/女士精品',
    nick: 'tb2486997292',
    num_iid: 655965157307,
    pict_url: 'https://img.alicdn.com/bao/uploaded/i1/2209204753326/O1CN01sQSBu51aRM1R1IReR_!!2209204753326.jpg',
    presale_deposit: '0',
    presale_end_time: 0,
    presale_start_time: 0,
    presale_tail_end_time: 0,
    presale_tail_start_time: 0,
    provcity: '浙江 杭州',
    real_post_fee: '0.00',
    reserve_price: '103',
    seller_id: 2209204753326,
    shop_dsr: 50000,
    shop_title: '美秀新潮小店OVO',
    short_title: '实价早秋新款韩版女装bf慵懒风卫衣',
    small_images: { string: [Array] },
    title: '实价早秋新款韩版女装卫衣bf慵懒风宽松薄款白色长袖秋冬上衣',
    tk_total_commi: '0',
    tk_total_sales: '0',
    url: '//s.click.taobao.com/t?e=m%3D2%26s%3D84fmEvhwpRhw4vFB6t2Z2ueEDrYVVa64juWlisr3dOdyINtkUhsv0BV98E3wpXyGT1%2FGKn9oqNl1dwGaY5lGNGUkIjPoDJJapAUU7unUhe%2FKB5l0Zp8s9aq6zPJMKSDoFBoMXOGuG5DkaqczTKGnOntbslZPwYefMXeWawY64rZkPEKUa0l7jTCZbXZP1eeKPU3yuTRU7APGDF1NzTQoPw%3D%3D&union_lens=lensId%3AMAPI%401643427606%4021041c51_0937_17ea3eb3026_7eee%4001',
    user_type: 0,
    volume: 0,
    white_image: '',
    zk_final_price: '103'
}]